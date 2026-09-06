'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { useAppDispatch, useAppSelector } from '@/store';
import { addProject } from '@/store/slices/projectSlice';
import { addTask } from '@/store/slices/taskSlice';
import { addToast } from '@/store/slices/uiSlice';
import { PROJECT_TEMPLATES } from '@/lib/templates';
import { FolderPlus, Sparkles, ArrowRight, Check } from 'lucide-react';
import type { Project, KanbanColumn, Task } from '@/types';

export default function NewProjectPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const currentWorkspaceId = useAppSelector(s => s.workspaces.currentWorkspaceId);
  const currentUser = useAppSelector(s => s.auth.currentUser);

  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('📋');
  const [color, setColor] = useState('#B08D57');

  const emojiOptions = ['📋', '⚡', '💻', '🚀', '🎯', '🎨', '📢', '🔬', '🌐', '📱'];
  const colorOptions = ['#B08D57', '#4A90D9', '#4AAD7A', '#7C6FAF', '#D96B4A', '#F59E0B', '#6366F1'];

  const handleSelectTemplate = (templateId: string | null) => {
    setSelectedTemplateId(templateId);
    if (templateId) {
      const tmpl = PROJECT_TEMPLATES.find(t => t.id === templateId);
      if (tmpl) {
        setName(tmpl.name);
        setDescription(tmpl.description);
        setIcon(tmpl.icon);
        setColor(tmpl.color);
      }
    } else {
      setName('');
      setDescription('');
      setIcon('📋');
      setColor('#B08D57');
    }
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !currentWorkspaceId) return;

    const projectId = `proj-${Date.now().toString().slice(-6)}`;
    const tmpl = PROJECT_TEMPLATES.find(t => t.id === selectedTemplateId);

    const columns: KanbanColumn[] = tmpl
      ? tmpl.columns.map((c, idx) => ({ ...c, id: `col-${idx + 1}` }))
      : [
          { id: 'col-1', name: 'Backlog', color: '#6B7280', order: 0 },
          { id: 'col-2', name: 'To Do', color: '#3B82F6', order: 1 },
          { id: 'col-3', name: 'In Progress', color: '#F59E0B', order: 2 },
          { id: 'col-4', name: 'In Review', color: '#8B5CF6', order: 3 },
          { id: 'col-5', name: 'Done', color: '#10B981', order: 4 },
        ];

    const newProject: Project = {
      id: projectId,
      workspaceId: currentWorkspaceId,
      name: name.trim(),
      description: description.trim() || undefined,
      icon,
      color,
      status: 'active',
      ownerId: currentUser?.id ?? 'user-1',
      members: [
        {
          userId: currentUser?.id ?? 'user-1',
          role: 'owner',
          joinedAt: new Date().toISOString(),
        },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      kanbanColumns: columns,
      defaultView: 'kanban',
      settings: {
        allowMemberInvites: true,
      },
    };

    dispatch(addProject(newProject));

    // If template has pre-made tasks, add them to taskSlice
    if (tmpl && tmpl.tasks) {
      tmpl.tasks.forEach((t, i) => {
        const newTask: Task = {
          id: `task-${Date.now().toString().slice(-6)}-${i}`,
          title: t.title,
          description: t.description,
          projectId,
          workspaceId: currentWorkspaceId,
          status: 'todo',
          priority: t.priority,
          labels: t.labels,
          subtasks: [],
          comments: [],
          attachments: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          createdBy: currentUser?.id ?? 'user-1',
          order: i,
          isArchived: false,
        };
        dispatch(addTask(newTask));
      });
    }

    dispatch(addToast({
      id: String(Date.now()),
      title: 'Project Created',
      description: `"${newProject.name}" with ${columns.length} columns created`,
      type: 'success',
    }));

    router.push(`/project/${projectId}`);
  };

  return (
    <AppShell>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gold/10 text-gold">
            <FolderPlus size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Create New Project
            </h1>
            <p className="text-xs text-muted">Choose a template or start from scratch.</p>
          </div>
        </div>

        {/* Template Selector Grid */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted block">
            Select Template
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {/* Blank Option */}
            <div
              onClick={() => handleSelectTemplate(null)}
              className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                selectedTemplateId === null
                  ? 'border-gold bg-gold/10 shadow-sm'
                  : 'border-border hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <div>
                <span className="text-2xl mb-2 block">✨</span>
                <h4 className="text-xs font-bold mb-1">Blank Project</h4>
                <p className="text-[11px] text-muted">Custom columns and clean slate.</p>
              </div>
              {selectedTemplateId === null && <Check size={16} className="text-gold mt-3" />}
            </div>

            {/* Template options */}
            {PROJECT_TEMPLATES.map(tmpl => (
              <div
                key={tmpl.id}
                onClick={() => handleSelectTemplate(tmpl.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  selectedTemplateId === tmpl.id
                    ? 'border-gold bg-gold/10 shadow-sm'
                    : 'border-border hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <div>
                  <span className="text-2xl mb-2 block">{tmpl.icon}</span>
                  <h4 className="text-xs font-bold mb-1">{tmpl.name}</h4>
                  <p className="text-[11px] text-muted line-clamp-2">{tmpl.description}</p>
                </div>
                {selectedTemplateId === tmpl.id && <Check size={16} className="text-gold mt-3" />}
              </div>
            ))}
          </div>
        </div>

        {/* Project Customization Form */}
        <div className="p-6 rounded-xl border space-y-4 shadow-sm" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <form onSubmit={handleCreate} className="space-y-4 max-w-lg">
            <div>
              <label className="text-xs font-semibold block mb-1 text-muted">Icon & Accent Color</label>
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5 flex-wrap flex-1">
                  {emojiOptions.map(em => (
                    <button
                      key={em}
                      type="button"
                      onClick={() => setIcon(em)}
                      className={`w-8 h-8 text-base rounded border flex items-center justify-center transition-all ${
                        icon === em ? 'border-gold bg-gold/15 scale-105' : 'border-border'
                      }`}
                    >
                      {em}
                    </button>
                  ))}
                </div>

                <div className="flex gap-1.5 items-center">
                  {colorOptions.map(c => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setColor(c)}
                      className={`w-6 h-6 rounded-full border-2 transition-all ${
                        color === c ? 'scale-125 border-white shadow' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold block mb-1 text-muted">Project Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Mobile App V2"
                className="input text-xs w-full"
                autoFocus
              />
            </div>

            <div>
              <label className="text-xs font-semibold block mb-1 text-muted">Description (Optional)</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="What is the goal of this project?"
                rows={3}
                className="textarea text-xs w-full"
              />
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => router.back()}
                className="btn btn-secondary btn-sm text-xs"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-sm text-xs flex items-center gap-1.5"
              >
                Create Project <ArrowRight size={14} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppShell>
  );
}
