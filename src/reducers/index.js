import { combineReducers } from 'redux';
import BookListReducer from './reduce_book_list';
import ActiveBook from './reduce_active_book';


const rootReducer = combineReducers({
  books: BookListReducer,
  activeBook: ActiveBook,
});

export default rootReducer;

