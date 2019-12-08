// Action creators

export function selectBookActionCreator(book) {
  return {
    type: 'SELECTED_BOOK',
    payload: book
  }
}

