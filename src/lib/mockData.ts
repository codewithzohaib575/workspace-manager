import { v4 as uuidv4 } from 'uuid';
import type { User, Workspace, Project, Task, Label, Activity, Notification, Comment, Subtask } from '@/types';

// ─── Mock Users ───────────────────────────────────────────────────────────────
export const MOCK_USERS: User[] = [
  { id: 'user-1', name: 'Zohaib Ahmed', email: 'zohaib@example.com', color: '#B08D57', initials: 'ZA', password: 'password123' },
  { id: 'user-2', name: 'Ayesha Malik', email: 'ayesha@example.com', color: '#7C6FAF', initials: 'AM', password: 'password123' },
  { id: 'user-3', name: 'Usman Khan', email: 'usman@example.com', color: '#4A90D9', initials: 'UK', password: 'password123' },
  { id: 'user-4', name: 'Fatima Noor', email: 'fatima@example.com', color: '#D96B4A', initials: 'FN', password: 'password123' },
  { id: 'user-5', name: 'Hassan Ali', email: 'hassan@example.com', color: '#4AAD7A', initials: 'HA', password: 'password123' },
];

// ─── Mock Labels ──────────────────────────────────────────────────────────────
export const MOCK_LABELS: Label[] = [
  { id: 'label-1', workspaceId: 'ws-1', name: 'Frontend', color: '#4A90D9' },
  { id: 'label-2', workspaceId: 'ws-1', name: 'Backend', color: '#7C6FAF' },
  { id: 'label-3', workspaceId: 'ws-1', name: 'Design', color: '#D96B4A' },
  { id: 'label-4', workspaceId: 'ws-1', name: 'Bug', color: '#E53E3E' },
  { id: 'label-5', workspaceId: 'ws-1', name: 'Feature', color: '#4AAD7A' },
  { id: 'label-6', workspaceId: 'ws-1', name: 'Documentation', color: '#B08D57' },
  { id: 'label-7', workspaceId: 'ws-1', name: 'Testing', color: '#ED8936' },
  { id: 'label-8', workspaceId: 'ws-2', name: 'Marketing', color: '#B794F4' },
  { id: 'label-9', workspaceId: 'ws-2', name: 'Sales', color: '#68D391' },
];

// ─── Mock Workspaces ──────────────────────────────────────────────────────────
export const MOCK_WORKSPACES: Workspace[] = [
  {
    id: 'ws-1',
    name: 'Acme Workspace',
    description: 'Main product development workspace for Acme Corp',
    icon: '🚀',
    color: '#B08D57',
    ownerId: 'user-1',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-03-01T09:00:00Z',
    members: [
      { userId: 'user-1', role: 'owner', joinedAt: '2024-01-15T10:00:00Z' },
      { userId: 'user-2', role: 'admin', joinedAt: '2024-01-16T10:00:00Z' },
      { userId: 'user-3', role: 'member', joinedAt: '2024-01-20T10:00:00Z' },
      { userId: 'user-4', role: 'member', joinedAt: '2024-02-01T10:00:00Z' },
      { userId: 'user-5', role: 'viewer', joinedAt: '2024-02-15T10:00:00Z' },
    ],
    settings: { defaultView: 'kanban', allowMemberInvites: true, notificationsEnabled: true },
  },
  {
    id: 'ws-2',
    name: 'Design Studio',
    description: 'Creative design and branding workspace',
    icon: '🎨',
    color: '#7C6FAF',
    ownerId: 'user-2',
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-03-10T09:00:00Z',
    members: [
      { userId: 'user-2', role: 'owner', joinedAt: '2024-02-01T10:00:00Z' },
      { userId: 'user-1', role: 'admin', joinedAt: '2024-02-05T10:00:00Z' },
      { userId: 'user-4', role: 'member', joinedAt: '2024-02-10T10:00:00Z' },
    ],
    settings: { defaultView: 'list', allowMemberInvites: true, notificationsEnabled: true },
  },
];

// ─── Kanban Columns ───────────────────────────────────────────────────────────
const defaultColumns = [
  { id: 'col-todo', name: 'To Do', color: '#6E6E68', order: 0 },
  { id: 'col-progress', name: 'In Progress', color: '#B08D57', order: 1 },
  { id: 'col-review', name: 'In Review', color: '#4A90D9', order: 2 },
  { id: 'col-done', name: 'Done', color: '#4AAD7A', order: 3 },
];

