import { FETCH_POSTS, FETCH_POSTS_INDEX } from "../actions/index";
import { DELETE_POSTS, REGISTRATION_POSTS } from "../actions/index";

const INITIAL_STATE = { postsList: [], posts: null };


export function postsReducer(state = INITIAL_STATE, action) {
  // console.log('postsReducer() action:', action);
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload.data};
    case FETCH_POSTS_INDEX:
      return { ...state, postsList: action.payload.data};
    default:
      return state;
  }
}

