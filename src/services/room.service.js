import axios from "axios";
import store from "../redux/store";

class RoomService {
  baseURL = "";

  authToken = "";

  constructor() {
    this.baseURL = "/room";
    this.getToken();
  }

  async getToken() {
    this.authToken = store.getState().generalReducer.jwt;
    return this.authToken;
  }

  async create(room) {
    await this.getToken();
    const response = await axios.post(
      `${this.baseURL}`,
      {
        password: room.roomPassword,
        private: room.roomPrivate,
        name: room.roomName
      },
      { headers: { Authorization: this.authToken } }
    );
    return response.data;
  }
}

const instance = new RoomService();

export default instance;
