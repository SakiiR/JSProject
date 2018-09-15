export const service = store => next => action => {
  if (!action.__http) return next(action);

  // The request is now pending
  store.dispatch({
    ...action,
    __http: false,
    type: action.type.replace("REQUEST", "PENDING")
  });

  // Retrieve the correct service if we need an http request to be send
  const associatedService = new (require(`../Services/${
    action.__service
  }.service.js`)).default();

  // Send the http request
  associatedService[action.__method](...action.params)
    .then((result) => {
      // The request succeed
      store.dispatch({
        ...action,
        __http: false,
        type: action.type.replace("REQUEST", "SUCCESS")
      });
    })
    .catch((result) => {
      // The request failed
      store.dispatch({
        ...action,
        __http: false,
        type: action.type.replace("REQUEST", "FAILURE")
      });
    });
  return next(action);
};

export const logger = store => next => action => {
  console.group(action.type);
  console.info("Dispatching", action);
  let result = next(action);
  console.log("Next state", store.getState());
  console.groupEnd();
  return result;
};
