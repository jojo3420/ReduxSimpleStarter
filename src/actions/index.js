import axios from "axios";

export const REGISTRATION_POSTS = 'REGISTRATION_POSTS';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_INDEX = 'FETCH_POSTS_INDEX';
export const DELETE_POSTS = 'DELETE_POSTS';


const ROOT_URL = `http://reduxblog.herokuapp.com/api`;
const API_KEY = `fsaftwts45-3#r32q`;

export function fetchPostsIndex() {
  const url = `${ROOT_URL}/posts?key=${API_KEY}`;
  const response = axios.get(url);

  return {
    type: FETCH_POSTS_INDEX,
    payload: response
  }
}


export function fetchPostsById(id) {
  if (!id) throw new Error('fetchPostsById() id is undefined.');
  const url = `${ROOT_URL}/posts/${id}?key=${API_KEY}`;
  const response = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: response
  }
}

export function registrationPosts(props) {
  // console.log('registrationPosts() props:', props);
  const url = `${ROOT_URL}/posts?key=${API_KEY}`;
  const response = axios.post(url, props);

  return {
    type: REGISTRATION_POSTS,
    payload: response,
  }
}

export function deletePostsBy(id) {
  const url = `${ROOT_URL}/posts/${id}?pey=${API_KEY}`;
  const response = axios.delete(url);

  return {
    type: DELETE_POSTS,
    payload: response,
  }
}
