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

