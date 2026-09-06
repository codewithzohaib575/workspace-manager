'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleSidebar, openCommandPalette } from '@/store/slices/uiSlice';
import { setCurrentWorkspace } from '@/store/slices/workspaceSlice';
import { Avatar } from '@/components/ui';
import {
  LayoutDashboard, FolderKanban, Calendar, Bell, Settings,
  ChevronLeft, ChevronRight, ChevronDown, Plus, Search,
  User, LogOut, Check, Briefcase,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Workspace, Project } from '@/types';

export function Sidebar() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const collapsed = useAppSelector(s => s.ui.sidebarCollapsed);
  const currentUser = useAppSelector(s => s.auth.currentUser);
  const workspaces = useAppSelector(s => s.workspaces.items) || [];
  const currentWorkspaceId = useAppSelector(s => s.workspaces.currentWorkspaceId);
  const currentWorkspace = workspaces?.find((w: Workspace) => w.id === currentWorkspaceId);
  const allProjects = useAppSelector(s => s.projects.items) || [];
  const projects = useMemo(() => (allProjects || []).filter((p: Project) => p.workspaceId === currentWorkspaceId && p.status !== 'archived'), [allProjects, currentWorkspaceId]);
  const unreadCount = useAppSelector(s => s.notifications.unreadCount);
  const [workspacePanelOpen, setWorkspacePanelOpen] = useState(false);

  const navItems = [
    { href: '/dashboard', icon: <LayoutDashboard size={16} />, label: 'Dashboard' },
    { href: '/calendar', icon: <Calendar size={16} />, label: 'Calendar' },
    { href: '/notifications', icon: <Bell size={16} />, label: 'Notifications', badge: unreadCount },
    { href: '/settings', icon: <Settings size={16} />, label: 'Settings' },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <aside
      className={`sidebar-responsive ${collapsed ? 'sidebar-collapsed' : 'sidebar-open'}`}
      style={{
        width: collapsed ? 56 : 240,
        flexShrink: 0,
        background: 'var(--surface)',
        borderRight: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'width 250ms ease',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Header / Workspace Switcher */}
      <div style={{ padding: collapsed ? '12px 8px' : '12px 12px', borderBottom: '1px solid var(--border)' }}>
        <button
          onClick={() => !collapsed && setWorkspacePanelOpen(!workspacePanelOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            width: '100%',
            padding: '6px 8px',
            borderRadius: 8,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            justifyContent: collapsed ? 'center' : 'space-between',
          }}
          title={currentWorkspace?.name}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
            <span style={{ fontSize: 20, flexShrink: 0 }}>{currentWorkspace?.icon ?? '🏢'}</span>
            {!collapsed && (
              <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {currentWorkspace?.name ?? 'Workspace'}
              </span>
            )}
          </div>
          {!collapsed && <ChevronDown size={14} style={{ flexShrink: 0, color: 'var(--text-muted)' }} />}
        </button>

        {/* Workspace switcher panel */}
        {workspacePanelOpen && !collapsed && (
          <div className="dropdown-menu" style={{ position: 'absolute', top: 64, left: 12, right: 12, zIndex: 20 }}>
            {workspaces.map((ws: Workspace) => (
              <button
                key={ws.id}
                className="dropdown-item"
                style={{ width: '100%', textAlign: 'left' }}
                onClick={() => { dispatch(setCurrentWorkspace(ws.id)); setWorkspacePanelOpen(false); }}
              >
                <span style={{ fontSize: 16 }}>{ws.icon}</span>
                <span style={{ flex: 1, fontWeight: 700 }}>{ws.name}</span>
                {ws.id === currentWorkspaceId && <Check size={14} style={{ color: 'var(--gold)' }} />}
              </button>
            ))}
            <div className="dropdown-divider" />
            <Link href="/workspace/new" className="dropdown-item" onClick={() => setWorkspacePanelOpen(false)}>
              <Plus size={14} />
              Create Workspace
            </Link>
          </div>
        )}

        {/* Search shortcut */}
        {!collapsed && (
          <button
            onClick={() => dispatch(openCommandPalette())}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              width: '100%',
              padding: '6px 8px',
              marginTop: 4,
              borderRadius: 6,
              background: 'var(--surface-raised)',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              fontSize: 13,
            }}
          >
            <Search size={13} />
            <span style={{ flex: 1, textAlign: 'left' }}>Search…</span>
            <kbd style={{ fontSize: 10, background: 'var(--border)', borderRadius: 3, padding: '1px 4px', fontFamily: 'monospace' }}>⌘K</kbd>
          </button>
        )}
      </div>

      {/* Nav items */}
      <nav style={{ padding: '8px 8px', flex: 1, overflow: 'hidden auto' }}>
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={cn('sidebar-nav-item', isActive(item.href) ? 'active' : '')}
            title={collapsed ? item.label : undefined}
            style={{ justifyContent: collapsed ? 'center' : undefined }}
          >
            <span style={{ flexShrink: 0, position: 'relative' }}>
              {item.icon}
              {item.badge ? (
                <span style={{
                  position: 'absolute',
                  top: -4,
                  right: -4,
                  width: 14,
                  height: 14,
                  background: 'var(--gold)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 9,
                  fontWeight: 700,
                  color: '#fff',
                }}>
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              ) : null}
            </span>
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}

        {/* Projects section */}
        {!collapsed && (
          <div style={{ marginTop: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 10px 6px', marginBottom: 2 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Projects</span>
              <Link href="/project/new" style={{ color: 'var(--text-muted)', display: 'flex' }} title="New Project">
                <Plus size={13} />
              </Link>
            </div>
            {projects.slice(0, 8).map((p: Project) => (
              <Link
                key={p.id}
                href={`/project/${p.id}`}
                className={cn('sidebar-nav-item', pathname.startsWith(`/project/${p.id}`) ? 'active' : '')}
              >
                <span style={{ fontSize: 14, flexShrink: 0 }}>{p.icon ?? '📋'}</span>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</span>
              </Link>
            ))}
            {projects.length === 0 && (
              <p style={{ fontSize: 12, color: 'var(--text-muted)', padding: '4px 10px' }}>No projects yet</p>
            )}
          </div>
        )}
      </nav>

      {/* User footer */}
      {currentUser && (
        <div style={{ padding: collapsed ? '8px' : '8px 12px', borderTop: '1px solid var(--border)' }}>
          <Link
            href="/profile"
            className="sidebar-nav-item"
            style={{ justifyContent: collapsed ? 'center' : undefined }}
            title={collapsed ? currentUser.name : undefined}
          >
            <Avatar name={currentUser.name} color={currentUser.color} size="xs" />
            {!collapsed && (
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{currentUser.name}</div>
              </div>
            )}
          </Link>
        </div>
      )}

      {/* Collapse toggle */}
      <button
        onClick={() => dispatch(toggleSidebar())}
        style={{
          position: 'absolute',
          top: '50%',
          right: -12,
          transform: 'translateY(-50%)',
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          boxShadow: 'var(--shadow-sm)',
          color: 'var(--text-muted)',
        }}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>
    </aside>
  );
}
