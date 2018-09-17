import { error_start, error_end } from '../Redux/actions';

export const service = (store) => (next) => (action) => {
	if (!action.__http) return next(action);

	// The request is now pending
	store.dispatch({
		...action,
		__http: false,
		type: action.type.replace('REQUEST', 'PENDING')
	});

	// Retrieve the correct service if we need an http request to be send
	const associatedService = require(`../Services/${action.__service}.service.js`).default;

	(async () => {
		try {
			const result = await associatedService[action.__method](...action.params);
			store.dispatch({
				...action,
				__http: false,
				type: action.type.replace('REQUEST', 'SUCCESS'),
				result: result
			});
		} catch (error) {
			store.dispatch({
				...action,
				__http: false,
				type: action.type.replace('REQUEST', 'FAILURE'),
				error: error.response
      });
      store.dispatch(error_start(error.response.data.data));
      setTimeout(() => store.dispatch(error_end()), 3000);
		}
	})();
	return next(action);
};

export const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.info('Dispatching', action);
	let result = next(action);
	console.log('Next state', store.getState());
	console.groupEnd();
	return result;
};
