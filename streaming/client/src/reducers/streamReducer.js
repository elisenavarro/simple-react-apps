import _ from 'lodash';

import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  UPDATE_STREAM
} from '../actions/types';

export default ( state = {}, action ) => {
  switch (action.type) {
    case FETCH_STREAMS:
      // create new obj, return object from mapKeys
      // take out all KVP and add then to the new obj
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      // returns new obj, [key]: value
      return {...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload };
    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      // omit from lodash, creates new obj
      return _.omit(state, action.payload);
    default: 
      return state;
  }
};