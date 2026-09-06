import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, formatDistanceToNow, isToday, isTomorrow, isPast } from 'date-fns';
import type { Priority, TaskStatus, ActivityType } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

// ─── Date utils ───────────────────────────────────────────────────────────────
export function formatDate(date: string | Date | undefined, fmt = 'MMM d, yyyy'): string {
  if (!date) return '';
  try {
    return format(new Date(date), fmt);
  } catch {
    return '';
  }
}

export function formatRelativeDate(date: string | Date): string {
  try {
    const d = new Date(date);
    if (isToday(d)) return `Today at ${format(d, 'h:mm a')}`;
    return formatDistanceToNow(d, { addSuffix: true });
  } catch {
    return '';
  }
}

export function isTaskOverdue(date?: string, status?: string): boolean {
  if (!date || status === 'done' || status === 'cancelled') return false;
  try {
    const d = new Date(date);
    return isPast(d) && !isToday(d);
  } catch {
    return false;
  }
}

export function formatDueDate(date: string | undefined): { text: string; overdue: boolean; urgent: boolean } {
  if (!date) return { text: '', overdue: false, urgent: false };
  try {
    const d = new Date(date);
    const overdue = isPast(d) && !isToday(d);
    const urgent = isToday(d) || isTomorrow(d);
    const text = isToday(d) ? 'Today' : isTomorrow(d) ? 'Tomorrow' : format(d, 'MMM d');
    return { text, overdue, urgent };
  } catch {
    return { text: date, overdue: false, urgent: false };
  }
}

export function getGreeting(name: string): string {
  const hour = new Date().getHours();
  if (hour < 12) return `Good morning, ${name} 👋`;
  if (hour < 17) return `Good afternoon, ${name} 👋`;
  return `Good evening, ${name} 👋`;
}

// ─── Priority utils ───────────────────────────────────────────────────────────
export function getPriorityColor(priority: Priority): string {
  const map: Record<Priority, string> = {
    urgent: '#E53E3E',
    high: '#ED8936',
    medium: '#ECC94B',
    low: '#4A90D9',
    none: '#94948C',
  };
  return map[priority] ?? '#94948C';
}

export function getPriorityLabel(priority: Priority): string {
  const map: Record<Priority, string> = {
    urgent: 'Urgent',
    high: 'High',
    medium: 'Medium',
    low: 'Low',
    none: 'None',
  };
  return map[priority] ?? 'None';
}

export function getPriorityOrder(priority: Priority): number {
  return { urgent: 0, high: 1, medium: 2, low: 3, none: 4 }[priority] ?? 4;
}

// ─── Status utils ─────────────────────────────────────────────────────────────
export function getStatusColor(status: string): string {
  const map: Record<string, string> = {
    todo: '#94948C',
    in_progress: '#B08D57',
    in_review: '#4A90D9',
    done: '#4AAD7A',
    cancelled: '#E53E3E',
  };
  return map[status] ?? '#94948C';
}

export function getStatusLabel(status: string): string {
  const map: Record<string, string> = {
    todo: 'To Do',
    in_progress: 'In Progress',
    in_review: 'In Review',
    done: 'Done',
    cancelled: 'Cancelled',
  };
  return map[status] ?? status;
}

export function getStatusBgColor(status: string): string {
  const map: Record<string, string> = {
    todo: '#F4F4F0',
    in_progress: '#FFF8EC',
    in_review: '#EBF4FF',
    done: '#F0FFF4',
    cancelled: '#FFF5F5',
  };
  return map[status] ?? '#F4F4F0';
}

// ─── Activity utils ───────────────────────────────────────────────────────────
export function getActivityText(type: ActivityType, payload: Record<string, unknown>): string {
  const p = payload;
  switch (type) {
    case 'task_created': return `created task "${p.taskTitle}"`;
    case 'task_updated': return `updated task "${p.taskTitle}"`;
    case 'task_deleted': return `deleted task "${p.taskTitle}"`;
    case 'task_completed': return `completed task "${p.taskTitle}"`;
    case 'task_assigned': return `assigned "${p.taskTitle}" to ${p.assignee}`;
    case 'status_changed': return `changed status from ${getStatusLabel(p.from as string)} to ${getStatusLabel(p.to as string)}`;
    case 'priority_changed': return `changed priority to ${getPriorityLabel(p.to as Priority)}`;
    case 'due_date_changed': return `updated due date to ${formatDate(p.to as string)}`;
    case 'comment_added': return `commented: "${String(p.preview ?? '').slice(0, 50)}${String(p.preview ?? '').length > 50 ? '…' : ''}"`;
    case 'comment_edited': return 'edited a comment';
    case 'comment_deleted': return 'deleted a comment';
    case 'subtask_created': return `added subtask "${p.title}"`;
    case 'subtask_completed': return `completed subtask "${p.title}"`;
    case 'project_created': return `created project "${p.projectName}"`;
    case 'project_updated': return `updated project "${p.projectName}"`;
    case 'project_archived': return `archived project "${p.projectName}"`;
    case 'project_deleted': return `deleted project "${p.projectName}"`;
    case 'member_invited': return `invited ${p.memberName} to the workspace`;
    case 'member_removed': return `removed ${p.memberName} from the workspace`;
    case 'role_changed': return `changed ${p.memberName}'s role to ${p.role}`;
    case 'label_added': return `added label "${p.labelName}"`;
    case 'label_removed': return `removed label "${p.labelName}"`;
    case 'attachment_added': return `attached "${p.fileName}"`;
    case 'attachment_removed': return `removed attachment "${p.fileName}"`;
    default: return 'performed an action';
  }
}

// ─── String utils ─────────────────────────────────────────────────────────────
export function truncate(str: string, len: number): string {
  return str.length > len ? str.slice(0, len) + '…' : str;
}

export function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

export function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// ─── Subtask progress ─────────────────────────────────────────────────────────
export function getSubtaskProgress(subtasks: Array<{ completed: boolean }>): { done: number; total: number; pct: number } {
  const total = subtasks.length;
  const done = subtasks.filter(s => s.completed).length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return { done, total, pct };
}

// ─── File size ────────────────────────────────────────────────────────────────
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

// ─── Optimistic update helper ─────────────────────────────────────────────────
export async function withOptimisticUpdate<T>(
  optimisticFn: () => T,
  rollbackFn: () => void,
  failureRate = 0
): Promise<{ success: boolean; result?: T }> {
  const result = optimisticFn();
  await new Promise(r => setTimeout(r, 400 + Math.random() * 300));
  if (Math.random() * 100 < failureRate) {
    rollbackFn();
    return { success: false };
  }
  return { success: true, result };
}

// ─── Search highlight ─────────────────────────────────────────────────────────
export function highlightText(text: string, query: string): string {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// ─── Export/Import ────────────────────────────────────────────────────────────
export function downloadJSON(data: unknown, filename: string): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function validateImportData(data: unknown): { valid: boolean; error?: string } {
  if (!data || typeof data !== 'object') return { valid: false, error: 'Invalid JSON structure' };
  const d = data as Record<string, unknown>;
  if (!d.workspaces && !d.projects && !d.tasks) {
    return { valid: false, error: 'Missing required fields: workspaces, projects, or tasks' };
  }
  return { valid: true };
}
