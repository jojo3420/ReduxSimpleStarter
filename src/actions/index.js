import axios from 'axios';


export function fetchUsers() {
  const response = axios.get('http://jsonplaceholder.typicode.com/users');

  // Vanilla redux expects us to return an Action
  // like this
  return {
    type: 'FETCH_PROFILE',
    payload: response,
  }

  // Redux Thunk
  // return (dispatch) => {
  //   //   response.then(({data}) => {
  //   //     console.log('data:', data);
  //   //     dispatch({type: 'FETCH_PROFILE', payload: data})
  //   //   });
  //   // }


}
