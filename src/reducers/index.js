import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// 최상위 리듀서로 개별 리듀서들을 가지고 있다.
const rootReducer = combineReducers({
  books: BooksReducer, // BooksReducer()리듀서는 배열을 리턴하고
  // "books" key로  전역 어플리케이션 스테이트를 등록함

  activeBook: ActiveBook,
});

export default rootReducer;
