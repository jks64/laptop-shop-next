'use client';
import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../slice/basketSlice';
import filterReducer from '../slice/filterSlice';
// import filterReducer from './slices/filterSlice';
// import wishListReducer from './slices/wishListSlice';
// import myCoursesReducer from './slices/myCoursesSlice';

const store = configureStore({
  reducer: {
    basket: basketReducer,
    filter: filterReducer,
  },
});

export default store;
