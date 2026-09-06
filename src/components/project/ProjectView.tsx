'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, CheckCircle2, Clock3, LayoutGrid, List } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store';
import { setCurrentProject, setProjectView } from '@/store/slices/projectSlice';
import { KanbanBoard } from '@/components/kanban/KanbanBoard';
import { ProjectListView } from '@/components/project/ProjectListView';

export function ProjectView({ projectId }: { projectId: string }) {
  const dispatch = useAppDispatch();
  const project = useAppSelector(state => state.projects.items.find(item => item.id === projectId));
  const allTasks = useAppSelector(state => state.tasks.items.filter(task => task.projectId === projectId && !task.isArchived));
  const savedView = useAppSelector(state => state.projects.currentView[projectId] ?? project?.defaultView ?? 'kanban');
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');
  const [priority, setPriority] = useState('all');

  useEffect(() => { dispatch(setCurrentProject(projectId)); }, [dispatch, projectId]);

  const tasks = useMemo(() => allTasks.filter(task => {
    const matchesQuery = !query.trim() || `${task.title} ${task.description ?? ''}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (status === 'all' || task.status === status) && (priority === 'all' || task.priority === priority);
  }), [allTasks, priority, query, status]);

  if (!project) return <div className="p-8 text-sm text-muted"><p>Project not found.</p><Link href="/dashboard" className="mt-3 inline-flex gap-2 text-gold"><ArrowLeft size={14} /> Back to dashboard</Link></div>;

  const completedTasks = allTasks.filter(task => task.status === 'done').length;

  return (
    <section className="min-h-full p-5 md:p-8" style={{ background: 'var(--background)' }}>
      <div className="mx-auto max-w-7xl">
        <Link href="/dashboard" className="mb-6 inline-flex items-center gap-2 text-xs text-muted hover:text-gold"><ArrowLeft size={14} /> Back to dashboard</Link>
        <header className="mb-5 rounded-xl border p-5" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <div className="flex flex-wrap items-start justify-between gap-4"><div><div className="mb-2 flex items-center gap-3"><span className="text-2xl">{project.icon ?? '📁'}</span><h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{project.name}</h1></div><p className="text-sm text-muted">{project.description || 'No project description yet.'}</p></div><span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: `${project.color}20`, color: project.color }}>{project.status.replace('_', ' ')}</span></div>
          <div className="mt-5 flex flex-wrap gap-5 text-xs text-muted"><span className="inline-flex items-center gap-1.5"><CheckCircle2 size={14} /> {completedTasks}/{allTasks.length} completed</span><span className="inline-flex items-center gap-1.5"><Clock3 size={14} /> Updated {new Date(project.updatedAt).toLocaleDateString()}</span><span className="inline-flex items-center gap-1.5"><Calendar size={14} /> {project.members.length} members</span></div>
        </header>
        <div className="mb-4 flex flex-wrap items-center gap-2"><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search project tasks" className="input min-w-52 flex-1 text-xs" /><select value={status} onChange={event => setStatus(event.target.value)} className="select text-xs"><option value="all">All statuses</option><option value="todo">To do</option><option value="in_progress">In progress</option><option value="in_review">In review</option><option value="done">Done</option></select><select value={priority} onChange={event => setPriority(event.target.value)} className="select text-xs"><option value="all">All priorities</option><option value="urgent">Urgent</option><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select><div className="flex rounded-lg border p-1" style={{ borderColor: 'var(--border)' }}><button type="button" title="Kanban view" onClick={() => dispatch(setProjectView({ projectId, view: 'kanban' }))} className={`p-1.5 ${savedView === 'kanban' ? 'bg-black/10 dark:bg-white/10' : ''}`}><LayoutGrid size={15} /></button><button type="button" title="List view" onClick={() => dispatch(setProjectView({ projectId, view: 'list' }))} className={`p-1.5 ${savedView === 'list' ? 'bg-black/10 dark:bg-white/10' : ''}`}><List size={15} /></button></div></div>
        {savedView === 'list' ? <ProjectListView tasks={tasks} /> : <div className="overflow-x-auto"><KanbanBoard project={project} tasks={tasks} /></div>}
      </div>
    </section>
  );
}
