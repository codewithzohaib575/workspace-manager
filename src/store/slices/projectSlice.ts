import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Project, ProjectMember, KanbanColumn } from '@/types';
import { MOCK_PROJECTS } from '@/lib/mockData';

interface ProjectState {
  items: Project[];
  currentProjectId: string | null;
  currentView: Record<string, 'kanban' | 'list' | 'calendar' | 'activity'>;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  items: MOCK_PROJECTS,
  currentProjectId: null,
  currentView: {},
  isLoading: false,
  error: null,
};

export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setCurrentProject: (state, action: PayloadAction<string | null>) => {
      state.currentProjectId = action.payload;
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.items.push(action.payload);
      state.currentProjectId = action.payload.id;
    },
    updateProject: (state, action: PayloadAction<{ id: string; updates: Partial<Project> }>) => {
      const idx = state.items.findIndex(p => p.id === action.payload.id);
      if (idx >= 0) {
        state.items[idx] = { ...state.items[idx], ...action.payload.updates, updatedAt: new Date().toISOString() };
      }
    },
    deleteProject: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(p => p.id !== action.payload);
      if (state.currentProjectId === action.payload) {
        state.currentProjectId = null;
      }
    },
    archiveProject: (state, action: PayloadAction<string>) => {
      const project = state.items.find(p => p.id === action.payload);
      if (project) {
        project.status = 'archived';
        project.archivedAt = new Date().toISOString();
        project.updatedAt = new Date().toISOString();
      }
    },
    restoreProject: (state, action: PayloadAction<string>) => {
      const project = state.items.find(p => p.id === action.payload);
      if (project) {
        project.status = 'active';
        project.archivedAt = undefined;
        project.updatedAt = new Date().toISOString();
      }
    },
    addProjectMember: (state, action: PayloadAction<{ projectId: string; member: ProjectMember }>) => {
      const project = state.items.find(p => p.id === action.payload.projectId);
      if (project) {
        const exists = project.members.findIndex(m => m.userId === action.payload.member.userId);
        if (exists === -1) project.members.push(action.payload.member);
      }
    },
    removeProjectMember: (state, action: PayloadAction<{ projectId: string; userId: string }>) => {
      const project = state.items.find(p => p.id === action.payload.projectId);
      if (project) {
        project.members = project.members.filter(m => m.userId !== action.payload.userId);
      }
    },
    updateProjectMemberRole: (state, action: PayloadAction<{ projectId: string; userId: string; role: ProjectMember['role'] }>) => {
      const project = state.items.find(p => p.id === action.payload.projectId);
      if (project) {
        const member = project.members.find(m => m.userId === action.payload.userId);
        if (member) member.role = action.payload.role;
      }
    },
    // Kanban columns
    addKanbanColumn: (state, action: PayloadAction<{ projectId: string; column: KanbanColumn }>) => {
      const project = state.items.find(p => p.id === action.payload.projectId);
      if (project) {
        project.kanbanColumns.push(action.payload.column);
        project.updatedAt = new Date().toISOString();
      }
    },
    updateKanbanColumn: (state, action: PayloadAction<{ projectId: string; columnId: string; updates: Partial<KanbanColumn> }>) => {
      const project = state.items.find(p => p.id === action.payload.projectId);
      if (project) {
        const col = project.kanbanColumns.find(c => c.id === action.payload.columnId);
        if (col) Object.assign(col, action.payload.updates);
        project.updatedAt = new Date().toISOString();
      }
    },
    deleteKanbanColumn: (state, action: PayloadAction<{ projectId: string; columnId: string }>) => {
      const project = state.items.find(p => p.id === action.payload.projectId);
      if (project) {
        project.kanbanColumns = project.kanbanColumns.filter(c => c.id !== action.payload.columnId);
        project.updatedAt = new Date().toISOString();
      }
    },
    reorderKanbanColumns: (state, action: PayloadAction<{ projectId: string; columns: KanbanColumn[] }>) => {
      const project = state.items.find(p => p.id === action.payload.projectId);
      if (project) {
        project.kanbanColumns = action.payload.columns;
        project.updatedAt = new Date().toISOString();
      }
    },
    setProjectView: (state, action: PayloadAction<{ projectId: string; view: 'kanban' | 'list' | 'calendar' | 'activity' }>) => {
      state.currentView[action.payload.projectId] = action.payload.view;
      // Also persist as default
      const project = state.items.find(p => p.id === action.payload.projectId);
      if (project) project.defaultView = action.payload.view;
    },
  },
});

export const {
  setCurrentProject, addProject, updateProject, deleteProject,
  archiveProject, restoreProject,
  addProjectMember, removeProjectMember, updateProjectMemberRole,
  addKanbanColumn, updateKanbanColumn, deleteKanbanColumn, reorderKanbanColumns,
  setProjectView,
} = projectSlice.actions;

export default projectSlice.reducer;
