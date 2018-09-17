import axios from 'axios';
import store from '../Redux/store';
import { error_start, error_end } from '../Redux/actions';

class AuthService {
	base_url = '';

	async login(user) {
		const response = await axios.post(`/auth/login`, {
			username: user.username,
			password: user.password
		});
		const json = response.data;
		if (!json.message.user.token) throw json;
		return json;
	}

	async register(user) {
		const response = await axios.post(`/auth/register`, {
			username: user.username,
			password: user.password
		});
    return response.data;
	}
}

const instance = new AuthService();

export default instance;
