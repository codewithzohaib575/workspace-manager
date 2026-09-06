'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { useAppDispatch, useAppSelector } from '@/store';
import { addWorkspace } from '@/store/slices/workspaceSlice';
import { addToast } from '@/store/slices/uiSlice';
import { Briefcase, ArrowRight } from 'lucide-react';
import type { Workspace } from '@/types';

export default function NewWorkspacePage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(s => s.auth.currentUser);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('🏢');

  const emojiOptions = ['🏢', '🚀', '⚡', '🌟', '🎨', '🎯', '🔬', '🌐', '🛠️', '📱'];

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
    dispatch(addToast({
      id: String(Date.now()),
      title: 'Workspace Created',
      description: `Welcome to ${newWs.name}!`,
      type: 'success',
    }));

    router.push('/dashboard');
  };

  return (
    <AppShell>
      <div className="p-6 max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gold/10 text-gold">
            <Briefcase size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Create New Workspace
            </h1>
            <p className="text-xs text-muted">A workspace groups your team, projects, and tasks together.</p>
          </div>
        </div>

        <div className="p-6 rounded-xl border space-y-4 shadow-sm" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold block mb-1 text-muted">Workspace Icon</label>
              <div className="flex gap-2 flex-wrap">
                {emojiOptions.map(em => (
                  <button
                    key={em}
                    type="button"
                    onClick={() => setIcon(em)}
                    className={`w-9 h-9 text-lg rounded-lg border flex items-center justify-center transition-all ${
                      icon === em ? 'border-gold bg-gold/15 scale-110' : 'border-border hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {em}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold block mb-1 text-muted">Workspace Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Acme Studio"
                className="input text-xs w-full"
                autoFocus
              />
            </div>

            <div>
              <label className="text-xs font-semibold block mb-1 text-muted">Description (Optional)</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="What is this workspace used for?"
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
                Create Workspace <ArrowRight size={14} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppShell>
  );
}
