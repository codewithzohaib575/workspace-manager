'use client';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { closeCommandPalette, setTheme, openSearch } from '@/store/slices/uiSlice';
import { useRouter } from 'next/navigation';
import { logout } from '@/store/slices/authSlice';
import {
  LayoutDashboard, Plus, Search, Settings, Sun, Moon, LogOut,
  FolderKanban, Calendar, Bell, ArrowRight, Command,
} from 'lucide-react';

interface PaletteAction {
  id: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
  group: string;
}

export function CommandPalette() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const open = useAppSelector(s => s.ui.commandPaletteOpen);
  const theme = useAppSelector(s => s.ui.theme);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut to open
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        dispatch(open ? closeCommandPalette() : { type: 'ui/openCommandPalette' });
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [dispatch, open]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const nav = (href: string) => { router.push(href); dispatch(closeCommandPalette()); };

  const actions: PaletteAction[] = [
    { id: 'dashboard', label: 'Go to Dashboard', icon: <LayoutDashboard size={15} />, shortcut: '', action: () => nav('/dashboard'), group: 'Navigation' },
    { id: 'calendar', label: 'Go to Calendar', icon: <Calendar size={15} />, action: () => nav('/calendar'), group: 'Navigation' },
    { id: 'notifications', label: 'Go to Notifications', icon: <Bell size={15} />, action: () => nav('/notifications'), group: 'Navigation' },
    { id: 'settings', label: 'Open Settings', icon: <Settings size={15} />, action: () => nav('/settings'), group: 'Navigation' },
    { id: 'new-task', label: 'Create New Task', icon: <Plus size={15} />, shortcut: 'N', action: () => { nav('/dashboard'); dispatch({ type: 'ui/openModal', payload: 'createTask' }); }, group: 'Actions' },
    { id: 'new-project', label: 'Create New Project', icon: <FolderKanban size={15} />, action: () => nav('/project/new'), group: 'Actions' },
    { id: 'new-workspace', label: 'Create New Workspace', icon: <Plus size={15} />, action: () => nav('/workspace/new'), group: 'Actions' },
    { id: 'search', label: 'Search Everything', icon: <Search size={15} />, action: () => { dispatch(closeCommandPalette()); dispatch(openSearch()); }, group: 'Actions' },
    { id: 'theme', label: theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode', icon: theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />, action: () => { dispatch(setTheme(theme === 'dark' ? 'light' : 'dark')); dispatch(closeCommandPalette()); }, group: 'Preferences' },
    { id: 'profile', label: 'View Profile', icon: <Settings size={15} />, action: () => nav('/profile'), group: 'Account' },
    { id: 'logout', label: 'Sign Out', icon: <LogOut size={15} />, action: () => { dispatch(logout()); router.push('/login'); dispatch(closeCommandPalette()); }, group: 'Account' },
  ];

  const filtered = query.trim()
    ? actions.filter(a => a.label.toLowerCase().includes(query.toLowerCase()) || a.group.toLowerCase().includes(query.toLowerCase()))
    : actions;

  const groups = Array.from(new Set(filtered.map(a => a.group)));

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const flatFiltered = filtered;

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, flatFiltered.length - 1)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)); }
      if (e.key === 'Enter' && flatFiltered[selected]) { flatFiltered[selected].action(); }
      if (e.key === 'Escape') dispatch(closeCommandPalette());
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, selected, flatFiltered, dispatch]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center" style={{ paddingTop: '15vh' }}>
      <div className="overlay" onClick={() => dispatch(closeCommandPalette())} />
      <div
        role="dialog"
        aria-label="Command palette"
        className="modal-enter"
        style={{
          width: '100%',
          maxWidth: 600,
          background: 'var(--surface)',
          borderRadius: 12,
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-xl)',
          overflow: 'hidden',
          zIndex: 51,
          position: 'relative',
        }}
      >
        {/* Search input */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderBottom: '1px solid var(--border)' }}>
          <Command size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Type a command or search…"
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              fontSize: 15,
              color: 'var(--text-primary)',
              fontFamily: 'Almarai, sans-serif',
            }}
          />
          <kbd style={{ fontSize: 11, background: 'var(--border)', borderRadius: 4, padding: '2px 6px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>ESC</kbd>
        </div>

        {/* Results */}
        <div style={{ maxHeight: 400, overflowY: 'auto', padding: '6px' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
              No commands found for &quot;{query}&quot;
            </div>
          ) : (
            groups.map(group => (
              <div key={group}>
                <div style={{ padding: '6px 10px 4px', fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {group}
                </div>
                {filtered.filter(a => a.group === group).map(action => {
                  const idx = flatFiltered.indexOf(action);
                  return (
                    <button
                      key={action.id}
                      onClick={action.action}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        width: '100%',
                        padding: '9px 10px',
                        borderRadius: 6,
                        background: idx === selected ? 'var(--surface-raised)' : 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        color: 'var(--text-primary)',
                        fontFamily: 'Almarai, sans-serif',
                        transition: 'background 100ms',
                      }}
                      onMouseEnter={() => setSelected(idx)}
                    >
                      <span style={{ color: 'var(--text-secondary)', display: 'flex' }}>{action.icon}</span>
                      <span style={{ flex: 1, fontSize: 14 }}>{action.label}</span>
                      {action.shortcut && (
                        <kbd style={{ fontSize: 10, background: 'var(--border)', borderRadius: 3, padding: '1px 5px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                          {action.shortcut}
                        </kbd>
                      )}
                      <ArrowRight size={13} style={{ color: 'var(--text-muted)', opacity: idx === selected ? 1 : 0 }} />
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: '8px 12px', borderTop: '1px solid var(--border)', display: 'flex', gap: 12, fontSize: 11, color: 'var(--text-muted)' }}>
          <span>↑↓ Navigate</span>
          <span>↵ Select</span>
          <span>ESC Close</span>
        </div>
      </div>
    </div>
  );
}
