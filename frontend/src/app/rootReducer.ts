import { combineReducers } from 'redux';
import bookReducer from '../components/book/bookSlice';
import { apiSlice } from './apiSlice';

const rootReducer = combineReducers({
  book: bookReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
