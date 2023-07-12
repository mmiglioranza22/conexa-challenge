import axios, { AxiosError, AxiosResponse, AxiosRequestConfig, AxiosInstance, ParamEncoder, CustomParamsSerializer } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: 'http:/localhost:8080/',
  timeout: 5000,
});

type ROUTES = 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles'

class ApiClient {
	static async request(params: ROUTES) {
		const config: AxiosRequestConfig = {
			method: 'GET',
			url: params
		}
		try {
			const response = await fetch(`http:/localhost:8080/${params}`)
			return response
		} catch (err) {
			console.error(err)
		}
	}
}

export default ApiClient