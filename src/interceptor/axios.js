import axios from "axios";
import { API_URI } from "../utils/config";
let refresh = false;
axios.interceptors.response.use(resp => resp, async error => {
  if (error.response?.status === 401 && !refresh) {
    // const refreshToken = localStorage.getItem('refresh_token') !== null ? localStorage.getItem('refresh_token'): '';
    const refreshToken = localStorage.getItem('refresh_token');
    if (refreshToken !== null) {
      const refreshTokenData = JSON.parse(atob(refreshToken.split('.')[1])); // Decode access token
      const refreshTokenExpiration = refreshTokenData.exp * 1000; // Convert expiration time to milliseconds

      if (Date.now() >= refreshTokenExpiration) {
        // Access token sudah kedaluwarsa
        localStorage.clear(); // Hapus token dari localStorage
        axios.defaults.headers.common['Authorization'] = null; // Hapus header Authorization dari Axios
      }
    }

     refresh = true;
     const response = await axios.post(`${API_URI}token/refresh/`, {
                refresh: localStorage.getItem('refresh_token')
            }, {
                headers:{
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
    if (response.status === 200) {
       axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`;
       localStorage.setItem('access_token', response.data['access']);
       localStorage.setItem('refresh_token', response.data['refresh']);
       return axios(error.config);
    }
  }
refresh = false;
return error;
});