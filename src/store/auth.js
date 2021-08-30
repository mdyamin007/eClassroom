const SIGNED_IN = "signedIn";
const SIGNED_OUT = "signedOut";

export const signedIn = (email, userType) => ({
  type: SIGNED_IN,
  payload: {
    email,
    userType,
  },
});

export const signedOut = () => ({
    type: SIGNED_OUT
})

const authReducer = (state = {}, action) => {
  if (action.type === SIGNED_IN) {
    return {
        ...state,
        email: action.payload.email,
        userType: action.payload.userType
    }
  }
  else if(action.type === SIGNED_OUT) {
    return {};
  } else {
    return state;
  }
};

export default authReducer;
