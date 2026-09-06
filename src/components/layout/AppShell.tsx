'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopNav } from '@/components/layout/TopNav';
import { CommandPalette } from '@/components/shared/CommandPalette';
import { ToastContainer } from '@/components/ui/Toast';
import { TaskDetailModal } from '@/components/task/TaskDetailModal';
import { CreateTaskModal } from '@/components/task/CreateTaskModal';
import { CreateProjectModal } from '@/components/project/CreateProjectModal';
import { CreateWorkspaceModal } from '@/components/workspace/CreateWorkspaceModal';
import { OfflineBanner } from '@/components/ui';
import { setOffline, toggleSidebar } from '@/store/slices/uiSlice';
import { startCollaborationSimulator } from '@/lib/collaboration';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const dispatch = useAppDispatch();
  const currentWorkspaceId = useAppSelector(s => s.workspaces.currentWorkspaceId);
  const currentUser = useAppSelector(s => s.auth.currentUser);
  const activeTaskId = useAppSelector(s => s.ui.activeTaskId);
  const sidebarCollapsed = useAppSelector(s => s.ui.sidebarCollapsed);

  const isOffline = useAppSelector(s => s.ui.isOffline);
  const isSyncing = useAppSelector(s => s.ui.isSyncing);

  // Background collaboration simulation
  useEffect(() => {
    if (currentWorkspaceId && currentUser?.id) {
      const cleanup = startCollaborationSimulator(dispatch, currentWorkspaceId, currentUser.id);
      return cleanup;
    }
  }, [dispatch, currentWorkspaceId, currentUser?.id]);

  // Online / Offline tracking
  useEffect(() => {
    const handleOnline = () => dispatch(setOffline(false));
    const handleOffline = () => dispatch(setOffline(true));

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [dispatch]);

  return (
    <div className="flex h-screen w-screen overflow-hidden" style={{ background: 'var(--background)' }}>
      {/* Sidebar navigation */}
      <Sidebar />
      {!sidebarCollapsed && <button type="button" className="mobile-sidebar-backdrop" aria-label="Close navigation" onClick={() => dispatch(toggleSidebar())} />}

      {/* Main app container */}
      <div className="flex flex-col flex-1 min-w-0 h-full overflow-hidden">
        <TopNav />
        <OfflineBanner
          isOffline={isOffline}
          isSyncing={isSyncing}
          onSync={() => dispatch(setOffline(false))}
        />
        <main className="flex-1 overflow-y-auto min-w-0">
          {children}
        </main>
      </div>

      {/* Modals & Overlays */}
      {activeTaskId && <TaskDetailModal />}
      <CreateTaskModal />
      <CreateProjectModal />
      <CreateWorkspaceModal />
      <CommandPalette />
      <ToastContainer />
    </div>
  );
}
