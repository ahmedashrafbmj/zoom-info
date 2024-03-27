import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
 
};

export const collapseButtonSlice = createSlice({
  name: "collapseButton",
  initialState,
  reducers: {
    handleCollapseButton: (state, action) => {
      state.isVisible = action.payload;
    },

    UpdateCollapseButton: (state, action) => {
        state.isVisible = action.payload;
      },
  },                                                                                                            
});

export const { handleCollapseButton ,UpdateCollapseButton} = collapseButtonSlice.actions;

export default collapseButtonSlice.reducer;