// ─── Mock Projects ────────────────────────────────────────────────────────────
export const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    workspaceId: 'ws-1',
    name: 'Website Redesign',
    description: 'Complete overhaul of the company website with modern design and improved UX',
    icon: '🌐',
    color: '#4A90D9',
    status: 'active',
    ownerId: 'user-1',
    createdAt: '2024-01-20T10:00:00Z',
    updatedAt: '2024-03-15T09:00:00Z',
    members: [
      { userId: 'user-1', role: 'owner', joinedAt: '2024-01-20T10:00:00Z' },
      { userId: 'user-2', role: 'admin', joinedAt: '2024-01-21T10:00:00Z' },
      { userId: 'user-3', role: 'member', joinedAt: '2024-01-22T10:00:00Z' },
    ],
    kanbanColumns: defaultColumns.map(c => ({ ...c, id: `proj1-${c.id}` })),
    defaultView: 'kanban',
    settings: { allowMemberInvites: true },
  },
  {
    id: 'proj-2',
    workspaceId: 'ws-1',
    name: 'Mobile App Development',
    description: 'Building the cross-platform mobile application for iOS and Android',
    icon: '📱',
    color: '#7C6FAF',
    status: 'active',
    ownerId: 'user-2',
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-03-10T09:00:00Z',
    members: [
      { userId: 'user-2', role: 'owner', joinedAt: '2024-02-01T10:00:00Z' },
      { userId: 'user-3', role: 'member', joinedAt: '2024-02-02T10:00:00Z' },
      { userId: 'user-4', role: 'member', joinedAt: '2024-02-05T10:00:00Z' },
    ],
    kanbanColumns: defaultColumns.map(c => ({ ...c, id: `proj2-${c.id}` })),
    defaultView: 'kanban',
    settings: { allowMemberInvites: true },
  },
  {
    id: 'proj-3',
    workspaceId: 'ws-1',
    name: 'Marketing Campaign',
    description: 'Q2 2024 digital marketing campaign across all channels',
    icon: '📢',
    color: '#D96B4A',
    status: 'on_hold',
    ownerId: 'user-4',
    createdAt: '2024-02-15T10:00:00Z',
    updatedAt: '2024-03-05T09:00:00Z',
    members: [
      { userId: 'user-4', role: 'owner', joinedAt: '2024-02-15T10:00:00Z' },
      { userId: 'user-1', role: 'member', joinedAt: '2024-02-16T10:00:00Z' },
    ],
    kanbanColumns: defaultColumns.map(c => ({ ...c, id: `proj3-${c.id}` })),
    defaultView: 'list',
    settings: { allowMemberInvites: false },
  },
  {
    id: 'proj-4',
    workspaceId: 'ws-1',
    name: 'Design System',
    description: 'Creating and maintaining the company-wide design system and component library',
    icon: '🎨',
    color: '#4AAD7A',
    status: 'active',
    ownerId: 'user-2',
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-03-20T09:00:00Z',
    members: [
      { userId: 'user-2', role: 'owner', joinedAt: '2024-01-10T10:00:00Z' },
      { userId: 'user-1', role: 'admin', joinedAt: '2024-01-11T10:00:00Z' },
      { userId: 'user-5', role: 'viewer', joinedAt: '2024-01-15T10:00:00Z' },
    ],
    kanbanColumns: defaultColumns.map(c => ({ ...c, id: `proj4-${c.id}` })),
    defaultView: 'kanban',
    settings: { allowMemberInvites: true },
  },
];

// ─── Subtasks helper ──────────────────────────────────────────────────────────
const makeSubtask = (taskId: string, idx: number, title: string, completed = false): Subtask => ({
  id: `st-${taskId}-${idx}`,
  taskId,
  title,
  completed,
  createdAt: '2024-02-01T10:00:00Z',
  updatedAt: '2024-02-01T10:00:00Z',
  order: idx,
});

// ─── Comments helper ──────────────────────────────────────────────────────────
const makeComment = (taskId: string, idx: number, authorId: string, content: string, date: string): Comment => ({
  id: `comment-${taskId}-${idx}`,
  taskId,
  authorId,
  content,
  mentions: [],
  createdAt: date,
  updatedAt: date,
  edited: false,
});

