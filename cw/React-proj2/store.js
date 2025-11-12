// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './FormSlice';

export const store = configureStore({
  reducer: {
    loginForm: formReducer,
  },
});
export default store;
