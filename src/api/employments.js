import Base from './Base.js';

export default class ClientsAPI extends Base {
    getListEmployment(idCv) {
        return this.apiClient.get(`cv/${idCv}/employment/history/get`);
    }
    addEmploymentItem(idCv, data, type = "formData") {
        return this.apiClient.post(`cv/${idCv}/employment/history/add`, data, type);
    }
    deleteEmploymentItem(id) {
        return this.apiClient.delete(`cv/employment/history/delete/${id}`);
    }
    updateEmploymentItem(id, data, type = "formData") {
        return this.apiClient.post(`cv/employment/history/update/${id}`, data, type);
    }
}