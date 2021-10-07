import { createSlice } from '@reduxjs/toolkit';

export const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    openMenu: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.openMenu = !state.openMenu;
    },
  },
});

// selectors
export const selectOpenMenu = (state) => state.layout.openMenu;

// actions
export const { toggleMenu } = layoutSlice.actions;

export default layoutSlice.reducer;
