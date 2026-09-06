'use client';
import { useState, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { closeModal, addToast } from '@/store/slices/uiSlice';
import { addTask } from '@/store/slices/taskSlice';
import { Modal } from '@/components/ui/Modal';
import type { Task, Priority, TaskStatus } from '@/types';

export function CreateTaskModal() {
  const dispatch = useAppDispatch();
  const activeModal = useAppSelector(s => s.ui.activeModal);
  const currentWorkspaceId = useAppSelector(s => s.workspaces.currentWorkspaceId);
  const currentProjectId = useAppSelector(s => s.projects.currentProjectId);
  const rawProjects = useAppSelector(s => s.projects.items) || [];
  const projects = useMemo(() => (rawProjects || []).filter(p => p.workspaceId === currentWorkspaceId), [rawProjects, currentWorkspaceId]);
  const users = useAppSelector(s => s.auth.users) || [];
  const currentUser = useAppSelector(s => s.auth.currentUser);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectId, setProjectId] = useState(currentProjectId ?? projects[0]?.id ?? '');
  const [status, setStatus] = useState<string>('todo');
  const [priority, setPriority] = useState<Priority>('medium');
  const [assigneeId, setAssigneeId] = useState(currentUser?.id ?? '');
  const [dueDate, setDueDate] = useState('');

  if (activeModal !== 'createTask') return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !projectId) return;

    const newTask: Task = {
      id: `task-${Date.now().toString().slice(-6)}`,
      title: title.trim(),
      description: description.trim() || undefined,
      projectId,
      workspaceId: currentWorkspaceId ?? 'ws-1',
      status,
      priority,
      assigneeId: assigneeId || undefined,
      dueDate: dueDate ? new Date(dueDate).toISOString() : undefined,
      labels: [],
      subtasks: [],
      comments: [],
      attachments: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      createdBy: currentUser?.id ?? 'user-1',
      order: 0,
      isArchived: false,
    };

    dispatch(addTask(newTask));
    dispatch(closeModal());
    dispatch(addToast({
      id: String(Date.now()),
      title: 'Task Created',
      description: `"${newTask.title}" added successfully`,
      type: 'success',
    }));

    setTitle('');
    setDescription('');
  };

  return (
    <Modal
      open={true}
      onClose={() => dispatch(closeModal())}
      title="Create New Task"
      size="md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>
            Task Title *
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="e.g. Implement user authentication flow"
            className="input w-full text-sm"
            autoFocus
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>
              Project *
            </label>
            <select
              value={projectId}
              onChange={e => setProjectId(e.target.value)}
              className="select w-full text-xs"
              required
            >
              {projects.map(p => (
                <option key={p.id} value={p.id}>
                  {p.icon} {p.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>
              Status
            </label>
            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="select w-full text-xs"
            >
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="in_review">In Review</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>
              Priority
            </label>
            <select
              value={priority}
              onChange={e => setPriority(e.target.value as Priority)}
              className="select w-full text-xs"
            >
              <option value="urgent">🔴 Urgent</option>
              <option value="high">🟠 High</option>
              <option value="medium">🟡 Medium</option>
              <option value="low">🟢 Low</option>
              <option value="none">⚪ None</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>
              Assignee
            </label>
            <select
              value={assigneeId}
              onChange={e => setAssigneeId(e.target.value)}
              className="select w-full text-xs"
            >
              <option value="">Unassigned</option>
              {users.map(u => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>
            Due Date
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            className="input w-full text-xs"
          />
        </div>

        <div>
          <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>
            Description (Optional)
          </label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Add relevant links, notes, or acceptance criteria..."
            rows={3}
            className="textarea w-full text-xs"
          />
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
          <button
            type="button"
            onClick={() => dispatch(closeModal())}
            className="btn btn-secondary btn-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary btn-sm"
          >
            Create Task
          </button>
        </div>
      </form>
    </Modal>
  );
}