// ─── Mock Tasks ───────────────────────────────────────────────────────────────
export const MOCK_TASKS: Task[] = [
  // Website Redesign tasks
  {
    id: 'task-1', projectId: 'proj-1', workspaceId: 'ws-1',
    title: 'Research & Analysis', description: 'Conduct competitor analysis and user research for the new design direction.',
    status: 'done', priority: 'high', assigneeId: 'user-1', labels: ['label-3'],
    dueDate: '2024-02-15', createdAt: '2024-01-20T10:00:00Z', updatedAt: '2024-02-15T10:00:00Z',
    completedAt: '2024-02-14T10:00:00Z', createdBy: 'user-1', order: 0,
    columnId: 'proj1-col-done', isArchived: false,
    subtasks: [
      makeSubtask('task-1', 0, 'Review competitor websites', true),
      makeSubtask('task-1', 1, 'Interview 5 users', true),
      makeSubtask('task-1', 2, 'Create analysis report', true),
    ],
    attachments: [],
    comments: [makeComment('task-1', 0, 'user-2', 'Great research work! The insights are very useful.', '2024-02-14T11:00:00Z')],
  },
  {
    id: 'task-2', projectId: 'proj-1', workspaceId: 'ws-1',
    title: 'Design Homepage', description: 'Create new homepage design with improved hero section and content layout.',
    status: 'in_progress', priority: 'urgent', assigneeId: 'user-2', labels: ['label-1', 'label-3'],
    dueDate: '2024-03-20', createdAt: '2024-02-01T10:00:00Z', updatedAt: '2024-03-10T10:00:00Z',
    createdBy: 'user-1', order: 0, columnId: 'proj1-col-progress', isArchived: false,
    subtasks: [
      makeSubtask('task-2', 0, 'Design hero section', true),
      makeSubtask('task-2', 1, 'Design navigation', true),
      makeSubtask('task-2', 2, 'Design footer', false),
      makeSubtask('task-2', 3, 'Mobile responsive layout', false),
    ],
    attachments: [],
    comments: [
      makeComment('task-2', 0, 'user-1', 'Please make sure to follow the brand guidelines.', '2024-03-08T10:00:00Z'),
      makeComment('task-2', 1, 'user-2', 'Will do! Working on the hero section now. @user-3 can you review when ready?', '2024-03-09T10:00:00Z'),
    ],
  },
  {
    id: 'task-3', projectId: 'proj-1', workspaceId: 'ws-1',
    title: 'Develop Homepage', description: 'Implement the homepage design in Next.js with Tailwind CSS.',
    status: 'todo', priority: 'high', assigneeId: 'user-3', labels: ['label-1', 'label-2'],
    dueDate: '2024-04-01', createdAt: '2024-02-10T10:00:00Z', updatedAt: '2024-02-10T10:00:00Z',
    createdBy: 'user-1', order: 0, columnId: 'proj1-col-todo', isArchived: false,
    subtasks: [
      makeSubtask('task-3', 0, 'Setup component structure', false),
      makeSubtask('task-3', 1, 'Implement hero section', false),
      makeSubtask('task-3', 2, 'Add animations', false),
    ],
    attachments: [],
    comments: [],
  },
  {
    id: 'task-4', projectId: 'proj-1', workspaceId: 'ws-1',
    title: 'SEO Optimization', description: 'Implement on-page SEO best practices across all pages.',
    status: 'todo', priority: 'medium', assigneeId: 'user-1', labels: [],
    dueDate: '2024-04-15', createdAt: '2024-02-15T10:00:00Z', updatedAt: '2024-02-15T10:00:00Z',
    createdBy: 'user-1', order: 1, columnId: 'proj1-col-todo', isArchived: false,
    subtasks: [], attachments: [], comments: [],
  },
  {
    id: 'task-5', projectId: 'proj-1', workspaceId: 'ws-1',
    title: 'Client Feedback Round', description: 'Present designs to client and collect feedback.',
    status: 'in_review', priority: 'high', assigneeId: 'user-2', labels: [],
    dueDate: '2024-03-25', createdAt: '2024-03-01T10:00:00Z', updatedAt: '2024-03-15T10:00:00Z',
    createdBy: 'user-2', order: 0, columnId: 'proj1-col-review', isArchived: false,
    subtasks: [
      makeSubtask('task-5', 0, 'Prepare presentation deck', true),
      makeSubtask('task-5', 1, 'Schedule client meeting', true),
      makeSubtask('task-5', 2, 'Collect and document feedback', false),
    ],
    attachments: [], comments: [],
  },
  // Mobile App tasks
  {
    id: 'task-6', projectId: 'proj-2', workspaceId: 'ws-1',
    title: 'UI/UX Design Mockups', description: 'Create complete UI mockups for all app screens.',
    status: 'in_progress', priority: 'high', assigneeId: 'user-2', labels: ['label-3'],
    dueDate: '2024-03-30', createdAt: '2024-02-05T10:00:00Z', updatedAt: '2024-03-10T10:00:00Z',
    createdBy: 'user-2', order: 0, columnId: 'proj2-col-progress', isArchived: false,
    subtasks: [
      makeSubtask('task-6', 0, 'Onboarding screens', true),
      makeSubtask('task-6', 1, 'Home dashboard', true),
      makeSubtask('task-6', 2, 'Profile screens', false),
      makeSubtask('task-6', 3, 'Settings screens', false),
    ],
    attachments: [], comments: [],
  },
  {
    id: 'task-7', projectId: 'proj-2', workspaceId: 'ws-1',
    title: 'API Integration', description: 'Integrate REST APIs for data fetching and authentication.',
    status: 'todo', priority: 'urgent', assigneeId: 'user-3', labels: ['label-2'],
    dueDate: '2024-04-10', createdAt: '2024-02-10T10:00:00Z', updatedAt: '2024-02-10T10:00:00Z',
    createdBy: 'user-2', order: 0, columnId: 'proj2-col-todo', isArchived: false,
    subtasks: [], attachments: [], comments: [],
  },
  {
    id: 'task-8', projectId: 'proj-2', workspaceId: 'ws-1',
    title: 'Push Notifications Setup', description: 'Implement FCM push notifications for iOS and Android.',
    status: 'todo', priority: 'medium', assigneeId: 'user-4', labels: ['label-2'],
    dueDate: '2024-04-20', createdAt: '2024-02-20T10:00:00Z', updatedAt: '2024-02-20T10:00:00Z',
    createdBy: 'user-2', order: 1, columnId: 'proj2-col-todo', isArchived: false,
    subtasks: [], attachments: [], comments: [],
  },
  // Marketing Campaign tasks
  {
    id: 'task-9', projectId: 'proj-3', workspaceId: 'ws-1',
    title: 'Content Strategy', description: 'Define content pillars and editorial calendar for Q2.',
    status: 'in_progress', priority: 'high', assigneeId: 'user-4', labels: ['label-8'],
    dueDate: '2024-03-15', createdAt: '2024-02-20T10:00:00Z', updatedAt: '2024-03-01T10:00:00Z',
    createdBy: 'user-4', order: 0, columnId: 'proj3-col-progress', isArchived: false,
    subtasks: [], attachments: [], comments: [],
  },
  {
    id: 'task-10', projectId: 'proj-3', workspaceId: 'ws-1',
    title: 'Social Media Assets', description: 'Design social media graphics for all platforms.',
    status: 'todo', priority: 'medium', assigneeId: 'user-1', labels: ['label-3', 'label-8'],
    dueDate: '2024-03-25', createdAt: '2024-02-25T10:00:00Z', updatedAt: '2024-02-25T10:00:00Z',
    createdBy: 'user-4', order: 0, columnId: 'proj3-col-todo', isArchived: false,
    subtasks: [], attachments: [], comments: [],
  },
  // Design System tasks
  {
    id: 'task-11', projectId: 'proj-4', workspaceId: 'ws-1',
    title: 'Color Palette Definition', description: 'Establish the primary, secondary, and neutral color palettes.',
    status: 'done', priority: 'high', assigneeId: 'user-2', labels: ['label-3'],
    dueDate: '2024-01-30', createdAt: '2024-01-10T10:00:00Z', updatedAt: '2024-01-29T10:00:00Z',
    completedAt: '2024-01-29T10:00:00Z', createdBy: 'user-2', order: 0,
    columnId: 'proj4-col-done', isArchived: false,
    subtasks: [], attachments: [], comments: [],
  },
  {
    id: 'task-12', projectId: 'proj-4', workspaceId: 'ws-1',
    title: 'Typography System', description: 'Define font families, sizes, weights, and line heights.',
    status: 'done', priority: 'high', assigneeId: 'user-2', labels: ['label-3'],
    dueDate: '2024-02-10', createdAt: '2024-01-15T10:00:00Z', updatedAt: '2024-02-08T10:00:00Z',
    completedAt: '2024-02-08T10:00:00Z', createdBy: 'user-2', order: 1,
    columnId: 'proj4-col-done', isArchived: false,
    subtasks: [], attachments: [], comments: [],
  },
  {
    id: 'task-13', projectId: 'proj-4', workspaceId: 'ws-1',
    title: 'Component Library — Buttons', description: 'Create all button variants: primary, secondary, ghost, danger.',
    status: 'in_progress', priority: 'medium', assigneeId: 'user-2', labels: ['label-1', 'label-3'],
    dueDate: '2024-03-15', createdAt: '2024-02-15T10:00:00Z', updatedAt: '2024-03-01T10:00:00Z',
    createdBy: 'user-2', order: 0, columnId: 'proj4-col-progress', isArchived: false,
    subtasks: [
      makeSubtask('task-13', 0, 'Primary button', true),
      makeSubtask('task-13', 1, 'Secondary button', true),
      makeSubtask('task-13', 2, 'Ghost button', false),
      makeSubtask('task-13', 3, 'Danger button', false),
      makeSubtask('task-13', 4, 'Icon button', false),
    ],
    attachments: [], comments: [],
  },
];

