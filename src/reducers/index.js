import { combineReducers } from 'redux';
import fetchPostsReducer  from './reducer_fetch_posts';

// redux-from reducer 추가
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: fetchPostsReducer,
  form: formReducer, // redux-form
});

export default rootReducer;
