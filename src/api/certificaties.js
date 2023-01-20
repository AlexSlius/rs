import Base from './Base.js';

export default class ClientsAPI extends Base {
    getListCertificates(idCv) {
        return this.apiClient.get(`cv/${idCv}/certificates/get`);
    }
    addCertificatesItem(idCv, data, type = "formData") {
        return this.apiClient.post(`cv/${idCv}/certificates/add`, data, type);
    }
    deleteCertificatesItem(id) {
        return this.apiClient.delete(`cv/certificates/delete/${id}`);
    }
    updateCertificatesItem(id, data, type = "formData") {
        return this.apiClient.post(`cv/certificates/update/${id}`, data, type);
    }
}