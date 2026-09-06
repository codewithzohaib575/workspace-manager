'use client';
import { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppDispatch, useAppSelector } from '@/store';
import { switchUser, updateProfile } from '@/store/slices/authSlice';
import { addToast } from '@/store/slices/uiSlice';
import { Avatar } from '@/components/ui';
import { User, Users, Check, Save } from 'lucide-react';

const roleLabels = { owner: 'Owner', admin: 'Admin', member: 'Member', viewer: 'Viewer' } as const;

export default function ProfilePage() {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(s => s.auth.currentUser);
  const users = useAppSelector(s => s.auth.users) || [];
  const currentWorkspaceId = useAppSelector(s => s.workspaces.currentWorkspaceId);
  const workspace = useAppSelector(s => s.workspaces.items.find(item => item.id === currentWorkspaceId));

  const getRole = (userId: string) => roleLabels[workspace?.members.find(member => member.userId === userId)?.role ?? 'member'];

  const [name, setName] = useState(currentUser?.name ?? '');
  const [email, setEmail] = useState(currentUser?.email ?? '');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    dispatch(updateProfile({ name: name.trim(), email: email.trim() }));
    dispatch(addToast({
      id: String(Date.now()),
      title: 'Profile Updated',
      description: 'Your details have been saved',
      type: 'success',
    }));
  };

  const handleSwitchUser = (userId: string) => {
    dispatch(switchUser(userId));
    const targetUser = users?.find(u => u.id === userId);
    if (targetUser) {
      setName(targetUser.name);
      setEmail(targetUser.email);
      dispatch(addToast({
        id: String(Date.now()),
        title: 'User Switched',
        description: `Now acting as ${targetUser.name}`,
        type: 'info',
      }));
    }
  };

  return (
    <AppShell>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gold/10 text-gold">
            <User size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
              User Profile & Team Switcher
            </h1>
            <p className="text-xs text-muted">Manage your personal profile or simulate other teammates.</p>
          </div>
        </div>

        {/* Current User Card */}
        {currentUser && (
          <div className="p-5 rounded-xl border space-y-4 shadow-sm" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <div className="flex items-center gap-4 pb-4 border-b" style={{ borderColor: 'var(--border)' }}>
              <Avatar name={currentUser.name} color={currentUser.color} size="lg" />
              <div>
                <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                  {currentUser.name}
                </h3>
                <p className="text-xs text-muted">{currentUser.email}</p>
                <span className="mt-1 inline-block rounded-full bg-gold/10 px-2 py-0.5 text-[10px] font-bold uppercase text-gold">{getRole(currentUser.id)}</span>
              </div>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-3 max-w-md">
              <div>
                <label className="text-xs font-semibold block mb-1 text-muted">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="input text-xs w-full"
                />
              </div>

              <div>
                <label className="text-xs font-semibold block mb-1 text-muted">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="input text-xs w-full"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-xs flex items-center gap-1">
                <Save size={13} /> Save Changes
              </button>
            </form>
          </div>
        )}

        {/* Switch Persona / Teammate */}
        <div className="p-5 rounded-xl border space-y-4 shadow-sm" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-2 font-bold text-sm">
            <Users size={16} className="text-gold" />
            <span>Switch Teammate Persona (Demo Tool)</span>
          </div>
          <p className="text-xs text-muted">
            Click any team member below to simulate their view and permissions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {(users || []).map(u => {
              const isActive = u.id === currentUser?.id;
              return (
                <div
                  key={u.id}
                  onClick={() => handleSwitchUser(u.id)}
                  className={`p-3 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
                    isActive ? 'border-gold bg-gold/10' : 'border-border hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Avatar name={u.name} color={u.color} size="sm" />
                    <div>
                      <div className="text-xs font-bold">{u.name}</div>
                      <div className="text-[11px] text-muted">{u.email}</div>
                      <div className="text-[10px] font-bold uppercase text-gold">{getRole(u.id)}</div>
                    </div>
                  </div>

                  {isActive && <Check size={16} className="text-gold flex-shrink-0" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
