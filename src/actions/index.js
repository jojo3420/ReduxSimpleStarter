

export function selectBookActionCreator (book) {
  console.log('book select action:', book);
  return {
    type: 'SELECTED_BOOK',
    payload: book,
  }
}

 // selectBookActionCreator;

