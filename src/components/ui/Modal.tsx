'use client';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showClose?: boolean;
}

const sizeMap = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-6xl',
};

export function Modal({ open, onClose, title, children, size = 'md', showClose = true }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="overlay" onClick={onClose} />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        className={cn(
          'relative w-full modal-enter',
          sizeMap[size],
          'card max-h-[90vh] overflow-y-auto'
        )}
        style={{ zIndex: 51 }}
      >
        {(title || showClose) && (
          <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid var(--border)' }}>
            {title && <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>{title}</h2>}
            {showClose && (
              <button onClick={onClose} className="btn btn-ghost btn-icon btn-sm" aria-label="Close">
                <X size={16} />
              </button>
            )}
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// ─── Drawer ───────────────────────────────────────────────────────────────────
interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  side?: 'left' | 'right';
  width?: number;
}

export function Drawer({ open, onClose, title, children, side = 'right', width = 480 }: DrawerProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="overlay" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        className="relative flex flex-col"
        style={{
          width,
          maxWidth: '95vw',
          marginLeft: side === 'right' ? 'auto' : undefined,
          background: 'var(--surface)',
          height: '100vh',
          zIndex: 51,
          boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
          overflow: 'hidden',
        }}
      >
        {(title) && (
          <div className="flex items-center justify-between px-6 py-4 flex-shrink-0" style={{ borderBottom: '1px solid var(--border)' }}>
            {title && <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>{title}</h2>}
            <button onClick={onClose} className="btn btn-ghost btn-icon btn-sm" aria-label="Close">
              <X size={16} />
            </button>
          </div>
        )}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

// ─── Dialog ───────────────────────────────────────────────────────────────────
interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  confirmVariant?: 'danger' | 'primary';
  onConfirm: () => void;
  isLoading?: boolean;
}

export function ConfirmDialog({ open, onClose, title, description, confirmLabel = 'Confirm', confirmVariant = 'danger', onConfirm, isLoading }: DialogProps) {
  return (
    <Modal open={open} onClose={onClose} size="sm" showClose={false}>
      <div style={{ textAlign: 'center', padding: '8px 0' }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>
          {confirmVariant === 'danger' ? '⚠️' : '❓'}
        </div>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{title}</h3>
        {description && <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 24 }}>{description}</p>}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
          <button className="btn btn-secondary" onClick={onClose} disabled={isLoading}>Cancel</button>
          <button
            className={cn('btn', confirmVariant === 'danger' ? 'btn-danger' : 'btn-primary')}
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? 'Processing…' : confirmLabel}
          </button>
        </div>
      </div>
    </Modal>
  );
}
