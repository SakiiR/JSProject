export default class AuthService {
    login() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    }

    register() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    }
}