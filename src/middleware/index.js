import { Router } from 'express';

export default (config) => {
	let routes = Router();

	// add middleware here, check token and validate common json
	routes.use(function(req, res, next) {
    // validate
    console.log(req.headers.token, 'Something is happening.');
    next();
	});

	return routes;
}
