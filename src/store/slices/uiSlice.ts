import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Toast, OfflineAction, FilterState, FilterPreset, SortState, Label } from '@/types';
import { MOCK_LABELS } from '@/lib/mockData';

// ─── UI Slice ─────────────────────────────────────────────────────────────────
interface UIState {
  commandPaletteOpen: boolean;
  searchOpen: boolean;
  sidebarCollapsed: boolean;
  activeModal: string | null;
  activeTaskId: string | null;
  toasts: Toast[];
  isOffline: boolean;
  offlineQueue: OfflineAction[];
  isSyncing: boolean;
  theme: 'light' | 'dark';
}

export const uiInitialState: UIState = {
  commandPaletteOpen: false,
  searchOpen: false,
  sidebarCollapsed: false,
  activeModal: null,
  activeTaskId: null,
  toasts: [],
  isOffline: false,
  offlineQueue: [],
  isSyncing: false,
  theme: 'light',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    toggleCommandPalette: (state) => { state.commandPaletteOpen = !state.commandPaletteOpen; },
    openCommandPalette: (state) => { state.commandPaletteOpen = true; },
    closeCommandPalette: (state) => { state.commandPaletteOpen = false; },
    toggleSearch: (state) => { state.searchOpen = !state.searchOpen; },
    openSearch: (state) => { state.searchOpen = true; },
    closeSearch: (state) => { state.searchOpen = false; },
    toggleSidebar: (state) => { state.sidebarCollapsed = !state.sidebarCollapsed; },
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => { state.sidebarCollapsed = action.payload; },
    openModal: (state, action: PayloadAction<string>) => { state.activeModal = action.payload; },
    closeModal: (state) => { state.activeModal = null; },
    openTaskDetail: (state, action: PayloadAction<string>) => { state.activeTaskId = action.payload; },
    closeTaskDetail: (state) => { state.activeTaskId = null; },
    addToast: (state, action: PayloadAction<Toast>) => {
      state.toasts.push(action.payload);
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter(t => t.id !== action.payload);
    },
    clearToasts: (state) => { state.toasts = []; },
    setOffline: (state, action: PayloadAction<boolean>) => { state.isOffline = action.payload; },
    addOfflineAction: (state, action: PayloadAction<OfflineAction>) => {
      state.offlineQueue.push(action.payload);
    },
    removeOfflineAction: (state, action: PayloadAction<string>) => {
      state.offlineQueue = state.offlineQueue.filter(a => a.id !== action.payload);
    },
    clearOfflineQueue: (state) => { state.offlineQueue = []; },
    setSyncing: (state, action: PayloadAction<boolean>) => { state.isSyncing = action.payload; },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => { state.theme = action.payload; },
    toggleTheme: (state) => { state.theme = state.theme === 'light' ? 'dark' : 'light'; },
  },
});

export const {
  toggleCommandPalette, openCommandPalette, closeCommandPalette,
  toggleSearch, openSearch, closeSearch,
  toggleSidebar, setSidebarCollapsed,
  openModal, closeModal,
  openTaskDetail, closeTaskDetail,
  addToast, removeToast, clearToasts,
  setOffline, addOfflineAction, removeOfflineAction, clearOfflineQueue, setSyncing,
  setTheme, toggleTheme,
} = uiSlice.actions;

// ─── Filter Slice ─────────────────────────────────────────────────────────────
interface FilterSliceState {
  activeFilters: FilterState;
  sort: SortState;
  groupBy: 'status' | 'priority' | 'assignee' | 'label' | null;
  savedPresets: FilterPreset[];
  activePresetId: string | null;
  labels: Label[];
}

const filterInitialState: FilterSliceState = {
  activeFilters: {
    assigneeIds: [],
    labelIds: [],
    priorities: [],
    statuses: [],
  },
  sort: { field: 'createdAt', direction: 'desc' },
  groupBy: null,
  savedPresets: [],
  activePresetId: null,
  labels: MOCK_LABELS,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Partial<FilterState>>) => {
      state.activeFilters = { ...state.activeFilters, ...action.payload };
      state.activePresetId = null;
    },
    clearFilters: (state) => {
      state.activeFilters = { assigneeIds: [], labelIds: [], priorities: [], statuses: [] };
      state.activePresetId = null;
    },
    setSort: (state, action: PayloadAction<SortState>) => { state.sort = action.payload; },
    setGroupBy: (state, action: PayloadAction<FilterSliceState['groupBy']>) => { state.groupBy = action.payload; },
    savePreset: (state, action: PayloadAction<FilterPreset>) => {
      state.savedPresets.push(action.payload);
    },
    updatePreset: (state, action: PayloadAction<{ id: string; updates: Partial<FilterPreset> }>) => {
      const idx = state.savedPresets.findIndex(p => p.id === action.payload.id);
      if (idx >= 0) Object.assign(state.savedPresets[idx], action.payload.updates);
    },
    deletePreset: (state, action: PayloadAction<string>) => {
      state.savedPresets = state.savedPresets.filter(p => p.id !== action.payload);
      if (state.activePresetId === action.payload) state.activePresetId = null;
    },
    applyPreset: (state, action: PayloadAction<string>) => {
      const preset = state.savedPresets.find(p => p.id === action.payload);
      if (preset) {
        state.activeFilters = preset.filters;
        state.activePresetId = action.payload;
      }
    },
    addLabel: (state, action: PayloadAction<Label>) => { state.labels.push(action.payload); },
    updateLabel: (state, action: PayloadAction<{ id: string; updates: Partial<Label> }>) => {
      const idx = state.labels.findIndex(l => l.id === action.payload.id);
      if (idx >= 0) Object.assign(state.labels[idx], action.payload.updates);
    },
    deleteLabel: (state, action: PayloadAction<string>) => {
      state.labels = state.labels.filter(l => l.id !== action.payload);
    },
  },
});

export const {
  setFilter, clearFilters, setSort, setGroupBy,
  savePreset, updatePreset, deletePreset, applyPreset,
  addLabel, updateLabel, deleteLabel,
} = filterSlice.actions;

// ─── Undo/Redo Slice ──────────────────────────────────────────────────────────
interface UndoRedoState {
  past: Array<{ id: string; type: string; description: string; payload: unknown }>;
  future: Array<{ id: string; type: string; description: string; payload: unknown }>;
}

const undoRedoInitialState: UndoRedoState = { past: [], future: [] };

export const undoRedoSlice = createSlice({
  name: 'undoRedo',
  initialState: undoRedoInitialState,
  reducers: {
    pushToHistory: (state, action: PayloadAction<{ id: string; type: string; description: string; payload: unknown }>) => {
      state.past.push(action.payload);
      state.future = [];
      if (state.past.length > 50) state.past = state.past.slice(-50);
    },
    undo: (state) => {
      if (state.past.length > 0) {
        const last = state.past.pop()!;
        state.future.unshift(last);
      }
    },
    redo: (state) => {
      if (state.future.length > 0) {
        const next = state.future.shift()!;
        state.past.push(next);
      }
    },
    clearHistory: (state) => {
      state.past = [];
      state.future = [];
    },
  },
});

export const { pushToHistory, undo, redo, clearHistory } = undoRedoSlice.actions;

export const uiReducer = uiSlice.reducer;
export const filterReducer = filterSlice.reducer;
export const undoRedoReducer = undoRedoSlice.reducer;
