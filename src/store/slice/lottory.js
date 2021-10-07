import { createSlice } from '@reduxjs/toolkit';
import usersJson from '../users.json';

export const lottorySlice = createSlice({
  name: 'lottory',
  initialState: {
    participants: usersJson,
    ms: undefined,
  },
  reducers: {
    setMs: (state, action) => {
      state.ms = action.payload;
    },
    decreaseMs: (state) => {
      state.ms = state.ms - 1000;
    },
  },
});

// selectors
export const selectParticipants = (state) => state.lottory.participants;
export const selectMs = (state) => state.lottory.ms;

// actions
export const { setMs, decreaseMs } = lottorySlice.actions;

export default lottorySlice.reducer;
