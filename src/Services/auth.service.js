import axios from "axios";

class AuthService {
  base_url = "/api";

  async login(user) {
    const response = await axios.post(`${this.base_url}/auth/login`, {
      username: user.username,
      password: user.password
    });
    const json = response.json;
    if (!json.auth) throw json;
    return json;
  }

  async register(user) {
    const response = await axios.post(`${this.base_url}/auth/register`, {
      username: user.username,
      password: user.password
    });
    const json = response.json;
    if (!json.auth) throw json;
    return json;
  }

  logout(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({});
      }, 3000);
    });
  }
}

const instance = new AuthService();

export default instance;
