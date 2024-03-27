import { LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_SUCCESS } from "../actionTypes";

export const loginSuccess = (email) => {
  return { type: LOGIN_SUCCESS, payload: email };
};

export const logoutSuccess = () => {
  return { type: LOGOUT_SUCCESS };
};

export const signupSuccess = (email) => {
    return {
      type: SIGNUP_SUCCESS,
      payload: email,
    };
  };
