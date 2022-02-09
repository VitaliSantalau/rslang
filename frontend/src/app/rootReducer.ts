import { combineReducers } from 'redux';
import bookReducer from '../components/book/bookSlice';
import authReducer from '../auth/authSlice';
import { apiSlice } from './apiSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  book: bookReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
