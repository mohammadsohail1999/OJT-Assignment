import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actionTypes";


const initialState = {
  isAuthenticated: false,
  user: null
};

// Reducer function
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
        console.log(action)
      return {
        ...state,user: action.payload,
        isAuthenticated: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
