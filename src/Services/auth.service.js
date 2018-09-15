export default class AuthService {
  static instance;

  constructor() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;
  }

  login(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(user);
      }, 3000);
    });
  }

  register(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(user);
      }, 3000);
    });
  }

  logout(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({});
      }, 3000);
    });
  }
}
