import Base from './Base.js';

export default class ClientsAPI extends Base {
    login(data) {
        return this.apiClient.post('api/login_check', data);
    }
    register(data) {
        return this.apiClient.post('api/register', data);
    }
    resetPassword(data) {
        return this.apiClient.post('api/reset_password', data);
    }
    changeCodePassword(data) {
        return this.apiClient.post('api/check_code', data);
    }
    newPassword(data) {
        return this.apiClient.post('api/change_password', data);
    }
    isAutorization(data) {
        return this.apiClient.post('api/check_token', data);
    }
}
