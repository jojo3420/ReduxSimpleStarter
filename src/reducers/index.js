import { combineReducers } from 'redux';
import fetchPostsReducer  from './reducer_fetch_posts';


const rootReducer = combineReducers({
  fetchPostsReducer: fetchPostsReducer
});

export default rootReducer;
