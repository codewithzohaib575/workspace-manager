'use client';
import { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppDispatch, useAppSelector } from '@/store';
import { setTheme, addToast } from '@/store/slices/uiSlice';
import { updateWorkspace } from '@/store/slices/workspaceSlice';
import { clearStateFromLocalStorage } from '@/lib/persistence';
import { Settings, Moon, Sun, Download, RefreshCw, Shield, Keyboard, Database } from 'lucide-react';

export default function SettingsPage() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(s => s.ui.theme);
  const currentWorkspaceId = useAppSelector(s => s.workspaces.currentWorkspaceId);
  const workspaces = useAppSelector(s => s.workspaces.items) || [];
  const currentWorkspace = workspaces?.find(w => w.id === currentWorkspaceId);
  const state = useAppSelector(s => s);

  const [wsName, setWsName] = useState(currentWorkspace?.name ?? '');

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    dispatch(setTheme(newTheme));
    dispatch(addToast({
      id: String(Date.now()),
      title: 'Theme Updated',
      description: `Switched to ${newTheme} mode`,
      type: 'info',
    }));
  };

  const handleSaveWorkspace = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wsName.trim() || !currentWorkspaceId) return;
    dispatch(updateWorkspace({ id: currentWorkspaceId, updates: { name: wsName.trim() } }));
    dispatch(addToast({
      id: String(Date.now()),
      title: 'Workspace Saved',
      description: 'Settings updated successfully',
      type: 'success',
    }));
  };

  const handleExportData = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `workspace-export-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    dispatch(addToast({
      id: String(Date.now()),
      title: 'Data Exported',
      description: 'Workspace JSON downloaded',
      type: 'success',
    }));
  };

  const handleResetData = () => {
    if (confirm('Are you sure you want to reset all data to default demo state? This will clear local changes.')) {
      clearStateFromLocalStorage();
      window.location.reload();
    }
  };

  return (
    <AppShell>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gold/10 text-gold">
            <Settings size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Settings & Preferences
            </h1>
            <p className="text-xs text-muted">Manage your workspace configuration and interface.</p>
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="p-5 rounded-xl border space-y-4 shadow-sm" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-2 font-bold text-sm">
            <Sun size={16} className="text-gold" />
            <span>Theme & Appearance</span>
          </div>

          <div className="grid grid-cols-2 gap-3 max-w-sm">
            <button
              onClick={() => handleThemeChange('light')}
              className={`p-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${theme === 'light' ? 'border-gold bg-gold/10 text-gold' : 'border-border text-muted hover:text-primary'
                }`}
            >
              <Sun size={15} /> Light Mode
            </button>

            <button
              onClick={() => handleThemeChange('dark')}
              className={`p-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${theme === 'dark' ? 'border-gold bg-gold/10 text-gold' : 'border-border text-muted hover:text-primary'
                }`}
            >
              <Moon size={15} /> Dark Mode
            </button>
          </div>
        </div>

        {/* Workspace Settings */}
        {currentWorkspace && (
          <div className="p-5 rounded-xl border space-y-4 shadow-sm" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <div className="flex items-center gap-2 font-bold text-sm">
              <span className="text-base">{currentWorkspace.icon ?? '🏢'}</span>
              <span>Workspace Details</span>
            </div>

            <form onSubmit={handleSaveWorkspace} className="space-y-3 max-w-md">
              <div>
                <label className="text-xs font-semibold block mb-1 text-muted">Workspace Name</label>
                <input
                  type="text"
                  value={wsName}
                  onChange={e => setWsName(e.target.value)}
                  className="input text-xs w-full"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-xs">
                Save Workspace Name
              </button>
            </form>
          </div>
        )}

        {/* Keyboard Shortcuts */}
        <div className="p-5 rounded-xl border space-y-3 shadow-sm" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-2 font-bold text-sm">
            <Keyboard size={16} className="text-gold" />
            <span>Keyboard Shortcuts</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="flex items-center justify-between p-2 rounded border" style={{ borderColor: 'var(--border)' }}>
              <span className="text-muted">Command Palette</span>
              <kbd className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 font-mono text-[11px]">⌘K / Ctrl+K</kbd>
            </div>
            <div className="flex items-center justify-between p-2 rounded border" style={{ borderColor: 'var(--border)' }}>
              <span className="text-muted">Close modal / overlay</span>
              <kbd className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 font-mono text-[11px]">Esc</kbd>
            </div>
          </div>
        </div>

        {/* Data & Reset */}
        <div className="p-5 rounded-xl border space-y-4 shadow-sm" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-2 font-bold text-sm">
            <Database size={16} className="text-gold" />
            <span>Data Management & Backup</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleExportData}
              className="btn btn-secondary btn-sm flex items-center gap-1.5 text-xs"
            >
              <Download size={14} /> Export Backup (JSON)
            </button>

            <button
              onClick={handleResetData}
              className="btn btn-sm bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/30 flex items-center gap-1.5 text-xs"
            >
              <RefreshCw size={14} /> Reset to Sample Data
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
