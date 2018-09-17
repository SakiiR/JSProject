import actions from './constants';

/**
 * Authenticate a user.
 * 
 * @param {Object{username, password}} user The user to login
 */
export const login = (user) => {
	return {
		type: actions.LOGIN_ACTION,
		__http: true,
		__method: 'login',
		__service: 'auth',
		params: [ user ]
	};
};

/**
 * Register a new user.
 * 
 * @param {Object{username, password}} user The user to register
 */
export const register = (user) => {
	return {
		type: actions.REGISTER_ACTION,
		__http: true,
		__method: 'register',
		__service: 'auth',
		params: [ user ]
	};
};

/**
 * Logout the current user
 */
export const logout = () => {
	return {
		type: actions.LOGOUT_ACTION,
		__http: false,
	};
};

/**
 * Shows an error notification
 * 
 * @param {String} message The error message to display
 */
export const error_start = (message) => {
	return {
		type: actions.START_ERROR_ACTION,
		message,
		__http: false
	};
};

/**
 * Hides an error notification
 * 
 * @param {String} message The error message to display
 */
export const error_end = () => {
	return {
		type: actions.END_ERROR_ACTION,
		__http: false
	};
};
