import Base from './Base.js';

export default class ClientsAPI extends Base {
    getListActivitys(idCv) {
        return this.apiClient.get(`cv/${idCv}/extra_curricular/get`);
    }
    addActivitysItem(idCv, data, type = "formData") {
        return this.apiClient.post(`cv/${idCv}/extra_curricular/add`, data, type);
    }
    deleteActivitysItem(id) {
        return this.apiClient.delete(`cv/extra_curricular/delete/${id}`);
    }
    updateActivitysItem(id, data, type = "formData") {
        return this.apiClient.post(`cv/extra_curricular/update/${id}`, data, type);
    }
}