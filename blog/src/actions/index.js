import jsonPlaceholder from '../apis/jsonPlaceholder';

// define function to return function
export const fetchPosts = async () => async dispatch => {
    const res = await jsonPlaceholder.get('/posts');

    dispatchEvent({ type: 'FETCH_POSTS', payload: res })
  };
