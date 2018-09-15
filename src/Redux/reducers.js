import { combineReducers } from "redux";

export const defaultState = {
  loggedIn: false,
  requestProcessing: false
};

const generalReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return { ...state, requestProcessing: true };
    case "LOGIN_SUCCESS":
      return { ...state, requestProcessing: false, loggedIn: true };
    case "LOGIN_FAILURE":
      return { ...state, requestProcessing: false };
    case "REGISTER_PENDING":
      return { ...state, requestProcessing: true };
    case "REGISTER_SUCCESS":
      return { ...state, requestProcessing: false };
    case "REGISTER_FAILURE":
      return { ...state, requestProcessing: false };
    case "LOGOUT_PENDING":
      return { ...state, requestProcessing: true };
    case "LOGOUT_SUCCESS":
      return { ...state, requestProcessing: false, loggedIn: false };
    case "LOGOUT_FAILURE":
      return { ...state, requestProcessing: false };
    default:
      return state;
  }
};

const liveChat = combineReducers({
  generalReducer
});

export default liveChat;
