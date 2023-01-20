import Base from './Base.js';

export default class ClientsAPI extends Base {
    getCountrys() {
        return this.apiClient.get('profile/list/countrys');
    }
    getCities(id, params) {
        return this.apiClient.get(`profile/list/${id}/citys`, params);
    }
    getZipCodes(id) {
        return this.apiClient.get(`profile/list/${id}/zip`);
    }
    getDrivers(id) {
        return this.apiClient.get(`profile/list/${id}/driver_licenses`);
    }
    getNationality(params) {
        return this.apiClient.get(`profile/list/nationality`, params);
    }
    getJopsTitle(params) {
        return this.apiClient.get(`profile/list/jobs_title`, params);
    }
    getCompanys(params) {
        return this.apiClient.get(`profile/list/company`, params);
    }
    getEmploymentList(params) {
        return this.apiClient.get(`profile/list/employer`, params);
    }
    getStudysList(params) {
        return this.apiClient.get(`profile/list/field_of_study`, params);
    }
    getSkillsPosition(params) {
        return this.apiClient.get('profile/list/skill_positions', params);
    }
    getSocials(params) {
        return this.apiClient.get(`profile/list/links`, params);
    }
    getHobies(params) {
        return this.apiClient.get(`profile/list/hobbies`, params);
    }
}
