import { Request, Response, Router } from 'express';
import { AxiosRequestConfig } from 'axios'
import { apiRequest } from './api';

// SWAPI design allows for all routes to be requested similarly -> /resourceType/id,
// hence only one generic router was implemented.
// Had this API being different, or challenges requirements asked for other actions (POST, DELETE),
// there would had been a specific router for each route since data manipulation would have required it

// This solution is exclusively adopted for this challenge, it is not a good practice for production-ready solutions

const router = Router();
router
  .route('*')
  .get(async (req: Request, res: Response) => {
		const config: AxiosRequestConfig = {
			method: 'GET',
			url: req.params['0']
		};
		// debug
		// eslint-disable-next-line no-console
		// console.log({params: req.params})
		res.send(await apiRequest(config))
  });

	export default router;
