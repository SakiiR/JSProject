const LOGIN_ACTION = "LOGIN_REQUEST";
const REGISTER_ACTION = "REGISTER_REQUEST";
const LOGOUT_ACTION = "LOGOUT_REQUEST";

const actions = {
  LOGIN_ACTION,
  REGISTER_ACTION,
  LOGOUT_ACTION
};

export const initialState = {
  generalReducer: {
    requestProcessing: false,
    loggedIn: false
  }
};

export default actions;
