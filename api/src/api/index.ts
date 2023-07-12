
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
// import SwapiResponse from '../types';

const ApiClient: AxiosInstance = axios.create({
  baseURL: 'https://swapi.dev/api/',
  // timeout: 000
});

export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await ApiClient(config)
    return response.data
  } catch (error) {
    console.error(error)
    return [] as T
  }
}