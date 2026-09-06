import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Activity } from '@/types';
import { MOCK_ACTIVITY } from '@/lib/mockData';

interface ActivityState {
  items: Activity[];
}

const initialState: ActivityState = {
  items: MOCK_ACTIVITY,
};

export const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    addActivity: (state, action: PayloadAction<Activity>) => {
      state.items.unshift(action.payload);
      // Keep only 500 most recent
      if (state.items.length > 500) state.items = state.items.slice(0, 500);
    },
    setActivity: (state, action: PayloadAction<Activity[]>) => {
      state.items = action.payload;
    },
    clearActivity: (state) => {
      state.items = [];
    },
  },
});

export const { addActivity, setActivity, clearActivity } = activitySlice.actions;
export default activitySlice.reducer;
