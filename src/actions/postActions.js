import {FETCH_POSTS, NEW_POST} from './types';

// export function fetchPosts(){
//   return function(dispatch){
//     ...
//   }
// }

// same as above but cleaner

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => dispatch({
        type    : FETCH_POSTS,
        payload : data
      }))
}