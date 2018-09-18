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
  params: [user]
});

/**
 * Logout the current user
 */
export const logout = () => ({
  type: actions.LOGOUT_ACTION,
  __http: false
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
