'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store';
import { openCommandPalette, openSearch, toggleSidebar, toggleTheme } from '@/store/slices/uiSlice';
import { logout } from '@/store/slices/authSlice';
import { Avatar } from '@/components/ui';
import { Search, Bell, Sun, Moon, LogOut, User, Settings, ChevronDown, Menu } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function TopNav() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const currentUser = useAppSelector(s => s.auth.currentUser);
  const unreadCount = useAppSelector(s => s.notifications.unreadCount);
  const theme = useAppSelector(s => s.ui.theme);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login');
  };

  return (
    <header style={{
      height: 52,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 16px',
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      flexShrink: 0,
      zIndex: 30,
      position: 'relative',
    }}>
      <button onClick={() => dispatch(toggleSidebar())} className="mobile-menu-button btn btn-ghost btn-icon btn-sm" aria-label="Open navigation">
        <Menu size={18} />
      </button>
      {/* Search button */}
      <button
        onClick={() => dispatch(openCommandPalette())}
        className="topnav-search"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '5px 12px',
          borderRadius: 6,
          background: 'var(--surface-raised)',
          border: '1px solid var(--border)',
          cursor: 'pointer',
          color: 'var(--text-muted)',
          fontSize: 13,
          flex: 1,
          maxWidth: 400,
        }}
        aria-label="Search"
      >
        <Search size={13} />
        <span className="topnav-search-label">Search tasks, projects…</span>
        <span className="topnav-search-shortcuts" style={{ marginLeft: 'auto', display: 'flex', gap: 3 }}>
          <kbd style={{ fontSize: 10, background: 'var(--border)', borderRadius: 3, padding: '1px 4px', fontFamily: 'monospace' }}>⌘</kbd>
          <kbd style={{ fontSize: 10, background: 'var(--border)', borderRadius: 3, padding: '1px 4px', fontFamily: 'monospace' }}>K</kbd>
        </span>
      </button>

      <div style={{ flex: 1 }} />

      {/* Theme toggle */}
      <button
        onClick={() => dispatch(toggleTheme())}
        className="btn btn-ghost btn-icon btn-sm"
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      {/* Notifications */}
      <Link
        href="/notifications"
        style={{ position: 'relative', display: 'flex', color: 'var(--text-secondary)' }}
        className="btn btn-ghost btn-icon btn-sm"
        title="Notifications"
      >
        <Bell size={16} />
        {unreadCount > 0 && (
          <span style={{
            position: 'absolute',
            top: 4,
            right: 4,
            width: 8,
            height: 8,
            background: 'var(--gold)',
            borderRadius: '50%',
            border: '2px solid var(--surface)',
          }} />
        )}
      </Link>

      {/* User menu */}
      {currentUser && (
        <div ref={menuRef} style={{ position: 'relative' }}>
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '4px 8px',
              borderRadius: 6,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <Avatar name={currentUser.name} color={currentUser.color} size="xs" />
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>{currentUser.name.split(' ')[0]}</span>
            <ChevronDown size={12} style={{ color: 'var(--text-muted)' }} />
          </button>

          {userMenuOpen && (
            <div className="dropdown-menu" style={{ position: 'absolute', top: '100%', right: 0, marginTop: 4, minWidth: 200 }}>
              <div style={{ padding: '10px 12px', borderBottom: '1px solid var(--border)' }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)' }}>{currentUser.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{currentUser.email}</div>
              </div>
              <Link href="/profile" className="dropdown-item" onClick={() => setUserMenuOpen(false)}>
                <User size={14} /> Profile
              </Link>
              <Link href="/settings" className="dropdown-item" onClick={() => setUserMenuOpen(false)}>
                <Settings size={14} /> Settings
              </Link>
              <div className="dropdown-divider" />
              <button className="dropdown-item danger" style={{ width: '100%', textAlign: 'left' }} onClick={handleLogout}>
                <LogOut size={14} /> Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
