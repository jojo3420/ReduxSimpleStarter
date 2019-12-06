import { combineReducers } from 'redux';
import BookListReducer from './reduce_book_list';


const rootReducer = combineReducers({
  books: BookListReducer,

});

export default rootReducer;

