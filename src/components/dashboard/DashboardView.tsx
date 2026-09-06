'use client';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store';
import { openModal, openTaskDetail } from '@/store/slices/uiSlice';
import { completeTask, reopenTask } from '@/store/slices/taskSlice';
import { Avatar, PriorityBadge, StatusBadge } from '@/components/ui';
import {
  CheckCircle2, Clock, AlertTriangle, Briefcase, Plus,
  ArrowRight, Calendar, Activity as ActivityIcon, ChevronRight,
  TrendingUp, Sparkles, FolderPlus
} from 'lucide-react';
import { formatDueDate, isTaskOverdue, getActivityText } from '@/lib/utils';
import type { Task, Project } from '@/types';

import { useMemo } from 'react';

export function DashboardView() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(s => s.auth.currentUser);
  const currentWorkspaceId = useAppSelector(s => s.workspaces.currentWorkspaceId);
  const workspaces = useAppSelector(s => s.workspaces.items);
  const currentWorkspace = workspaces.find(w => w.id === currentWorkspaceId);
  const rawProjects = useAppSelector(s => s.projects.items);
  const projects = useMemo(() => rawProjects.filter(p => p.workspaceId === currentWorkspaceId && p.status !== 'archived'), [rawProjects, currentWorkspaceId]);
  const rawTasks = useAppSelector(s => s.tasks.items);
  const allTasks = useMemo(() => rawTasks.filter(t => t.workspaceId === currentWorkspaceId && !t.isArchived), [rawTasks, currentWorkspaceId]);
  const rawActivities = useAppSelector(s => s.activity.items);
  const activities = useMemo(() => rawActivities.slice(0, 8), [rawActivities]);
  const users = useAppSelector(s => s.auth.users);

  // Statistics
  const inProgressCount = allTasks.filter(t => t.status === 'in_progress').length;
  const completedCount = allTasks.filter(t => t.status === 'done').length;
  const overdueCount = allTasks.filter(t => isTaskOverdue(t.dueDate, t.status)).length;
  const completionRate = allTasks.length > 0 ? Math.round((completedCount / allTasks.length) * 100) : 0;

  // Priority / Upcoming tasks
  const priorityTasks = allTasks
    .filter(t => t.status !== 'done' && (t.priority === 'urgent' || t.priority === 'high' || isTaskOverdue(t.dueDate, t.status)))
    .slice(0, 6);

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Welcome Banner */}
      <div
        className="p-6 rounded-2xl border relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
        style={{
          background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface-raised) 100%)',
          borderColor: 'var(--border)',
        }}
      >
        <div className="space-y-1.5 z-10">
          <div className="flex items-center gap-2">
            <span className="text-xl">✨</span>
            <span className="text-xs font-bold uppercase tracking-wider text-gold">Workspace Overview</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {greeting()}, {currentUser?.name ?? 'Alex'}!
          </h1>
          <p className="text-xs sm:text-sm text-muted">
            Here is what is happening today in <strong className="text-primary">{currentWorkspace?.name ?? 'your workspace'}</strong>.
          </p>
        </div>

        <div className="flex items-center gap-2.5 z-10">
          <button
            onClick={() => dispatch(openModal('createProject'))}
            className="btn btn-secondary btn-sm flex items-center gap-1.5 text-xs"
          >
            <FolderPlus size={14} /> New Project
          </button>
          <button
            onClick={() => dispatch(openModal('createTask'))}
            className="btn btn-primary btn-sm flex items-center gap-1.5 text-xs shadow-md"
          >
            <Plus size={14} /> New Task
          </button>
        </div>

        {/* Decorative subtle background circle */}
        <div
          className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full pointer-events-none opacity-10"
          style={{ backgroundColor: 'var(--gold)' }}
        />
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Tasks */}
        <div className="p-4 rounded-xl border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between text-muted mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Tasks</span>
            <Briefcase size={16} className="text-gold" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{allTasks.length}</span>
            <span className="text-xs text-muted">active</span>
          </div>
        </div>

        {/* In Progress */}
        <div className="p-4 rounded-xl border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between text-muted mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">In Progress</span>
            <Clock size={16} className="text-amber-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-amber-500">{inProgressCount}</span>
            <span className="text-xs text-muted">tasks underway</span>
          </div>
        </div>

        {/* Completed */}
        <div className="p-4 rounded-xl border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between text-muted mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Completed</span>
            <CheckCircle2 size={16} className="text-green-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-green-500">{completedCount}</span>
            <span className="text-xs text-muted">({completionRate}% rate)</span>
          </div>
        </div>

        {/* Overdue */}
        <div className="p-4 rounded-xl border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <div className="flex items-center justify-between text-muted mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Overdue</span>
            <AlertTriangle size={16} className={overdueCount > 0 ? 'text-red-500' : 'text-muted'} />
          </div>
          <div className="flex items-baseline gap-2">
            <span className={`text-2xl font-bold ${overdueCount > 0 ? 'text-red-500' : 'text-primary'}`}>
              {overdueCount}
            </span>
            <span className="text-xs text-muted">attention needed</span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              Projects ({projects.length})
            </span>
          </div>
          <button
            onClick={() => dispatch(openModal('createProject'))}
            className="text-xs text-gold font-semibold hover:underline flex items-center gap-1"
          >
            <Plus size={12} /> Add Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(project => {
            const projTasks = allTasks.filter(t => t.projectId === project.id);
            const projDone = projTasks.filter(t => t.status === 'done').length;
            const progress = projTasks.length > 0 ? Math.round((projDone / projTasks.length) * 100) : 0;

            return (
              <div
                key={project.id}
                onClick={() => router.push(`/project/${project.id}`)}
                className="p-4 rounded-xl border cursor-pointer hover:border-gold/50 hover:shadow-md transition-all flex flex-col justify-between group"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl p-2 rounded-lg bg-black/5 dark:bg-white/5">{project.icon ?? '📋'}</span>
                      <h3 className="font-bold text-sm group-hover:text-gold transition-colors truncate max-w-[160px]">
                        {project.name}
                      </h3>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>

                  <p className="text-xs text-muted line-clamp-2 mb-4">
                    {project.description || 'No description.'}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-muted mb-1.5">
                    <span>Progress</span>
                    <span className="font-semibold">{projDone}/{projTasks.length} tasks ({progress}%)</span>
                  </div>
                  <div className="w-full bg-black/10 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${progress}%`, backgroundColor: project.color }}
                    />
                  </div>
                </div>
              </div>
            );
          })}

          {projects.length === 0 && (
            <div
              onClick={() => dispatch(openModal('createProject'))}
              className="p-8 border-2 border-dashed rounded-xl text-center cursor-pointer hover:border-gold transition-colors col-span-full"
              style={{ borderColor: 'var(--border)' }}
            >
              <FolderPlus size={24} className="mx-auto text-gold mb-2" />
              <p className="font-bold text-sm mb-1">No active projects</p>
              <p className="text-xs text-muted">Create your first project to start organizing your tasks.</p>
            </div>
          )}
        </div>
      </div>

      {/* Two Columns: Priority Tasks & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Priority / Due Soon Tasks */}
        <div className="lg:col-span-2 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              High Priority & Due Soon ({priorityTasks.length})
            </span>
          </div>

          <div className="rounded-xl border divide-y overflow-hidden" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            {priorityTasks.map(task => {
              const project = projects.find(p => p.id === task.projectId);
              const assignee = users.find(u => u.id === task.assigneeId);
              const isOverdue = isTaskOverdue(task.dueDate, task.status);

              return (
                <div
                  key={task.id}
                  onClick={() => dispatch(openTaskDetail(task.id))}
                  className="p-3.5 flex items-center justify-between gap-3 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <input
                      type="checkbox"
                      checked={task.status === 'done'}
                      onChange={e => {
                        e.stopPropagation();
                        if (task.status === 'done') {
                          dispatch(reopenTask(task.id));
                        } else {
                          dispatch(completeTask(task.id));
                        }
                      }}
                      className="w-4 h-4 rounded accent-gold cursor-pointer"
                    />

                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate hover:text-gold transition-colors" style={{ color: 'var(--text-primary)' }}>
                        {task.title}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-muted mt-0.5">
                        <span className="font-medium text-gold">{project?.name}</span>
                        <span>•</span>
                        <span className={isOverdue ? 'text-red-500 font-semibold' : ''}>
                          {task.dueDate ? formatDueDate(task.dueDate).text : 'No due date'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 flex-shrink-0">
                    <PriorityBadge priority={task.priority} />
                    {assignee && (
                      <Avatar name={assignee.name} color={assignee.color} size="xs" />
                    )}
                  </div>
                </div>
              );
            })}

            {priorityTasks.length === 0 && (
              <div className="p-6 text-center text-xs text-muted italic">
                🎉 All high priority tasks are completed!
              </div>
            )}
          </div>
        </div>

        {/* Activity Stream */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <ActivityIcon size={14} className="text-gold" />
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              Recent Activity
            </span>
          </div>

          <div className="p-4 rounded-xl border space-y-3.5" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            {activities.map(act => {
              const actor = users.find(u => u.id === act.actorId);
              return (
                <div key={act.id} className="flex items-start gap-2.5 text-xs">
                  <Avatar name={actor?.name ?? 'User'} color={actor?.color ?? '#888'} size="xs" />
                  <div className="flex-1 min-w-0">
                    <p className="leading-tight text-primary">
                      <strong className="font-semibold">{actor?.name ?? 'User'}</strong> {getActivityText(act.type, act.payload)}
                    </p>
                    <span className="text-[10px] text-muted block mt-0.5">
                      {new Date(act.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              );
            })}

            {activities.length === 0 && (
              <p className="text-xs text-muted italic text-center py-4">No activity yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
