import Base from './Base.js';

export default class ClientsAPI extends Base {
    getListEducation(idCv) {
        return this.apiClient.get(`cv/${idCv}/education/get`);
    }
    addEducationItem(idCv, data, type = "formData") {
        return this.apiClient.post(`cv/${idCv}/education/add`, data, type);
    }
    deleteEducationItem(id) {
        return this.apiClient.delete(`cv/education/delete/${id}`);
    }
    updateEducationItem(id, data, type = "formData") {
        return this.apiClient.post(`cv/education/update/${id}`, data, type);
    }
}