// ─── Mock Activity ────────────────────────────────────────────────────────────
export const MOCK_ACTIVITY: Activity[] = [
  {
    id: 'act-1', workspaceId: 'ws-1', projectId: 'proj-1', taskId: 'task-2',
    actorId: 'user-1', type: 'status_changed',
    payload: { from: 'todo', to: 'in_progress', taskTitle: 'Design Homepage' },
    createdAt: '2024-03-10T09:30:00Z',
  },
  {
    id: 'act-2', workspaceId: 'ws-1', projectId: 'proj-1', taskId: 'task-2',
    actorId: 'user-2', type: 'comment_added',
    payload: { taskTitle: 'Design Homepage', preview: 'Will do! Working on the hero section now.' },
    createdAt: '2024-03-09T10:00:00Z',
  },
  {
    id: 'act-3', workspaceId: 'ws-1', projectId: 'proj-4', taskId: 'task-13',
    actorId: 'user-2', type: 'task_created',
    payload: { taskTitle: 'Component Library — Buttons' },
    createdAt: '2024-02-15T10:00:00Z',
  },
  {
    id: 'act-4', workspaceId: 'ws-1', projectId: 'proj-1', taskId: 'task-1',
    actorId: 'user-1', type: 'task_completed',
    payload: { taskTitle: 'Research & Analysis' },
    createdAt: '2024-02-14T10:00:00Z',
  },
  {
    id: 'act-5', workspaceId: 'ws-1', projectId: 'proj-1',
    actorId: 'user-1', type: 'project_created',
    payload: { projectName: 'Website Redesign' },
    createdAt: '2024-01-20T10:00:00Z',
  },
  {
    id: 'act-6', workspaceId: 'ws-1', projectId: 'proj-2', taskId: 'task-6',
    actorId: 'user-2', type: 'task_assigned',
    payload: { taskTitle: 'UI/UX Design Mockups', assignee: 'Ayesha Malik' },
    createdAt: '2024-02-05T10:00:00Z',
  },
];

