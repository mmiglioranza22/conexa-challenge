import { Request, Response, Router } from 'express';
import axios, {AxiosError, AxiosResponse, AxiosRequestConfig, AxiosInstance} from 'axios'

// import SwapiResponse from './types'



const api: AxiosInstance = axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: 5000,
});

export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await api(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const router = Router();
router
  .route('*')
  .get(async (req: Request, res: Response) => {
    // add logic here
		// eslint-disable-next-line no-console
		console.log({params: req.params, query: req.query})
		res.send('OK')

		const serializeParams: any = (params: any) => {

			// let values = Object.values(params)[0] as string
			// eslint-disable-next-line no-console
			// console.log()

			// values = values?.split('/').shift()
			// return values
		}

		// eslint-disable-next-line no-console
		// console.log(serializeParams(req.params))
		// const config: AxiosRequestConfig = {
		// 	method: 'GET',
		// 	url: `//${userId}`,
		// };
		// return await apiRequest<GetUserResponseData>(config);


  });


	export default router;
