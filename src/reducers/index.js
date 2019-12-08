import { combineReducers } from 'redux';
import reducerBooks from './reducer_books';
import reducerSelectBook from './reducer_select_book';



const rootReducer = combineReducers({
  books: reducerBooks,
  selectBook: reducerSelectBook,
});
export default rootReducer;

