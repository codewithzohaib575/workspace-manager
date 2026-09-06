import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User, UserPreferences } from '@/types';
import { MOCK_USERS } from '@/lib/mockData';

interface AuthState {
  currentUser: User | null;
  users: User[];
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  preferences: UserPreferences;
}

const defaultPreferences: UserPreferences = {
  theme: 'light',
  sidebarCollapsed: false,
  notificationPreferences: {
    assignment: true,
    mentions: true,
    dueDateAlerts: true,
    statusChanges: false,
    comments: true,
  },
  optimisticFailureRate: 0,
  defaultWorkspaceId: 'ws-1',
};

export const authInitialState: AuthState = {
  currentUser: MOCK_USERS[0],
  users: MOCK_USERS,
  isAuthenticated: true,
  isLoading: false,
  error: null,
  preferences: defaultPreferences,
};

const initialState: AuthState = authInitialState;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    switchUser: (state, action: PayloadAction<string>) => {
      const user = state.users.find(u => u.id === action.payload);
      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;
      }
    },
    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload };
        // Also update in users array
        const idx = state.users.findIndex(u => u.id === state.currentUser!.id);
        if (idx >= 0) {
          state.users[idx] = { ...state.users[idx], ...action.payload };
        }
      }
    },
    updatePreferences: (state, action: PayloadAction<Partial<UserPreferences>>) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    updateNotificationPreferences: (state, action: PayloadAction<Partial<UserPreferences['notificationPreferences']>>) => {
      state.preferences.notificationPreferences = {
        ...state.preferences.notificationPreferences,
        ...action.payload,
      };
    },
    clearError: (state) => {
      state.error = null;
    },
    addMockUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export const {
  loginStart, loginSuccess, loginFailure, logout, switchUser,
  updateProfile, updatePreferences, updateNotificationPreferences,
  clearError, addMockUser,
} = authSlice.actions;

// Thunk for login
export const loginThunk = (email: string, password: string) => async (dispatch: import('@reduxjs/toolkit').ThunkDispatch<unknown, unknown, import('@reduxjs/toolkit').AnyAction>) => {
  dispatch(loginStart());
  // Simulate network delay
  await new Promise(r => setTimeout(r, 800));
  const user = MOCK_USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    dispatch(loginFailure('No account found with that email address.'));
    return false;
  }
  if (user.password !== password) {
    dispatch(loginFailure('Incorrect password. Please try again.'));
    return false;
  }
  dispatch(loginSuccess(user));
  return true;
};

export default authSlice.reducer;
