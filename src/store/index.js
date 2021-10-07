import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './slice/layout';
import lottoryReducer from './slice/lottory';

export default configureStore({
  reducer: {
    layout: layoutReducer,
    lottory: lottoryReducer,
  },
});
