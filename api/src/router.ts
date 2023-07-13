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

		const url = Object.keys(req.query).length > 0 ? `${req.params[0]}/?page=${req.query.page}` : req.params['0'] 
		// eslint-disable-next-line no-console
		console.log({url, q: req.query})
		const config: AxiosRequestConfig = {
			method: 'GET',
			url: url,
		};
		// debug
		// eslint-disable-next-line no-console
		res.send(await apiRequest(config))
  });

	export default router;
