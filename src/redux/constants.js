const LOGIN_ACTION = "LOGIN_REQUEST";
const REGISTER_ACTION = "REGISTER_REQUEST";
const LOGOUT_ACTION = "LOGOUT_REQUEST";
const START_ERROR_ACTION = "START_ERROR_ACTION";
const END_ERROR_ACTION = "END_ERROR_ACTION";

/**
 * Rooms Actions
 */
const ROOM_CREATION_ACTION = "ROOM_CREATION_REQUEST";
const ROOM_LIST_ACTION = "ROOM_LIST_REQUEST";
const ROOM_REMOVE_ACTION = "ROOM_REMOVE_REQUEST";

/**
 * Messages Actions
 */
const MESSAGE_LIST_ACTION = "MESSAGE_LIST_REQUEST";

const actions = {
  LOGIN_ACTION,
  REGISTER_ACTION,
  LOGOUT_ACTION,
  ROOM_CREATION_ACTION,
  ROOM_LIST_ACTION,
  ROOM_REMOVE_ACTION,
  MESSAGE_LIST_ACTION,
  END_ERROR_ACTION,
  START_ERROR_ACTION
};

export const initialState = {
  generalReducer: {
    requestProcessing: false,
    loggedIn: false,
    jwt: null,
    error: null
  },
  roomReducer: [],
  messageReducer: []
};

export default actions;
