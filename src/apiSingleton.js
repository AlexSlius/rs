import apiFactory from './api';
import { API_URL } from './config';

const api = apiFactory({
    apiUrl  : API_URL,
    onError : error => console.log('Connection error: ', error)
});

export default api;
