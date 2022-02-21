import { combineReducers } from 'redux';
import authReducer from '../auth/authSlice';
import bookReducer from '../components/book/bookSlice';
import gameReducer from '../games/gameSlice';
import { apiSlice } from './apiSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  book: bookReducer,
  game: gameReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
