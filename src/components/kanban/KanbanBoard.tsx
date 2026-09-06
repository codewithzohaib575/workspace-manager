'use client';

import { useAppDispatch } from '@/store';
import { moveTask } from '@/store/slices/taskSlice';
import { openModal, openTaskDetail } from '@/store/slices/uiSlice';
import type { Project, Task } from '@/types';

const statusByColumn: Record<string, string> = {
	todo: 'todo',
	progress: 'in_progress',
	review: 'in_review',
	done: 'done',
};

export function KanbanBoard({ project, tasks }: { project: Project; tasks: Task[] }) {
	const dispatch = useAppDispatch();

	const handleDrop = (event: React.DragEvent<HTMLDivElement>, columnId: string) => {
		event.preventDefault();
		const taskId = event.dataTransfer.getData('task-id');
		if (!taskId) return;
		const columnKey = columnId.split('-').pop() ?? 'todo';
		dispatch(moveTask({ taskId, columnId, status: statusByColumn[columnKey] ?? 'todo', order: tasks.length }));
	};

	return (
		<div className="grid min-w-[900px] grid-cols-4 gap-4">
			{[...project.kanbanColumns].sort((a, b) => a.order - b.order).map(column => {
				const columnTasks = tasks.filter(task => task.columnId === column.id || (!task.columnId && task.status === statusByColumn[column.id.split('-').pop() ?? 'todo']));
				return (
					<div key={column.id} onDragOver={event => event.preventDefault()} onDrop={event => handleDrop(event, column.id)} className="min-h-[320px] rounded-xl border p-3" style={{ background: 'var(--surface-raised)', borderColor: 'var(--border)' }}>
						<div className="mb-3 flex items-center justify-between">
							<h3 className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--text-primary)' }}>{column.name}</h3>
							<span className="text-xs text-muted">{columnTasks.length}</span>
						</div>
						<div className="space-y-2">
							{columnTasks.sort((a, b) => a.order - b.order).map(task => (
								<article key={task.id} draggable onDragStart={event => event.dataTransfer.setData('task-id', task.id)} onClick={() => dispatch(openTaskDetail(task.id))} className="cursor-grab rounded-lg border p-3 shadow-sm transition hover:border-gold active:cursor-grabbing" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
									<p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{task.title}</p>
									<p className="mt-2 text-[11px] capitalize text-muted">{task.priority} priority</p>
								</article>
							))}
							{columnTasks.length === 0 && <p className="py-8 text-center text-xs text-muted">Drop tasks here</p>}
						</div>
					</div>
				);
			})}
			<button type="button" onClick={() => dispatch(openModal('createTask'))} className="sr-only">Create task</button>
		</div>
	);
}
