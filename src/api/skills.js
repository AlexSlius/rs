import Base from './Base.js';

export default class ClientsAPI extends Base {
    getSkillslistWork(params) {
        return this.apiClient.get('profile/list/skills', params);
    }
    getSkillslistSearch(params) {
        return this.apiClient.get('profile/list/skills_by_name', params);
    }
    addItemSkillOne(id, data, type = "formData") {
        return this.apiClient.post(`cv/${id}/skills/add`, data, type);
    }
    updateItemSkillOne(id, data, type = "formData") {
        return this.apiClient.post(`cv/skills/update/${id}`, data, type);
    }
    deleteItemSkillOne(id) {
        return this.apiClient.delete(`cv/skills/delete/${id}`);
    }
    getSkillslistAll(id) {
        return this.apiClient.get(`cv/${id}/skills/get`);
    }
}