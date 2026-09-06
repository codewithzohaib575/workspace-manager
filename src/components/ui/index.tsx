'use client';
import { cn } from '@/lib/utils';

// ─── Avatar ───────────────────────────────────────────────────────────────────
interface AvatarProps {
  name: string;
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  src?: string;
  className?: string;
}

export function Avatar({ name, color = '#B08D57', size = 'sm', src, className }: AvatarProps) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        title={name}
        className={cn('avatar', `avatar-${size}`, className)}
      />
    );
  }

  return (
    <span
      className={cn('avatar', `avatar-${size}`, className)}
      style={{ background: color + '20', color }}
      title={name}
    >
      {initials}
    </span>
  );
}

// ─── Avatar Group ─────────────────────────────────────────────────────────────
interface AvatarGroupProps {
  users: Array<{ id: string; name: string; color?: string }>;
  max?: number;
  size?: 'xs' | 'sm';
}

export function AvatarGroup({ users, max = 3, size = 'xs' }: AvatarGroupProps) {
  const visible = users.slice(0, max);
  const overflow = users.length - max;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {visible.map((u, i) => (
        <span key={u.id} style={{ marginLeft: i > 0 ? -6 : 0, zIndex: max - i, position: 'relative' }}>
          <Avatar name={u.name} color={u.color} size={size} />
        </span>
      ))}
      {overflow > 0 && (
        <span
          className={cn('avatar', `avatar-${size}`)}
          style={{ marginLeft: -6, background: 'var(--border)', color: 'var(--text-secondary)', position: 'relative', zIndex: 0 }}
        >
          +{overflow}
        </span>
      )}
    </div>
  );
}

// ─── Badge ────────────────────────────────────────────────────────────────────
interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  bg?: string;
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ children, color = 'var(--text-secondary)', bg = 'var(--surface-raised)', size = 'sm', className }: BadgeProps) {
  return (
    <span
      className={cn('badge', className)}
      style={{
        color,
        background: bg,
        fontSize: size === 'sm' ? 11 : 12,
        padding: size === 'sm' ? '2px 6px' : '3px 8px',
      }}
    >
      {children}
    </span>
  );
}

// ─── Status Badge ─────────────────────────────────────────────────────────────
import { getStatusColor, getStatusLabel, getStatusBgColor } from '@/lib/utils';

export function StatusBadge({ status }: { status: string }) {
  return (
    <Badge color={getStatusColor(status)} bg={getStatusBgColor(status)}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: getStatusColor(status), display: 'inline-block', flexShrink: 0 }} />
      {getStatusLabel(status)}
    </Badge>
  );
}

// ─── Priority Badge ───────────────────────────────────────────────────────────
import { getPriorityColor, getPriorityLabel } from '@/lib/utils';
import type { Priority } from '@/types';
import { AlertCircle, ArrowUp, ArrowDown, Minus, Equal } from 'lucide-react';

const priorityIcons: Record<Priority, React.ReactNode> = {
  urgent: <AlertCircle size={10} />,
  high: <ArrowUp size={10} />,
  medium: <Equal size={10} />,
  low: <ArrowDown size={10} />,
  none: <Minus size={10} />,
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  const color = getPriorityColor(priority);
  return (
    <Badge color={color} bg={color + '18'}>
      {priorityIcons[priority]}
      {getPriorityLabel(priority)}
    </Badge>
  );
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────
export function ProgressBar({ value, max = 100, color = '#B08D57' }: { value: number; max?: number; color?: string }) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100);
  return (
    <div style={{ width: '100%', height: 4, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
      <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 2, transition: 'width 300ms' }} />
    </div>
  );
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────
export function Skeleton({ width, height = 16, className }: { width?: number | string; height?: number | string; className?: string }) {
  return (
    <div
      className={cn('skeleton', className)}
      style={{ width: width ?? '100%', height }}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
        <Skeleton width={32} height={32} className="rounded-full" />
        <div style={{ flex: 1 }}>
          <Skeleton height={14} width="60%" />
          <div style={{ marginTop: 6 }}><Skeleton height={12} width="40%" /></div>
        </div>
      </div>
      <Skeleton height={12} />
      <div style={{ marginTop: 6 }}><Skeleton height={12} width="80%" /></div>
      <div style={{ marginTop: 16 }}><ProgressBar value={40} /></div>
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────
interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon = '📋', title, description, action }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">{icon}</div>
      <h3 className="empty-state-title font-display">{title}</h3>
      {description && <p className="empty-state-body">{description}</p>}
      {action}
    </div>
  );
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────
interface Tab { id: string; label: string; count?: number; icon?: React.ReactNode }

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}

