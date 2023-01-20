import Base from './Base.js';

export default class ClientsAPI extends Base {
    getListInternships(idCv) {
        return this.apiClient.get(`cv/${idCv}/internship/get`);
    }
    addInternshipsItem(idCv, data, type = "formData") {
        return this.apiClient.post(`cv/${idCv}/internship/add`, data, type);
    }
    deleteInternshipsItem(id) {
        return this.apiClient.delete(`cv/internship/delete/${id}`);
    }
    updateInternshipsItem(id, data, type = "formData") {
        return this.apiClient.post(`cv/internship/update/${id}`, data, type);
    }
}