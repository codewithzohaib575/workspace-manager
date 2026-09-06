'use client';
import { configureStore, Middleware } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import authReducer, { authInitialState } from './slices/authSlice';
import workspaceReducer from './slices/workspaceSlice';
import projectReducer from './slices/projectSlice';
import taskReducer from './slices/taskSlice';
import notificationReducer from './slices/notificationSlice';
import activityReducer from './slices/activitySlice';
import { uiReducer, filterReducer, undoRedoReducer, uiInitialState } from './slices/uiSlice';
import { saveStateToLocalStorage, loadStateFromLocalStorage } from '@/lib/persistence';

// Load persisted state
const loadedState = typeof window !== 'undefined' ? loadStateFromLocalStorage() : undefined;

// Debounce helper
function debounce<T extends (...args: Parameters<T>) => void>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  }) as T;
}

// Persistence middleware
const persistenceMiddleware: Middleware = store => next => action => {
  const result = next(action);
  // Debounced save to avoid excessive writes
  debouncedSave(store.getState());
  return result;
};

const debouncedSave = debounce((state: unknown) => {
  // Only persist essential parts (exclude transient UI)
  const s = state as ReturnType<typeof store.getState>;
  const toPersist = {
    auth: {
      currentUser: s.auth.currentUser,
      users: s.auth.users,
      isAuthenticated: s.auth.isAuthenticated,
      preferences: s.auth.preferences,
    },
    workspaces: { items: s.workspaces.items, currentWorkspaceId: s.workspaces.currentWorkspaceId },
    projects: { items: s.projects.items, currentProjectId: s.projects.currentProjectId, currentView: s.projects.currentView },
    tasks: { items: s.tasks.items },
    notifications: { items: s.notifications.items },
    activity: { items: s.activity.items.slice(0, 100) },
    filters: { savedPresets: s.filters.savedPresets, sort: s.filters.sort, labels: s.filters.labels },
    ui: { sidebarCollapsed: s.ui.sidebarCollapsed, theme: s.ui.theme },
  };
  saveStateToLocalStorage(toPersist);
}, 500);

const rootReducer = {
  auth: authReducer,
  workspaces: workspaceReducer,
  projects: projectReducer,
  tasks: taskReducer,
  notifications: notificationReducer,
  activity: activityReducer,
  ui: uiReducer,
  filters: filterReducer,
  undoRedo: undoRedoReducer,
};

export type RootState = {
  [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>;
};

// Merge loaded state with defaults
function mergeState(loaded: unknown): Partial<RootState> | undefined {
  if (!loaded || typeof loaded !== 'object') return undefined;
  const l = loaded as Record<string, any>;
  return {
    ...l,
    auth: {
      ...authInitialState,
      ...(l.auth || {}),
      users: Array.isArray(l.auth?.users) && l.auth.users.length > 0 ? l.auth.users : authInitialState.users,
    },
    workspaces: {
      ...(l.workspaces || {}),
      items: Array.isArray(l.workspaces?.items) ? l.workspaces.items : [],
    },
    projects: {
      ...(l.projects || {}),
      items: Array.isArray(l.projects?.items) ? l.projects.items : [],
    },
    tasks: {
      ...(l.tasks || {}),
      items: Array.isArray(l.tasks?.items) ? l.tasks.items : [],
    },
    notifications: {
      ...(l.notifications || {}),
      items: Array.isArray(l.notifications?.items) ? l.notifications.items : [],
      unreadCount: Array.isArray(l.notifications?.items) ? l.notifications.items.filter((item: { read?: boolean }) => !item.read).length : 0,
    },
    activity: {
      ...(l.activity || {}),
      items: Array.isArray(l.activity?.items) ? l.activity.items : [],
    },
    ui: {
      ...uiInitialState,
      ...(l.ui || {}),
      toasts: Array.isArray(l.ui?.toasts) ? l.ui.toasts : [],
      offlineQueue: Array.isArray(l.ui?.offlineQueue) ? l.ui.offlineQueue : [],
    },
  } as Partial<RootState>;
}

const preloadedState = mergeState(loadedState);

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: preloadedState as Parameters<typeof configureStore>[0]['preloadedState'],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(persistenceMiddleware),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
