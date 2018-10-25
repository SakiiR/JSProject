import axios from "axios";
import store from "../redux/store";

class MessageService {
  baseURL = "";

  authToken = "";

  constructor() {
    this.baseURL = "/";
    this.getToken();
  }

  async getToken() {
    this.authToken = store.getState().generalReducer.jwt;
    return this.authToken;
  }

  async list(room, password) {
    await this.getToken();
    const result = await axios.get(
      `${this.baseURL}room/${room._id}/messages${
        room.private ? `?password=${password}` : ""
      }`,
      { headers: { Authorization: this.authToken } }
    );
    return result;
  }
}

const instance = new MessageService();

export default instance;