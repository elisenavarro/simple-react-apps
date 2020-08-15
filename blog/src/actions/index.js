import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Action Creator
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // iterate over post list and find unique user id
  // chain on multiple methods passing results as arguments
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value(); // call to execute the chain
};

// Action Creator, function inside function
export const fetchPosts = () => async dispatch => {
    const res = await jsonPlaceholder.get('/posts');

    dispatch ({ type: 'FETCH_POSTS', payload: res.data })
  };

//  Action Creator, fetch single user
export const fetchUser = id => async dispatch => {
  const res = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: res.data });
};
