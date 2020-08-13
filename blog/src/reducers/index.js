import { combineReducers } from 'redux';

const postReducer = (state = [], action) => {
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
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
