'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store';
import { closeModal, addToast } from '@/store/slices/uiSlice';
import { addProject } from '@/store/slices/projectSlice';
import { Modal } from '@/components/ui/Modal';
import type { Project, KanbanColumn } from '@/types';

export function CreateProjectModal() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const activeModal = useAppSelector(s => s.ui.activeModal);
  const currentWorkspaceId = useAppSelector(s => s.workspaces.currentWorkspaceId);
  const currentUser = useAppSelector(s => s.auth.currentUser);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('📋');
  const [color, setColor] = useState('#B08D57');
  const [defaultView, setDefaultView] = useState<'kanban' | 'list' | 'calendar'>('kanban');

  if (activeModal !== 'createProject') return null;

  const emojiOptions = ['📋', '⚡', '💻', '🚀', '🎯', '🎨', '🔍', '📊', '🛡️', '📦'];
  const colorOptions = ['#B08D57', '#3B82F6', '#10B981', '#8B5CF6', '#EC4899', '#F59E0B', '#6366F1'];

  const defaultColumns: KanbanColumn[] = [
    { id: 'col-1', name: 'Backlog', color: '#6B7280', order: 0 },
    { id: 'col-2', name: 'To Do', color: '#3B82F6', order: 1 },
    { id: 'col-3', name: 'In Progress', color: '#F59E0B', order: 2 },
    { id: 'col-4', name: 'In Review', color: '#8B5CF6', order: 3 },
    { id: 'col-5', name: 'Done', color: '#10B981', order: 4 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !currentWorkspaceId) return;

    const projectId = `proj-${Date.now().toString().slice(-6)}`;
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
      kanbanColumns: defaultColumns,
      defaultView,
      settings: {
        allowMemberInvites: true,
      },
    };

    dispatch(addProject(newProject));
    dispatch(closeModal());
    dispatch(addToast({
      id: String(Date.now()),
      title: 'Project Created',
      description: `"${newProject.name}" is ready`,
      type: 'success',
    }));

    router.push(`/project/${projectId}`);
  };

  return (
    <Modal
      open={true}
      onClose={() => dispatch(closeModal())}
      title="Create New Project"
      size="md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>
            Project Icon & Color
          </label>
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
          <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>
            Project Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. Website Redesign Q3"
            className="input w-full text-sm"
            autoFocus
          />
        </div>

        <div>
          <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>
            Description (Optional)
          </label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Key objectives, milestones, or overview..."
            rows={2}
            className="textarea w-full text-xs"
          />
        </div>

        <div>
          <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>
            Default View
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'kanban', label: 'Kanban Board', icon: '📊' },
              { id: 'list', label: 'Table List', icon: '📑' },
              { id: 'calendar', label: 'Calendar', icon: '📅' },
            ].map(v => (
              <button
                key={v.id}
                type="button"
                onClick={() => setDefaultView(v.id as typeof defaultView)}
                className={`p-2 rounded-lg border text-xs flex flex-col items-center gap-1 transition-all ${
                  defaultView === v.id
                    ? 'border-gold bg-gold/10 font-bold'
                    : 'border-border hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <span>{v.icon}</span>
                <span>{v.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
          <button
            type="button"
            onClick={() => dispatch(closeModal())}
            className="btn btn-secondary btn-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary btn-sm"
          >
            Create Project
          </button>
        </div>
      </form>
    </Modal>
  );
}
