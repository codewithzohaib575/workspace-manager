import { v4 as uuidv4 } from 'uuid';
import type { AppDispatch } from '@/store';
import { addActivity } from '@/store/slices/activitySlice';
import { addNotification } from '@/store/slices/notificationSlice';
import { MOCK_USERS } from './mockData';

// Simulated collaboration: generates fake events from other users
export function startCollaborationSimulator(dispatch: AppDispatch, workspaceId: string, currentUserId: string): () => void {
  const otherUsers = MOCK_USERS.filter(u => u.id !== currentUserId);

  const events = [
    () => {
      const user = otherUsers[Math.floor(Math.random() * otherUsers.length)];
      dispatch(addActivity({
        id: uuidv4(),
        workspaceId,
        actorId: user.id,
        type: 'status_changed',
        payload: { taskTitle: 'Design Homepage', from: 'todo', to: 'in_progress', simulated: true },
        createdAt: new Date().toISOString(),
      }));
    },
    () => {
      const user = otherUsers[Math.floor(Math.random() * otherUsers.length)];
      dispatch(addActivity({
        id: uuidv4(),
        workspaceId,
        actorId: user.id,
        type: 'comment_added',
        payload: { taskTitle: 'API Integration', preview: 'Started working on this, will update progress.', simulated: true },
        createdAt: new Date().toISOString(),
      }));
    },
    () => {
      const user = otherUsers[Math.floor(Math.random() * otherUsers.length)];
      dispatch(addActivity({
        id: uuidv4(),
        workspaceId,
        actorId: user.id,
        type: 'task_completed',
        payload: { taskTitle: 'Color Palette Definition', simulated: true },
        createdAt: new Date().toISOString(),
      }));
    },
  ];

  const interval = setInterval(() => {
    // Random event every 30-90 seconds
    const delay = Math.random() * 60000 + 30000;
    setTimeout(() => {
      const event = events[Math.floor(Math.random() * events.length)];
      event();
    }, delay);
  }, 45000);

  return () => clearInterval(interval);
}

// Simulated due-date notification checker
export function startDueDateChecker(dispatch: AppDispatch, userId: string, tasks: Array<{ id: string; title: string; dueDate?: string; projectId: string }>): () => void {
  const check = () => {
    const now = new Date();
    const twoDaysFromNow = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);

    tasks.forEach(task => {
      if (!task.dueDate) return;
      const due = new Date(task.dueDate);
      if (due > now && due <= twoDaysFromNow) {
        const diffMs = due.getTime() - now.getTime();
        const diffHours = Math.round(diffMs / (1000 * 60 * 60));
        dispatch(addNotification({
          id: `due-${task.id}-${Date.now()}`,
          userId,
          type: 'due_date',
          title: 'Task due soon',
          body: `"${task.title}" is due in ${diffHours < 24 ? `${diffHours}h` : '2 days'}`,
          read: false,
          createdAt: new Date().toISOString(),
          relatedTaskId: task.id,
          relatedProjectId: task.projectId,
        }));
      }
    });
  };

  // Check once on start, then every hour
  check();
  const interval = setInterval(check, 60 * 60 * 1000);
  return () => clearInterval(interval);
}
