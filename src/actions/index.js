import axios from 'axios';

import { FETCH_POSTS } from '../helpers/constant';
import { DELETE_POST } from '../helpers/constant';
import { ADD_NEW_POST } from '../helpers/constant'
import { ROOT_API_URL } from '../helpers/constant';
import { API_KEY } from '../helpers/constant';

export function fetchPostsActionCreator() {
  const url =  `${ROOT_API_URL}?key=${API_KEY}`;
  const promise = axios(url);

  return {
    type: FETCH_POSTS,
    payload: promise,
  }
}
