import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Task, Subtask, Comment, Attachment } from '@/types';
import { MOCK_TASKS } from '@/lib/mockData';

interface TaskState {
  items: Task[];
  isLoading: boolean;
  error: string | null;
  selectedTaskIds: string[];
}

const initialState: TaskState = {
  items: MOCK_TASKS,
  isLoading: false,
  error: null,
  selectedTaskIds: [],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.items.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<{ id: string; updates: Partial<Task> }>) => {
      const idx = state.items.findIndex(t => t.id === action.payload.id);
      if (idx >= 0) {
        state.items[idx] = { ...state.items[idx], ...action.payload.updates, updatedAt: new Date().toISOString() };
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(t => t.id !== action.payload);
      state.selectedTaskIds = state.selectedTaskIds.filter(id => id !== action.payload);
    },
    deleteMultipleTasks: (state, action: PayloadAction<string[]>) => {
      state.items = state.items.filter(t => !action.payload.includes(t.id));
      state.selectedTaskIds = [];
    },
    duplicateTask: (state, action: PayloadAction<{ originalId: string; newTask: Task }>) => {
      const idx = state.items.findIndex(t => t.id === action.payload.originalId);
      if (idx >= 0) {
        state.items.splice(idx + 1, 0, action.payload.newTask);
      }
    },
    completeTask: (state, action: PayloadAction<string>) => {
      const task = state.items.find(t => t.id === action.payload);
      if (task) {
        task.status = 'done';
        task.completedAt = new Date().toISOString();
        task.updatedAt = new Date().toISOString();
      }
    },
    reopenTask: (state, action: PayloadAction<string>) => {
      const task = state.items.find(t => t.id === action.payload);
      if (task) {
        task.status = 'in_progress';
        task.completedAt = undefined;
        task.updatedAt = new Date().toISOString();
      }
    },
    archiveTask: (state, action: PayloadAction<string>) => {
      const task = state.items.find(t => t.id === action.payload);
      if (task) {
        task.isArchived = true;
        task.archivedAt = new Date().toISOString();
        task.updatedAt = new Date().toISOString();
      }
    },
    restoreTask: (state, action: PayloadAction<string>) => {
      const task = state.items.find(t => t.id === action.payload);
      if (task) {
        task.isArchived = false;
        task.archivedAt = undefined;
        task.updatedAt = new Date().toISOString();
      }
    },
    moveTask: (state, action: PayloadAction<{ taskId: string; columnId: string; status: string; order: number }>) => {
      const task = state.items.find(t => t.id === action.payload.taskId);
      if (task) {
        task.columnId = action.payload.columnId;
        task.status = action.payload.status;
        task.order = action.payload.order;
        task.updatedAt = new Date().toISOString();
      }
    },
    reorderTasks: (state, action: PayloadAction<{ tasks: Array<{ id: string; order: number; columnId: string }> }>) => {
      action.payload.tasks.forEach(({ id, order, columnId }) => {
        const task = state.items.find(t => t.id === id);
        if (task) {
          task.order = order;
          task.columnId = columnId;
        }
      });
    },
    bulkUpdateStatus: (state, action: PayloadAction<{ ids: string[]; status: string }>) => {
      action.payload.ids.forEach(id => {
        const task = state.items.find(t => t.id === id);
        if (task) {
          task.status = action.payload.status;
          task.updatedAt = new Date().toISOString();
        }
      });
      state.selectedTaskIds = [];
    },
    bulkUpdatePriority: (state, action: PayloadAction<{ ids: string[]; priority: Task['priority'] }>) => {
      action.payload.ids.forEach(id => {
        const task = state.items.find(t => t.id === id);
        if (task) {
          task.priority = action.payload.priority;
          task.updatedAt = new Date().toISOString();
        }
      });
      state.selectedTaskIds = [];
    },
    bulkUpdateAssignee: (state, action: PayloadAction<{ ids: string[]; assigneeId: string | undefined }>) => {
      action.payload.ids.forEach(id => {
        const task = state.items.find(t => t.id === id);
        if (task) {
          task.assigneeId = action.payload.assigneeId;
          task.updatedAt = new Date().toISOString();
        }
      });
      state.selectedTaskIds = [];
    },
    bulkArchive: (state, action: PayloadAction<string[]>) => {
      action.payload.forEach(id => {
        const task = state.items.find(t => t.id === id);
        if (task) {
          task.isArchived = true;
          task.archivedAt = new Date().toISOString();
          task.updatedAt = new Date().toISOString();
        }
      });
      state.selectedTaskIds = [];
    },
    // Subtasks
    addSubtask: (state, action: PayloadAction<{ taskId: string; subtask: Subtask }>) => {
      const task = state.items.find(t => t.id === action.payload.taskId);
      if (task) task.subtasks.push(action.payload.subtask);
    },
    updateSubtask: (state, action: PayloadAction<{ taskId: string; subtaskId: string; updates: Partial<Subtask> }>) => {
      const task = state.items.find(t => t.id === action.payload.taskId);
      if (task) {
        const subtask = task.subtasks.find(s => s.id === action.payload.subtaskId);
        if (subtask) Object.assign(subtask, action.payload.updates, { updatedAt: new Date().toISOString() });
      }
    },
    deleteSubtask: (state, action: PayloadAction<{ taskId: string; subtaskId: string }>) => {
      const task = state.items.find(t => t.id === action.payload.taskId);
      if (task) {
        task.subtasks = task.subtasks.filter(s => s.id !== action.payload.subtaskId);
      }
    },
    toggleSubtask: (state, action: PayloadAction<{ taskId: string; subtaskId: string }>) => {
      const task = state.items.find(t => t.id === action.payload.taskId);
      if (task) {
        const subtask = task.subtasks.find(s => s.id === action.payload.subtaskId);
        if (subtask) {
          subtask.completed = !subtask.completed;
          subtask.updatedAt = new Date().toISOString();
        }
      }
    },
    // Comments
    addComment: (state, action: PayloadAction<{ taskId: string; comment: Comment }>) => {
      const task = state.items.find(t => t.id === action.payload.taskId);
      if (task) task.comments.push(action.payload.comment);
    },
    updateComment: (state, action: PayloadAction<{ taskId: string; commentId: string; content: string }>) => {
      const task = state.items.find(t => t.id === action.payload.taskId);
      if (task) {
        const comment = task.comments.find(c => c.id === action.payload.commentId);
        if (comment) {
          comment.content = action.payload.content;
          comment.edited = true;
          comment.updatedAt = new Date().toISOString();
        }
      }
    },
    deleteComment: (state, action: PayloadAction<{ taskId: string; commentId: string }>) => {
      const task = state.items.find(t => t.id === action.payload.taskId);
      if (task) {
        task.comments = task.comments.filter(c => c.id !== action.payload.commentId);
      }
    },
    // Attachments
    addAttachment: (state, action: PayloadAction<{ taskId: string; attachment: Attachment }>) => {
      const task = state.items.find(t => t.id === action.payload.taskId);
      if (task) task.attachments.push(action.payload.attachment);
    },
    removeAttachment: (state, action: PayloadAction<{ taskId: string; attachmentId: string }>) => {
      const task = state.items.find(t => t.id === action.payload.taskId);
      if (task) {
        task.attachments = task.attachments.filter(a => a.id !== action.payload.attachmentId);
      }
    },
    // Selection
    selectTask: (state, action: PayloadAction<string>) => {
      if (!state.selectedTaskIds.includes(action.payload)) {
        state.selectedTaskIds.push(action.payload);
      }
    },
    deselectTask: (state, action: PayloadAction<string>) => {
      state.selectedTaskIds = state.selectedTaskIds.filter(id => id !== action.payload);
    },
    selectAllTasks: (state, action: PayloadAction<string[]>) => {
      state.selectedTaskIds = action.payload;
    },
    clearSelection: (state) => {
      state.selectedTaskIds = [];
    },
    // Update due date by dragging in calendar
    updateTaskDueDate: (state, action: PayloadAction<{ taskId: string; dueDate: string }>) => {
      const task = state.items.find(t => t.id === action.payload.taskId);
      if (task) {
        task.dueDate = action.payload.dueDate;
        task.updatedAt = new Date().toISOString();
      }
    },
    // Bulk replace for import/reset
    setAllTasks: (state, action: PayloadAction<Task[]>) => {
      state.items = action.payload;
    },
  },
});

export const {
  addTask, updateTask, deleteTask, deleteMultipleTasks, duplicateTask,
  completeTask, reopenTask, archiveTask, restoreTask,
  moveTask, reorderTasks,
  bulkUpdateStatus, bulkUpdatePriority, bulkUpdateAssignee, bulkArchive,
  addSubtask, updateSubtask, deleteSubtask, toggleSubtask,
  addComment, updateComment, deleteComment,
  addAttachment, removeAttachment,
  selectTask, deselectTask, selectAllTasks, clearSelection,
  updateTaskDueDate, setAllTasks,
} = taskSlice.actions;

export default taskSlice.reducer;
