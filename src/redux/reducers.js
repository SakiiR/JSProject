import { combineReducers } from "redux";

const generalReducer = (state = {}, action) => {
  switch (action.type.split("_").slice(-1)[0]) {
    case "PENDING":
      state = { ...state, requestProcessing: true };
      break;
    case "SUCCESS":
      state = { ...state, requestProcessing: false };
      break;
    case "FAILURE":
      state = { ...state, requestProcessing: false };
      break;
    default:
      state = { ...state };
  }

  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, loggedIn: true, jwt: action.result.data.user.token };
    case "LOGOUT_REQUEST":
      return {
        ...state,
        loggedIn: false,
        jwt: null
      };
    case "START_ERROR_ACTION":
      return { ...state, error: action.message };
    case "END_ERROR_ACTION":
      return { ...state, error: null };
    default:
      return state;
  }
};

const roomReducer = (state = {}, action) => {
  switch (action.type) {
    case "ROOM_CREATION_SUCCESS": {
      console.log("Room to add: ", action.result.data);
      return [...state, action.result.data];
    }
    default:
      return state;
  }
};

const liveChat = combineReducers({
  generalReducer,
  roomReducer
});

export default liveChat;
