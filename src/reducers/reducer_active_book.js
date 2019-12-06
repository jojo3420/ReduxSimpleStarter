

// state argument is not application state. only the state
// this reducer is responsible for
export default function (state = null /*스테이트는 undefined X */, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