export function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div style={{ display: 'flex', borderBottom: '1px solid var(--border)' }}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '10px 16px',
            fontSize: 14,
            fontWeight: activeTab === tab.id ? 700 : 400,
            color: activeTab === tab.id ? 'var(--gold)' : 'var(--text-secondary)',
            borderBottom: activeTab === tab.id ? '2px solid var(--gold)' : '2px solid transparent',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'color 150ms',
            marginBottom: -1,
            fontFamily: 'inherit',
          }}
        >
          {tab.icon}
          {tab.label}
          {tab.count !== undefined && (
            <span style={{
              background: activeTab === tab.id ? 'var(--gold)' : 'var(--surface-raised)',
              color: activeTab === tab.id ? '#fff' : 'var(--text-muted)',
              borderRadius: 10,
              padding: '0 6px',
              fontSize: 11,
              fontWeight: 700,
            }}>
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

// ─── Input ────────────────────────────────────────────────────────────────────
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
}

export function Input({ label, error, hint, leftIcon, className, ...props }: InputProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {label && <label style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)' }}>{label}</label>}
      <div style={{ position: 'relative' }}>
        {leftIcon && (
          <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', display: 'flex' }}>
            {leftIcon}
          </span>
        )}
        <input
          className={cn('input-base', className)}
          style={leftIcon ? { paddingLeft: 34 } : undefined}
          {...props}
        />
      </div>
      {error && <span style={{ fontSize: 12, color: '#E53E3E' }}>{error}</span>}
      {hint && !error && <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{hint}</span>}
    </div>
  );
}

// ─── Textarea ─────────────────────────────────────────────────────────────────
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ label, error, className, ...props }: TextareaProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {label && <label style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)' }}>{label}</label>}
      <textarea
        className={cn('input-base', className)}
        style={{ minHeight: 80, resize: 'vertical' }}
        {...props}
      />
      {error && <span style={{ fontSize: 12, color: '#E53E3E' }}>{error}</span>}
    </div>
  );
}

// ─── Select ───────────────────────────────────────────────────────────────────
interface SelectOption { value: string; label: string }
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
}

export function Select({ label, options, error, className, ...props }: SelectProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {label && <label style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)' }}>{label}</label>}
      <select className={cn('input-base', className)} style={{ appearance: 'auto' }} {...props}>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      {error && <span style={{ fontSize: 12, color: '#E53E3E' }}>{error}</span>}
    </div>
  );
}

// ─── Tooltip ─────────────────────────────────────────────────────────────────
export function Tooltip({ children, text }: { children: React.ReactNode; text: string }) {
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }} title={text}>
      {children}
    </span>
  );
}

// ─── Offline Banner ───────────────────────────────────────────────────────────
export function OfflineBanner({ isOffline, isSyncing, onSync }: { isOffline: boolean; isSyncing: boolean; onSync: () => void }) {
  if (!isOffline) return null;
  return (
    <div className="offline-banner">
      <span className="offline-dot" />
      <span style={{ flex: 1 }}>
        <strong>You&apos;re Offline.</strong> Changes will sync when you&apos;re back online.
      </span>
      <button
        onClick={onSync}
        disabled={isSyncing}
        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#E2E8F0', borderRadius: 4, padding: '4px 10px', fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}
      >
        {isSyncing ? 'Syncing…' : 'Sync Now'}
      </button>
    </div>
  );
}
