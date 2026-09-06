'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { removeToast } from '@/store/slices/uiSlice';
import { CheckCircle, XCircle, AlertTriangle, Info, X, Undo2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Toast } from '@/types';

const icons = {
  success: <CheckCircle size={16} color="#4AAD7A" />,
  error: <XCircle size={16} color="#E53E3E" />,
  warning: <AlertTriangle size={16} color="#ED8936" />,
  info: <Info size={16} color="#4A90D9" />,
};

const borderColors = {
  success: '#4AAD7A',
  error: '#E53E3E',
  warning: '#ED8936',
  info: '#4A90D9',
};

export function ToastContainer() {
  const dispatch = useAppDispatch();
  const toasts = useAppSelector(s => s.ui.toasts);

  return (
    <div
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        zIndex: 100,
        maxWidth: 380,
      }}
    >
      {toasts.map((toast: Toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onDismiss={() => dispatch(removeToast(toast.id))}
        />
      ))}
    </div>
  );
}

function ToastItem({
  toast,
  onDismiss,
}: {
  toast: { id: string; type: 'success' | 'error' | 'warning' | 'info'; title: string; description?: string; duration?: number; action?: { label: string; onClick: string } };
  onDismiss: () => void;
}) {
  useEffect(() => {
    const duration = toast.duration ?? 4000;
    if (duration === Infinity) return;
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, onDismiss]);

  return (
    <div
      className="toast-enter"
      role="alert"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        padding: '12px 14px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderLeft: `3px solid ${borderColors[toast.type]}`,
        borderRadius: 8,
        boxShadow: 'var(--shadow-lg)',
        minWidth: 280,
      }}
    >
      <span style={{ flexShrink: 0, marginTop: 1 }}>{icons[toast.type]}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{toast.title}</p>
        {toast.description && (
          <p style={{ fontSize: 12, color: 'var(--text-secondary)', margin: '2px 0 0' }}>{toast.description}</p>
        )}
        {toast.action && (
          <button
            style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 700, marginTop: 4, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            onClick={() => { /* handled by caller */ }}
          >
            <Undo2 size={12} style={{ display: 'inline', marginRight: 4 }} />
            {toast.action.label}
          </button>
        )}
      </div>
      <button onClick={onDismiss} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', flexShrink: 0, padding: 2 }}>
        <X size={14} />
      </button>
    </div>
  );
}

// ─── Hook for dispatching toasts ──────────────────────────────────────────────
import { addToast } from '@/store/slices/uiSlice';
import { generateId } from '@/lib/utils';

export function useToast() {
  const dispatch = useAppDispatch();

  return {
    success: (title: string, description?: string) => {
      dispatch(addToast({ id: generateId(), type: 'success', title, description }));
    },
    error: (title: string, description?: string) => {
      dispatch(addToast({ id: generateId(), type: 'error', title, description, duration: 6000 }));
    },
    warning: (title: string, description?: string) => {
      dispatch(addToast({ id: generateId(), type: 'warning', title, description }));
    },
    info: (title: string, description?: string) => {
      dispatch(addToast({ id: generateId(), type: 'info', title, description }));
    },
  };
}
