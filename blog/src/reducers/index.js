import { combineReducers } from 'redux';

// return empty array on 1st call
// then state becomes whatever was the prevState
const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};

const usersReducer =  (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      // add record to new state array
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
