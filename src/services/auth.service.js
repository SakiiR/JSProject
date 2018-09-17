import axios from 'axios';

class AuthService {
	base_url = '';

	async login(user) {
		const response = await axios.post(`/auth/login`, {
			username: user.username,
			password: user.password
		});
		return response.data;
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
