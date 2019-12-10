import { FETCH_POSTS, FETCH_DETAIL_POST} from "../helpers/constant.js";

const INIT_STATE = { postsList: [], selectedPosts: null};

export default function fetchPostsReducer(state = INIT_STATE, action) {
  // console.log('action:', action);
  switch (action.type) {
    case FETCH_DETAIL_POST:
      return {...state, selectedPosts:action.payload.data};
    case FETCH_POSTS:
      return {...state, postsList: action.payload.data}; // postsList 덮혀쓰기.
    default:
      return state;
  }
}
