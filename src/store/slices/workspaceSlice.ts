import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Workspace, WorkspaceMember } from '@/types';
import { MOCK_WORKSPACES } from '@/lib/mockData';

interface WorkspaceState {
  items: Workspace[];
  currentWorkspaceId: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: WorkspaceState = {
  items: MOCK_WORKSPACES,
  currentWorkspaceId: 'ws-1',
  isLoading: false,
  error: null,
};

export const workspaceSlice = createSlice({
  name: 'workspaces',
  initialState,
  reducers: {
    setCurrentWorkspace: (state, action: PayloadAction<string>) => {
      state.currentWorkspaceId = action.payload;
    },
    addWorkspace: (state, action: PayloadAction<Workspace>) => {
      state.items.push(action.payload);
      state.currentWorkspaceId = action.payload.id;
    },
    updateWorkspace: (state, action: PayloadAction<{ id: string; updates: Partial<Workspace> }>) => {
      const idx = state.items.findIndex(w => w.id === action.payload.id);
      if (idx >= 0) {
        state.items[idx] = { ...state.items[idx], ...action.payload.updates, updatedAt: new Date().toISOString() };
      }
    },
    deleteWorkspace: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(w => w.id !== action.payload);
      if (state.currentWorkspaceId === action.payload) {
        state.currentWorkspaceId = state.items[0]?.id ?? null;
      }
    },
    addMember: (state, action: PayloadAction<{ workspaceId: string; member: WorkspaceMember }>) => {
      const workspace = state.items.find(w => w.id === action.payload.workspaceId);
      if (workspace) {
        const existing = workspace.members.findIndex(m => m.userId === action.payload.member.userId);
        if (existing === -1) {
          workspace.members.push(action.payload.member);
        }
      }
    },
    removeMember: (state, action: PayloadAction<{ workspaceId: string; userId: string }>) => {
      const workspace = state.items.find(w => w.id === action.payload.workspaceId);
      if (workspace) {
        workspace.members = workspace.members.filter(m => m.userId !== action.payload.userId);
      }
    },
    updateMemberRole: (state, action: PayloadAction<{ workspaceId: string; userId: string; role: WorkspaceMember['role'] }>) => {
      const workspace = state.items.find(w => w.id === action.payload.workspaceId);
      if (workspace) {
        const member = workspace.members.find(m => m.userId === action.payload.userId);
        if (member) member.role = action.payload.role;
      }
    },
    updateWorkspaceSettings: (state, action: PayloadAction<{ workspaceId: string; settings: Partial<Workspace['settings']> }>) => {
      const workspace = state.items.find(w => w.id === action.payload.workspaceId);
      if (workspace) {
        workspace.settings = { ...workspace.settings, ...action.payload.settings };
        workspace.updatedAt = new Date().toISOString();
      }
    },
  },
});

export const {
  setCurrentWorkspace, addWorkspace, updateWorkspace, deleteWorkspace,
  addMember, removeMember, updateMemberRole, updateWorkspaceSettings,
} = workspaceSlice.actions;

export default workspaceSlice.reducer;
