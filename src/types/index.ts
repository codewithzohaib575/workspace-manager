// All TypeScript types for Workspace Manager
export type Role = 'owner' | 'admin' | 'member' | 'viewer';
export type Priority = 'urgent' | 'high' | 'medium' | 'low' | 'none';
export type TaskStatus = 'todo' | 'in_progress' | 'in_review' | 'done' | 'cancelled';
export type ProjectStatus = 'active' | 'on_hold' | 'completed' | 'archived';
export type NotificationType = 'assignment' | 'mention' | 'due_date' | 'comment' | 'status_change' | 'invite';
export type ActivityType =
  | 'task_created' | 'task_updated' | 'task_deleted' | 'task_completed'
  | 'task_assigned' | 'status_changed' | 'priority_changed' | 'due_date_changed'
  | 'comment_added' | 'comment_edited' | 'comment_deleted'
  | 'subtask_created' | 'subtask_completed'
  | 'project_created' | 'project_updated' | 'project_archived' | 'project_deleted'
  | 'member_invited' | 'member_removed' | 'role_changed'
  | 'label_added' | 'label_removed'
  | 'attachment_added' | 'attachment_removed';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  color: string;
  initials: string;
  password?: string;
}

export interface WorkspaceMember {
  userId: string;
  role: Role;
  joinedAt: string;
}

export interface WorkspaceSettings {
  defaultView: 'kanban' | 'list' | 'calendar';
  allowMemberInvites: boolean;
  notificationsEnabled: boolean;
}

export interface Workspace {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  color: string;
  members: WorkspaceMember[];
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  settings: WorkspaceSettings;
}

export interface ProjectMember {
  userId: string;
  role: Role;
  joinedAt: string;
}

export interface KanbanColumn {
  id: string;
  name: string;
  color: string;
  order: number;
  wipLimit?: number;
}

export interface ProjectSettings {
  allowMemberInvites: boolean;
  defaultAssignee?: string;
}

export interface Project {
  id: string;
  workspaceId: string;
  name: string;
  description?: string;
  icon?: string;
  color: string;
  status: ProjectStatus;
  members: ProjectMember[];
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  archivedAt?: string;
  templateId?: string;
  kanbanColumns: KanbanColumn[];
  defaultView: 'kanban' | 'list' | 'calendar' | 'activity';
  settings: ProjectSettings;
}

export interface Label {
  id: string;
  workspaceId: string;
  name: string;
  color: string;
}

export interface Subtask {
  id: string;
  taskId: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  assigneeId?: string;
  dueDate?: string;
  order: number;
}

export interface Attachment {
  id: string;
  taskId: string;
  name: string;
  size: number;
  type: string;
  storedInIndexedDB: boolean;
  uploadedAt: string;
  uploadedBy: string;
}

export interface Comment {
  id: string;
  taskId: string;
  authorId: string;
  content: string;
  mentions: string[];
  createdAt: string;
  updatedAt: string;
  edited: boolean;
}

export interface Task {
  id: string;
  projectId: string;
  workspaceId: string;
  title: string;
  description?: string;
  status: string;
  priority: Priority;
  assigneeId?: string;
  labels: string[];
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
  archivedAt?: string;
  createdBy: string;
  order: number;
  columnId?: string;
  subtasks: Subtask[];
  attachments: Attachment[];
  comments: Comment[];
  parentTaskId?: string;
  isArchived: boolean;
}

export interface Activity {
  id: string;
  workspaceId: string;
  projectId?: string;
  taskId?: string;
  actorId: string;
  type: ActivityType;
  payload: Record<string, unknown>;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  body: string;
  read: boolean;
  createdAt: string;
  relatedTaskId?: string;
  relatedProjectId?: string;
  relatedWorkspaceId?: string;
  actorId?: string;
}

export interface FilterPreset {
  id: string;
  name: string;
  projectId?: string;
  filters: FilterState;
  createdAt: string;
}

export interface FilterState {
  assigneeIds: string[];
  labelIds: string[];
  priorities: Priority[];
  statuses: string[];
  dueDateFrom?: string;
  dueDateTo?: string;
  search?: string;
}

export interface SortState {
  field: 'dueDate' | 'priority' | 'createdAt' | 'title' | 'status';
  direction: 'asc' | 'desc';
}

export interface UndoRedoAction {
  id: string;
  type: string;
  description: string;
  undo: Record<string, unknown>;
  redo: Record<string, unknown>;
  timestamp: string;
}

export interface NotificationPreferences {
  assignment: boolean;
  mentions: boolean;
  dueDateAlerts: boolean;
  statusChanges: boolean;
  comments: boolean;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  sidebarCollapsed: boolean;
  notificationPreferences: NotificationPreferences;
  optimisticFailureRate: number;
  defaultWorkspaceId?: string;
}

export interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  columns: Omit<KanbanColumn, 'id'>[];
  tasks: Array<{
    title: string;
    description?: string;
    priority: Priority;
    status: string;
    labels: string[];
  }>;
}

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: string;
  };
  duration?: number;
}

export interface OfflineAction {
  id: string;
  type: string;
  payload: Record<string, unknown>;
  timestamp: string;
  retries: number;
}
