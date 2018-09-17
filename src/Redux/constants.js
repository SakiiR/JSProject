const LOGIN_ACTION = "LOGIN_REQUEST";
const REGISTER_ACTION = "REGISTER_REQUEST";
const LOGOUT_ACTION = "LOGOUT_REQUEST";
const START_ERROR_ACTION = "START_ERROR_ACTION";
const END_ERROR_ACTION = "END_ERROR_ACTION";

const actions = {
  LOGIN_ACTION,
  REGISTER_ACTION,
  LOGOUT_ACTION,
  END_ERROR_ACTION,
  START_ERROR_ACTION
};

export const initialState = {
  generalReducer: {
    requestProcessing: false,
    loggedIn: false,
    jwt: null,
    error: null,
  }
};

export default actions;
