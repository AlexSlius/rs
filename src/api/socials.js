import { data } from 'autoprefixer';
import Base from './Base.js';

export default class ClientsAPI extends Base {
    addItemSocial(idCv, data, type = "formData") {
        return this.apiClient.post(`cv/${idCv}/links/add`, data, type);
    }
    getAllLisk(idCv) {
        return this.apiClient.get(`cv/${idCv}/links/get`);
    }
    postUpdateItemLink(id, data, type = "formData") {
        return this.apiClient.post(`cv/links/update/${id}`, data, type);
    }
    deleteItemLink(id) {
        return this.apiClient.delete(`cv/links/delete/${id}`);
    }
}