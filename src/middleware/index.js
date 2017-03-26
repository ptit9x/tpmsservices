import { Router } from 'express';

export default (config) => {
	let routes = Router();

	// add middleware here, check token and validate common json
	console.log('middleware');

	return routes;
}
