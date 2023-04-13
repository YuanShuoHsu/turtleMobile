import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  value: boolean;
}

const initialState: SidebarState = {
  value: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.value = true;
    },
    hideSidebar: (state) => {
      state.value = false;
    },
  },
});

export const { showSidebar, hideSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
