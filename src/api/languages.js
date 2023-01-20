import Base from './Base.js';

export default class ClientsAPI extends Base {
    getListLanguages(idCv) {
        return this.apiClient.get(`cv/${idCv}/languages/get`);
    }
    addLanguagesItem(idCv, data, type = "formData") {
        return this.apiClient.post(`cv/${idCv}/languages/add`, data, type);
    }
    deleteLanguagesItem(id) {
        return this.apiClient.delete(`cv/languages/delete/${id}`);
    }
    updateLanguagesItem(id, data, type = "formData") {
        return this.apiClient.post(`cv/languages/update/${id}`, data, type);
    }
}