// ─── Mock Notifications ───────────────────────────────────────────────────────
export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: 'notif-1', userId: 'user-1', type: 'mention',
    title: 'Ayesha Malik mentioned you',
    body: 'in "Design Homepage": @user-3 can you review when ready?',
    read: false, createdAt: '2024-03-09T10:00:00Z',
    relatedTaskId: 'task-2', relatedProjectId: 'proj-1', actorId: 'user-2',
  },
  {
    id: 'notif-2', userId: 'user-1', type: 'assignment',
    title: 'You were assigned a task',
    body: 'Task "SEO Optimization" has been assigned to you',
    read: false, createdAt: '2024-02-15T10:00:00Z',
    relatedTaskId: 'task-4', relatedProjectId: 'proj-1', actorId: 'user-1',
  },
  {
    id: 'notif-3', userId: 'user-1', type: 'due_date',
    title: 'Task due soon',
    body: '"Design Homepage" is due in 2 days',
    read: false, createdAt: '2024-03-18T08:00:00Z',
    relatedTaskId: 'task-2', relatedProjectId: 'proj-1',
  },
  {
    id: 'notif-4', userId: 'user-1', type: 'comment',
    title: 'New comment on your task',
    body: 'Ayesha commented on "Design Homepage"',
    read: true, createdAt: '2024-03-08T10:00:00Z',
    relatedTaskId: 'task-2', relatedProjectId: 'proj-1', actorId: 'user-2',
  },
];
