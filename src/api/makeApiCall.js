import axios from "axios";
import { apiPrefix, headerss } from "../constants/common";

export function makeApiCall (method, endpoint, data = null, headers = headerss, customHeaders = null) {
    let FD;
    const options = {
      method,
      "url": `${apiPrefix}${endpoint}`,
      "headers": method === 'post' ? {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${(window.localStorage.getItem('token') ? JSON.stringify(window.localStorage.getItem('token')).replace('"', '') : '')}`
    }  : customHeaders ? customHeaders : {
        Authorization: headers.Authorization ? 
          headers.Authorization : 
          `Bearer ${(window.localStorage.getItem('token') ? JSON.stringify(window.localStorage.getItem('token')).replace('"', '') : '')}`
      }
    }

    if(data) {
      FD = new FormData();
      for (const [name, value] of Object.entries(data)) {
        FD.append(name, value);
      }

      options.data =  FD;
    }

    return new Promise(async (resolve, reject)=>{
      try {
          const response = await axios(options);
          return resolve(response);
      } catch (err) {
            console.error('[Api]: ', err);
            reject(new Error('Internal server error'));
      }
    
    })}