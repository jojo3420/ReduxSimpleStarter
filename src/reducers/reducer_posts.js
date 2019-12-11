import { FETCH_POSTS, FETCH_POSTS_INDEX } from "../actions/index";
import { DELETE_POSTS, REGISTRATION_POSTS } from "../actions/index";

const INITIAL_STATE = { postsList: [], post: null };


export function postsReducer(state = INITIAL_STATE, action) {
  // console.log(action);
  switch (action.type) {
    case FETCH_POSTS_INDEX:
      return { ...state, postsList: action.payload.data};
    default:
      return state;
  }
}

