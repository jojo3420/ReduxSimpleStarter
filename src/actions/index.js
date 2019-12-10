import axios from 'axios';
import { FETCH_POSTS, FETCH_DETAIL_POSTS, DELETE_POSTS, ADD_NEW_POSTS } from '../helpers/constant';

import { ROOT_API_URL } from '../helpers/constant';
import { API_KEY } from '../helpers/constant';
import DetailPosts from "../containers/detail_posts";


// fetch posts action creators
export function fetchPostsActionCreator() {
  const url =  `${ROOT_API_URL}/posts?key=${API_KEY}`;
  const response = axios(url);

  return {
    type: FETCH_POSTS,
    payload: response,
  }
}

// create new post action creators
export function createNewPost(props, callback) {
  const url = `${ROOT_API_URL}/posts?key=${API_KEY}`;
  const response =
    axios
      .post(url, props)
      .then(()=> callback());

  return {
    type: ADD_NEW_POSTS,
    payload: response,
  }
}

export function fetchDetailPosts(id) {
  if (!id) throw new Error('fetchDetailPosts() => id is null or undefined.');

  const url = `${ROOT_API_URL}/posts/${id}?key=${API_KEY}`;
  const response = axios(url);

  return {
    type: FETCH_DETAIL_POSTS,
    payload: response,
  }
}

export function deletePosts(id) {
  if (!id) throw new Error('deletePosts() => id is null or undefined.');

  const url = `${ROOT_API_URL}/posts/${id}?key=${API_KEY}`;
  const response = axios.delete(url);

  return {
    type: DELETE_POSTS,
    payload: response,
  }
}
