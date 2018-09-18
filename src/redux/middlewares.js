import { errorStart, errorEnd } from "./actions";

export const service = store => next => action => {
  if (!action.__http) return next(action);

  // The request is now pending
  store.dispatch({
    ...action,
    __http: false,
    type: action.type.replace("REQUEST", "PENDING")
  });

  // Retrieve the correct service if we need an http request to be send
  const associatedService = require(`../services/${
    action.__service
  }.service.js`).default;

  (async () => {
    try {
      const result = await associatedService[action.__method](...action.params);
      store.dispatch({
        ...action,
        __http: false,
        type: action.type.replace("REQUEST", "SUCCESS"),
        result
      });
      store.dispatch(errorStart("Success!"));
      setTimeout(() => store.dispatch(errorEnd()), 3000);
    } catch (error) {
      store.dispatch({
        ...action,
        __http: false,
        type: action.type.replace("REQUEST", "FAILURE"),
        error
      });
      try {
        store.dispatch(errorStart(error.response.data.data));
      } catch (err) {
        store.dispatch(errorStart("Unknown error"));
      }
      setTimeout(() => store.dispatch(errorEnd()), 3000);
    }
  })();
  return next(action);
};

export const logger = store => next => action => {
  console.group(action.type);
  console.info("Dispatching", action);
  const result = next(action);
  console.log("Next state", store.getState());
  console.groupEnd();
  return result;
};
