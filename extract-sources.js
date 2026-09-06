const fs = require('fs');
const path = require('path');

const files = [
  '.next/dev/static/chunks/app/dashboard/page.js',
  '.next/dev/static/chunks/app/project/[id]/page.js',
  '.next/dev/static/chunks/app/login/page.js',
  '.next/dev/static/chunks/app/profile/page.js',
];

const targets = [
  'components/layout/Sidebar.tsx',
  'components/task/CreateTaskModal.tsx',
  'components/task/TaskDetailModal.tsx',
  'components/project/ProjectView.tsx',
  'store/index.ts',
  'app/login/page.tsx',
  'app/profile/page.tsx',
];

for (const bundle of files) {
  if (!fs.existsSync(bundle)) continue;
  const content = fs.readFileSync(bundle, 'utf8');
  const marker = '/***/ "(app-pages-browser)/./src/';
  let pos = 0;
  while (true) {
    const start = content.indexOf(marker, pos);
    if (start === -1) break;
    const fileStart = start + marker.length;
    const fileEnd = content.indexOf('":', fileStart);
    const rel = content.slice(fileStart, fileEnd);
    if (targets.some(t => rel.endsWith(t) || rel.includes(t))) {
      const evalStart = content.indexOf('eval(__webpack_require__.ts("', fileEnd);
      const strStart = evalStart + 'eval(__webpack_require__.ts("'.length;
      let i = strStart;
      let out = '';
      while (i < content.length) {
        const ch = content[i];
        if (ch === '\\') {
          const next = content[i + 1];
          if (next === 'n') out += '\n';
          else if (next === 'r') out += '\r';
          else if (next === 't') out += '\t';
          else if (next === '"') out += '"';
          else if (next === '\\') out += '\\';
          else out += next;
          i += 2;
          continue;
        }
        if (ch === '"') break;
        out += ch;
        i++;
      }
      const outPath = path.join('extracted', rel);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, out);
      console.log('Extracted:', rel);
    }
    pos = fileEnd + 1;
  }
}
