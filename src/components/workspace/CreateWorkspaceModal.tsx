'use client';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { closeModal, addToast } from '@/store/slices/uiSlice';
import { addWorkspace } from '@/store/slices/workspaceSlice';
import { Modal } from '@/components/ui/Modal';
import type { Workspace } from '@/types';

export function CreateWorkspaceModal() {
  const dispatch = useAppDispatch();
  const activeModal = useAppSelector(s => s.ui.activeModal);
  const currentUser = useAppSelector(s => s.auth.currentUser);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('🚀');

  if (activeModal !== 'createWorkspace') return null;

  const emojiOptions = ['🚀', '💼', '⚡', '🌟', '🎨', '🎯', '🔬', '🌐', '🛠️', '📱'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newWs: Workspace = {
      id: `ws-${Date.now().toString().slice(-6)}`,
      name: name.trim(),
      description: description.trim() || undefined,
      icon,
      color: '#B08D57',
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
      settings: {
        defaultView: 'kanban',
        allowMemberInvites: true,
        notificationsEnabled: true,
      },
    };

    dispatch(addWorkspace(newWs));
    dispatch(closeModal());
    dispatch(addToast({
      id: String(Date.now()),
      title: 'Workspace Created',
      description: `Switched to ${newWs.name}`,
      type: 'success',
    }));

    setName('');
    setDescription('');
  };

  return (
    <Modal
      open={true}
      onClose={() => dispatch(closeModal())}
      title="Create New Workspace"
      size="sm"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>
            Workspace Icon
          </label>
          <div className="flex gap-2 flex-wrap">
            {emojiOptions.map(em => (
              <button
                key={em}
                type="button"
                onClick={() => setIcon(em)}
                className={`w-9 h-9 text-lg rounded-lg border flex items-center justify-center transition-all ${
                  icon === em ? 'border-gold bg-gold/10 scale-110' : 'border-border hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {em}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>
            Workspace Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. Acme Design Studio"
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
            placeholder="What is this workspace for?"
            rows={2}
            className="textarea w-full text-xs"
          />
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
            Create Workspace
          </button>
        </div>
      </form>
    </Modal>
  );
}
