import Base from './Base.js';

export default class ClientsAPI extends Base {
    getListReferences(idCv) {
        return this.apiClient.get(`cv/${idCv}/reference/get`);
    }
    addReferencesItem(idCv, data, type = "formData") {
        return this.apiClient.post(`cv/${idCv}/reference/add`, data, type);
    }
    deleteReferencesItem(id) {
        return this.apiClient.delete(`cv/reference/delete/${id}`);
    }
    updateReferencesItem(id, data, type = "formData") {
        return this.apiClient.post(`cv/reference/update/${id}`, data, type);
    }
}