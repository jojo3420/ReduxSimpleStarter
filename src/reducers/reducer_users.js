

export function usersReducer(state = {userList: []}, action) {
  // console.log(action);
  switch (action.type) {
    case "FETCH_PROFILE":
      return { ...state, userList: [...action.payload.data]};
    default:
      return state;
  }
  return state;
}
