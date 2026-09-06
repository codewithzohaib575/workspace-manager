const fs = require('fs');
const path = require('path');

function restoreFromFile(extractedPath, destPath) {
  const content = fs.readFileSync(extractedPath, 'utf8');
  const match = content.match(/sourceMappingURL=data:application\/json;charset=utf-8;base64,([A-Za-z0-9+/=]+)/);
  if (!match) {
    console.log('No source map in', extractedPath);
    return false;
  }
  const map = JSON.parse(Buffer.from(match[1], 'base64').toString('utf8'));
  if (!map.sourcesContent || !map.sourcesContent[0]) {
    console.log('No sourcesContent in', extractedPath);
    return false;
  }
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, map.sourcesContent[0]);
  console.log('Restored:', destPath);
  return true;
}

const mappings = [
  ['extracted/store/index.ts', 'src/store/index.ts'],
  ['extracted/components/layout/Sidebar.tsx', 'src/components/layout/Sidebar.tsx'],
  ['extracted/components/task/CreateTaskModal.tsx', 'src/components/task/CreateTaskModal.tsx'],
  ['extracted/components/task/TaskDetailModal.tsx', 'src/components/task/TaskDetailModal.tsx'],
  ['extracted/components/project/ProjectView.tsx', 'src/components/project/ProjectView.tsx'],
  ['extracted/app/login/page.tsx', 'src/app/login/page.tsx'],
  ['extracted/app/profile/page.tsx', 'src/app/profile/page.tsx'],
];

for (const [src, dest] of mappings) {
  if (fs.existsSync(src)) restoreFromFile(src, dest);
}
