import { INIT_STATE, FETCH_POSTS} from "../helpers/constant.js";

export default function fetchPostsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {...state, postsList:action.payload}; // postsList 덮혀쓰기.
    default:
      return state;
  }
}
