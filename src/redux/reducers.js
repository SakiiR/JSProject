import { combineReducers } from 'redux';

const generalReducer = (state = {}, action) => {
	switch (action.type.split('_').slice(-1)[0]) {
		case 'PENDING':
			state = { ...state, requestProcessing: true };
			break;
		case 'SUCCESS':
			state = { ...state, requestProcessing: false };
			break;
		case 'FAILURE':
			state = { ...state, requestProcessing: false };
			break;
		default:
			state = { ...state };
	}

	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return { ...state, loggedIn: true };
		case 'LOGOUT_REQUEST':
			return { ...state, loggedIn: false, username: '', jwt: null };
		case 'START_ERROR_ACTION':
			return { ...state, error: action.message };
		case 'END_ERROR_ACTION':
			return { ...state, error: null };
		default:
			return state;
	}
};

const liveChat = combineReducers({
	generalReducer
});

export default liveChat;
