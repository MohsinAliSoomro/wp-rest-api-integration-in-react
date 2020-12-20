import { configureStore } from '@reduxjs/toolkit';
import getDataReducer from '../features/getPost/getDataSlice';
export default configureStore({
  reducer: {
    getData: getDataReducer,
  },
});
