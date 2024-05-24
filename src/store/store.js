// store.js
import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './inputTextSlice';

const store = configureStore({
  reducer: {
    inputText: inputReducer,
  },
});

export default store;
