import { configureStore } from "@reduxjs/toolkit";
import authenticationReduce from './reducers/Authentication'
import  collapseButtonReduce from './reducers/collapseButton'
export const store = configureStore({
  reducer: {
    authentication: authenticationReduce,
    collapseButton: collapseButtonReduce
  },
});


