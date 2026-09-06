'use client';

import { useMemo, useState } from 'react';
import { useAppDispatch } from '@/store';
import { openTaskDetail } from '@/store/slices/uiSlice';
import type { Task } from '@/types';

export function ProjectListView({ tasks }: { tasks: Task[] }) {
	const dispatch = useAppDispatch();
	const [sort, setSort] = useState<'title' | 'priority' | 'dueDate'>('title');
	const sortedTasks = useMemo(() => [...tasks].sort((a, b) => {
		if (sort === 'dueDate') return (a.dueDate ?? '9999').localeCompare(b.dueDate ?? '9999');
		if (sort === 'priority') return a.priority.localeCompare(b.priority);
		return a.title.localeCompare(b.title);
	}), [tasks, sort]);

	return (
		<div className="overflow-x-auto rounded-xl border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
			<div className="flex justify-end border-b p-3" style={{ borderColor: 'var(--border)' }}>
				<select value={sort} onChange={event => setSort(event.target.value as typeof sort)} className="select text-xs" aria-label="Sort tasks">
					<option value="title">Sort: Name</option>
					<option value="priority">Sort: Priority</option>
					<option value="dueDate">Sort: Due date</option>
				</select>
			</div>
			<table className="w-full min-w-[620px] text-left text-xs">
				<thead><tr className="border-b text-muted" style={{ borderColor: 'var(--border)' }}><th className="px-4 py-3">Task</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Priority</th><th className="px-4 py-3">Due</th></tr></thead>
				<tbody>
					{sortedTasks.map(task => <tr key={task.id} onClick={() => dispatch(openTaskDetail(task.id))} className="cursor-pointer border-b hover:bg-black/5 dark:hover:bg-white/5" style={{ borderColor: 'var(--border)' }}><td className="px-4 py-3 font-semibold" style={{ color: 'var(--text-primary)' }}>{task.title}</td><td className="px-4 py-3 capitalize text-muted">{task.status.replace('_', ' ')}</td><td className="px-4 py-3 capitalize text-muted">{task.priority}</td><td className="px-4 py-3 text-muted">{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No date'}</td></tr>)}
				</tbody>
			</table>
			{sortedTasks.length === 0 && <p className="p-10 text-center text-sm text-muted">No tasks match your filters.</p>}
		</div>
	);
}
