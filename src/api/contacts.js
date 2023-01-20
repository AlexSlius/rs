import Base from './Base.js';

export default class ClientsAPI extends Base {
    setBaseInfo(data, type = "formData") {
        return this.apiClient.post('profile/basic/', data, type);
    }
    getBasic(idCv) {
        return this.apiClient.get(`cv/${idCv}/basic/get`);
    }
    updateContact(idCv, data, type = "formData") {
        return this.apiClient.post(`cv/update/${idCv}`, data, type);
    }
}
