import redirect from "../utils/redirect";
import dispatchError from "../utils/error";
import actions from "./constants";

/**
 * Authenticate a user.
 *
 * @param {Object{username, password}} user The user to login
 */
export const login = user => ({
  type: actions.LOGIN_ACTION,
  __http: true,
  __method: "login",
  __service: "auth",
  onSuccess: async (store, result) => {
    dispatchError(store, result.message, 5000);
    redirect("/rooms", 1000);
  },
  onError: async (store, error) => {
    dispatchError(store, error.response.data.message, 5000);
  },
  params: [user]
});

/**
 * Register a new user.
 *
 * @param {Object{username, password}} user The user to register
 */
export const register = user => ({
  type: actions.REGISTER_ACTION,
  __http: true,
  __method: "register",
  __service: "auth",
  params: [user],
  onSuccess: async (store, result) => {
    redirect("/login", 1000);
    dispatchError(store, result.message, 5000);
  },
  onError: async (store, error) => {
    dispatchError(store, error.response.data.message, 5000);
  }
});

export const roomCreation = room => ({
  type: actions.ROOM_CREATION_ACTION,
  __http: true,
  __method: "create",
  __service: "room",
  params: [room],
  onSuccess: async (store, result) => {},
  onError: async (store, error) => {
    dispatchError(store, error.response.data.message, 5000);
  }
});

/**
 * Logout the current user
 */
export const logout = () => ({
  type: actions.LOGOUT_ACTION,
  __http: false,
  onEnd: async store => {
    redirect("/", 1000);
  }
});

/**
 * Shows an error notification
 *
 * @param {String} message The error message to display
 */
export const errorStart = message => ({
  type: actions.START_ERROR_ACTION,
  message,
  __http: false
});

/**
 * Hides an error notification
 *
 * @param {String} message The error message to display
 */
export const errorEnd = () => ({
  type: actions.END_ERROR_ACTION,
  __http: false
});
