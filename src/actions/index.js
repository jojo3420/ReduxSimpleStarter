
// selectBook is an ActionCreator, it needs to return action object,
// an object with a type property
// this function is just pojo
export function onSelectBook(book) {
  // console.log('A book has been selected.', book.title);

  // 액션 객체을 리턴
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
