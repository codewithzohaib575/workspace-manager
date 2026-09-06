import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Notification } from '@/types';
import { MOCK_NOTIFICATIONS } from '@/lib/mockData';

interface NotificationState {
  items: Notification[];
  unreadCount: number;
}

const getUnread = (items: Notification[]) => items.filter(n => !n.read).length;

const initialState: NotificationState = {
  items: MOCK_NOTIFICATIONS,
  unreadCount: getUnread(MOCK_NOTIFICATIONS),
};

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.items.unshift(action.payload);
      state.unreadCount = getUnread(state.items);
    },
    markAsRead: (state, action: PayloadAction<string>) => {
      const notif = state.items.find(n => n.id === action.payload);
      if (notif) notif.read = true;
      state.unreadCount = getUnread(state.items);
    },
    markAllAsRead: (state) => {
      state.items.forEach(n => { n.read = true; });
      state.unreadCount = 0;
    },
    deleteNotification: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(n => n.id !== action.payload);
      state.unreadCount = getUnread(state.items);
    },
    clearAllNotifications: (state) => {
      state.items = [];
      state.unreadCount = 0;
    },
    setNotifications: (state, action: PayloadAction<Notification[]>) => {
      state.items = action.payload;
      state.unreadCount = getUnread(state.items);
    },
  },
});

export const {
  addNotification, markAsRead, markAllAsRead,
  deleteNotification, clearAllNotifications, setNotifications,
} = notificationSlice.actions;

export default notificationSlice.reducer;
