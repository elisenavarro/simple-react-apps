const INITIAL_STATE = {
  isSignedIn: null, 
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      // spread syntax to modify prop in state obj
      return {...state, isSignedIn: true, userId: action.payload };
    case 'SIGN_OUT':
      return {...state, isSignedIn: false, userId: null};
    default: 
      return state;
  }
};