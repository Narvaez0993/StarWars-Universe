import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../store/reducers'

const Store = configureStore({
  reducer: rootReducer
});

export default Store;