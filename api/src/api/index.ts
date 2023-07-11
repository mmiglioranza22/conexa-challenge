
import axios, {AxiosRequestConfig, AxiosInstance} from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com/',
  timeout: 5000,
});


// const config: AxiosRequestConfig = {
// 	method: 'GET',
// 	url: `/users/${userId}`,
// };
// return await apiRequest<GetUserResponseData>(config);
