import { Request, Response, Router } from 'express';
import axios, {AxiosError, AxiosResponse, AxiosRequestConfig, AxiosInstance} from 'axios'
import { apiRequest } from './api';

const router = Router();
router
  .route('*')
  .get(async (req: Request, res: Response) => {
		const config: AxiosRequestConfig = {
			method: 'GET',
			url: req.params['0']
		};
		res.send(await apiRequest(config))
  });

	export default router;
