import actions from "./constants";

export const login = user => {
  return {
    type: actions.LOGIN_ACTION,
    __http: true,
    __method: "login",
    __service: "auth",
    params: [user],
  };
};

export const register = user => {
  return {
    type: actions.REGISTER_ACTION,
    __http: true,
    __method: "register",
    __service: "auth",
    params: [user]
  };
};

export const logout = user => {
  return {
    type: actions.LOGOUT_ACTION,
    __http: true,
    __method: "logout",
    __service: "auth",
    params: [user]
  };
};
