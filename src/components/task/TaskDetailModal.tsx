'use client';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { closeTaskDetail, addToast } from '@/store/slices/uiSlice';
import {
  updateTask, deleteTask, addSubtask, toggleSubtask, deleteSubtask,
  addComment, deleteComment, addAttachment, removeAttachment
} from '@/store/slices/taskSlice';
import { Modal } from '@/components/ui/Modal';
import { Avatar, StatusBadge, PriorityBadge } from '@/components/ui';
import {
  Calendar, User, Tag, CheckSquare, MessageSquare, Paperclip,
  Trash2, Plus, X, Clock, ExternalLink, Check, AlertCircle
} from 'lucide-react';
import type { TaskStatus, Priority, Subtask, Comment, Attachment } from '@/types';

export function TaskDetailModal() {
  const dispatch = useAppDispatch();
  const activeTaskId = useAppSelector(s => s.ui.activeTaskId);
  const task = useAppSelector(s => s.tasks.items?.find(t => t.id === activeTaskId));
  const projects = useAppSelector(s => s.projects.items) || [];
  const users = useAppSelector(s => s.auth.users) || [];
  const currentUser = useAppSelector(s => s.auth.currentUser);

  const [newSubtaskTitle, setNewSubtaskTitle] = useState('');
  const [commentText, setCommentText] = useState('');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [descValue, setDescValue] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  if (!task) return null;

  const project = projects?.find(p => p.id === task.projectId);
  const assignee = users?.find(u => u.id === task.assigneeId);

  const completedSubtasks = task.subtasks.filter(s => s.completed).length;
  const subtaskProgress = task.subtasks.length > 0
    ? Math.round((completedSubtasks / task.subtasks.length) * 100)
    : 0;

  const handleStatusChange = (status: string) => {
    dispatch(updateTask({ id: task.id, updates: { status } }));
    dispatch(addToast({
      id: String(Date.now()),
      title: 'Status Updated',
      description: `Task marked as ${status.replace('_', ' ')}`,
      type: 'success',
    }));
  };

  const handlePriorityChange = (priority: Priority) => {
    dispatch(updateTask({ id: task.id, updates: { priority } }));
    dispatch(addToast({
      id: String(Date.now()),
      title: 'Priority Updated',
      description: `Task priority set to ${priority}`,
      type: 'info',
    }));
  };

  const handleAssigneeChange = (assigneeId: string) => {
    dispatch(updateTask({ id: task.id, updates: { assigneeId: assigneeId || undefined } }));
  };

  const handleDueDateChange = (dueDate: string) => {
    dispatch(updateTask({ id: task.id, updates: { dueDate: dueDate || undefined } }));
  };

  const handleSaveTitle = () => {
    if (titleValue.trim() && titleValue !== task.title) {
      dispatch(updateTask({ id: task.id, updates: { title: titleValue.trim() } }));
    }
    setIsEditingTitle(false);
  };

  const handleSaveDesc = () => {
    dispatch(updateTask({ id: task.id, updates: { description: descValue.trim() } }));
    setIsEditingDesc(false);
  };

  const handleAddSubtask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubtaskTitle.trim()) return;
    const subtask: Subtask = {
      id: 'sub-' + Date.now(),
      taskId: task.id,
      title: newSubtaskTitle.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      order: task.subtasks.length,
    };
    dispatch(addSubtask({ taskId: task.id, subtask }));
    setNewSubtaskTitle('');
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim() || !currentUser) return;
    const comment: Comment = {
      id: 'cmt-' + Date.now(),
      taskId: task.id,
      authorId: currentUser.id,
      content: commentText.trim(),
      mentions: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      edited: false,
    };
    dispatch(addComment({ taskId: task.id, comment }));
    setCommentText('');
    dispatch(addToast({
      id: String(Date.now()),
      title: 'Comment Added',
      type: 'success',
    }));
  };

  const handleAddAttachment = () => {
    if (!currentUser) return;
    const mockFileNames = ['spec-v2.pdf', 'dashboard-mockup.png', 'notes.docx', 'benchmark.csv'];
    const randomName = mockFileNames[Math.floor(Math.random() * mockFileNames.length)];
    const attachment: Attachment = {
      id: 'att-' + Date.now(),
      taskId: task.id,
      name: randomName,
      size: Math.floor(Math.random() * 4500000) + 120000,
      type: randomName.endsWith('.png') ? 'image/png' : 'application/pdf',
      storedInIndexedDB: false,
      uploadedAt: new Date().toISOString(),
      uploadedBy: currentUser.id,
    };
    dispatch(addAttachment({ taskId: task.id, attachment }));
    dispatch(addToast({
      id: String(Date.now()),
      title: 'File Attached',
      description: randomName,
      type: 'info',
    }));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
    dispatch(closeTaskDetail());
    dispatch(addToast({
      id: String(Date.now()),
      title: 'Task Deleted',
      description: task.title,
      type: 'info',
    }));
  };

  return (
    <Modal open={true} onClose={() => dispatch(closeTaskDetail())} size="lg">
      <div className="space-y-6">
        {/* Header Breadcrumb & Actions */}
        <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            <span className="font-semibold" style={{ color: 'var(--gold)' }}>{project?.icon ?? '📋'} {project?.name}</span>
            <span>/</span>
            <span className="font-mono text-xs">{task.id}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="p-1.5 rounded text-red-500 hover:bg-red-500/10 transition-colors"
              title="Delete task"
            >
              <Trash2 size={16} />
            </button>
            <button
              onClick={() => dispatch(closeTaskDetail())}
              className="p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Delete Confirmation Alert */}
        {showDeleteConfirm && (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2 text-red-500 text-sm font-semibold">
              <AlertCircle size={18} />
              Are you sure you want to delete this task?
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-3 py-1 text-xs rounded border"
                style={{ borderColor: 'var(--border)' }}
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteTask}
                className="px-3 py-1 text-xs rounded bg-red-600 text-white font-semibold hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        )}

        {/* Task Title */}
        <div>
          {isEditingTitle ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={titleValue}
                onChange={e => setTitleValue(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleSaveTitle(); if (e.key === 'Escape') setIsEditingTitle(false); }}
                className="input text-lg font-bold w-full"
                autoFocus
              />
              <button onClick={handleSaveTitle} className="btn btn-primary btn-sm">Save</button>
            </div>
          ) : (
            <h2
              onClick={() => { setTitleValue(task.title); setIsEditingTitle(true); }}
              className="text-xl font-bold cursor-pointer hover:underline decoration-dashed"
              style={{ color: 'var(--text-primary)' }}
              title="Click to edit title"
            >
              {task.title}
            </h2>
          )}
        </div>

        {/* Quick Attributes Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-3 rounded-lg border text-sm" style={{ background: 'var(--surface-raised)', borderColor: 'var(--border)' }}>
          {/* Status */}
          <div>
            <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>Status</label>
            <select
              value={task.status}
              onChange={e => handleStatusChange(e.target.value)}
              className="select text-xs w-full py-1"
            >
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="in_review">In Review</option>
              <option value="done">Done</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>Priority</label>
            <select
              value={task.priority}
              onChange={e => handlePriorityChange(e.target.value as Priority)}
              className="select text-xs w-full py-1"
            >
              <option value="urgent">🔴 Urgent</option>
              <option value="high">🟠 High</option>
              <option value="medium">🟡 Medium</option>
              <option value="low">🟢 Low</option>
              <option value="none">⚪ None</option>
            </select>
          </div>

          {/* Assignee */}
          <div>
            <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>Assignee</label>
            <select
              value={task.assigneeId ?? ''}
              onChange={e => handleAssigneeChange(e.target.value)}
              className="select text-xs w-full py-1"
            >
              <option value="">Unassigned</option>
              {users.map(u => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
          </div>

          {/* Due Date */}
          <div>
            <label className="text-xs font-semibold block mb-1" style={{ color: 'var(--text-muted)' }}>Due Date</label>
            <input
              type="date"
              value={task.dueDate ? task.dueDate.split('T')[0] : ''}
              onChange={e => handleDueDateChange(e.target.value ? new Date(e.target.value).toISOString() : '')}
              className="input text-xs w-full py-1"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="text-xs font-semibold block mb-1 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
            Description
          </label>
          {isEditingDesc ? (
            <div className="space-y-2">
              <textarea
                value={descValue}
                onChange={e => setDescValue(e.target.value)}
                rows={4}
                className="textarea w-full text-sm"
                placeholder="Write task details, specifications, acceptance criteria..."
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <button onClick={() => setIsEditingDesc(false)} className="btn btn-secondary btn-sm">Cancel</button>
                <button onClick={handleSaveDesc} className="btn btn-primary btn-sm">Save Description</button>
              </div>
            </div>
          ) : (
            <div
              onClick={() => { setDescValue(task.description || ''); setIsEditingDesc(true); }}
              className="p-3 rounded-lg border text-sm min-h-[70px] cursor-pointer hover:border-gold/50 transition-colors"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              {task.description ? (
                <p className="whitespace-pre-wrap" style={{ color: 'var(--text-primary)' }}>{task.description}</p>
              ) : (
                <p className="italic text-xs" style={{ color: 'var(--text-muted)' }}>Add description or markdown notes...</p>
              )}
            </div>
          )}
        </div>

        {/* Subtasks Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <CheckSquare size={16} style={{ color: 'var(--gold)' }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                Subtasks ({completedSubtasks}/{task.subtasks.length})
              </span>
            </div>
            {task.subtasks.length > 0 && (
              <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>{subtaskProgress}%</span>
            )}
          </div>

          {/* Progress Bar */}
          {task.subtasks.length > 0 && (
            <div className="w-full bg-black/10 dark:bg-white/10 h-1.5 rounded-full overflow-hidden mb-3">
              <div
                className="h-full transition-all duration-300 rounded-full"
                style={{
                  width: `${subtaskProgress}%`,
                  background: subtaskProgress === 100 ? '#22c55e' : 'var(--gold)'
                }}
              />
            </div>
          )}

          {/* Subtask list */}
          <div className="space-y-1 mb-3">
            {task.subtasks.map(st => (
              <div
                key={st.id}
                className="flex items-center justify-between p-2 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors group"
              >
                <label className="flex items-center gap-2.5 flex-1 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={st.completed}
                    onChange={() => dispatch(toggleSubtask({ taskId: task.id, subtaskId: st.id }))}
                    className="w-4 h-4 rounded text-gold focus:ring-gold accent-gold"
                  />
                  <span className={st.completed ? 'line-through text-muted' : 'text-primary'}>
                    {st.title}
                  </span>
                </label>
                <button
                  onClick={() => dispatch(deleteSubtask({ taskId: task.id, subtaskId: st.id }))}
                  className="opacity-0 group-hover:opacity-100 p-1 text-red-500 transition-opacity"
                  title="Remove subtask"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>

          {/* Add Subtask Form */}
          <form onSubmit={handleAddSubtask} className="flex gap-2">
            <input
              type="text"
              value={newSubtaskTitle}
              onChange={e => setNewSubtaskTitle(e.target.value)}
              placeholder="Add new subtask... (press Enter)"
              className="input text-xs flex-1 py-1.5"
            />
            <button type="submit" className="btn btn-secondary btn-sm flex items-center gap-1">
              <Plus size={14} /> Add
            </button>
          </form>
        </div>

        {/* Attachments Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Paperclip size={16} style={{ color: 'var(--gold)' }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                Attachments ({task.attachments.length})
              </span>
            </div>
            <button
              onClick={handleAddAttachment}
              className="text-xs text-gold hover:underline flex items-center gap-1 font-semibold"
            >
              <Plus size={12} /> Add File
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {task.attachments.map(att => (
              <div
                key={att.id}
                className="flex items-center justify-between p-2.5 rounded border text-xs"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div className="flex items-center gap-2 truncate">
                  <Paperclip size={13} style={{ color: 'var(--text-muted)' }} />
                  <span className="font-semibold truncate">{att.name}</span>
                  <span style={{ color: 'var(--text-muted)' }}>
                    ({(att.size / 1024).toFixed(0)} KB)
                  </span>
                </div>
                <button
                  onClick={() => dispatch(removeAttachment({ taskId: task.id, attachmentId: att.id }))}
                  className="p-1 hover:text-red-500"
                  title="Remove"
                >
                  <X size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare size={16} style={{ color: 'var(--gold)' }} />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              Comments ({task.comments.length})
            </span>
          </div>

          {/* Comments List */}
          <div className="space-y-3 mb-4 max-h-56 overflow-y-auto pr-1">
            {task.comments.map(c => {
              const author = users?.find(u => u.id === c.authorId);
              return (
                <div key={c.id} className="p-3 rounded-lg border text-sm" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <Avatar name={author?.name ?? 'User'} color={author?.color ?? '#888'} size="xs" />
                      <span className="font-semibold text-xs">{author?.name ?? 'User'}</span>
                      <span className="text-xs text-muted">
                        {new Date(c.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    {c.authorId === currentUser?.id && (
                      <button
                        onClick={() => dispatch(deleteComment({ taskId: task.id, commentId: c.id }))}
                        className="text-muted hover:text-red-500 p-0.5"
                      >
                        <X size={12} />
                      </button>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-primary)' }}>{c.content}</p>
                </div>
              );
            })}
            {task.comments.length === 0 && (
              <p className="text-xs italic text-muted">No comments yet. Start the conversation!</p>
            )}
          </div>

          {/* Add Comment Input */}
          <form onSubmit={handleAddComment} className="flex gap-2">
            <input
              type="text"
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="input text-xs flex-1 py-1.5"
            />
            <button type="submit" className="btn btn-primary btn-sm">
              Post
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
}
