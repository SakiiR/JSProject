import { errorStart, errorEnd } from "./actions";
import history from "../utils/history";

const redirectIfNeeded = action => {
  if (action.__redirect !== undefined && action.__redirect !== null) {
    setTimeout(() => {
      history.push(action.__redirect);
    }, action.__redirectTime);
  }
};

const dispatchError = (store, errorMsg, duration) => {
  store.dispatch(errorStart(errorMsg));
  setTimeout(() => store.dispatch(errorEnd()), duration);
};

export const service = store => next => action => {
  if (!action.__http) {
    redirectIfNeeded(action);
    return next(action);
  }
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
      dispatchError("Success!", store, 3000);
      redirectIfNeeded(action);
    } catch (error) {
      store.dispatch({
        ...action,
        __http: false,
        type: action.type.replace("REQUEST", "FAILURE"),
        error
      });
      try {
        dispatchError(error.response.data.data, store, 3000);
      } catch (err) {
        dispatchError("Unknown error!", store, 3000);
      }
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
