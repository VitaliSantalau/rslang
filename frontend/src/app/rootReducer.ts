import { combineReducers } from 'redux';
import bookReducer from '../components/book/bookSlice';

const rootReducer = combineReducers({
  book: bookReducer,
});

export default rootReducer;
