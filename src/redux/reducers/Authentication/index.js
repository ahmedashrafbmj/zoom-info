import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userDetails: {},
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    handleLogin: (state, action) => {
      state.isLoggedIn = !state.isLoggedIn;
      state.userDetails = action.payload;
    },
  },
});

export const { handleLogin } = authenticationSlice.actions;

export default authenticationSlice.reducer;
