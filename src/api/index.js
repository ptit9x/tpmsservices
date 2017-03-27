import 'babel-core/register'
import 'babel-polyfill'
import { Router } from 'express'
import availables from './availables'
import messagers from './messagers'
import calls from './calls'

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/availables', availables({ config, db }));
	api.use('/messagers', messagers({ config, db }));
	api.use('/calls', calls(config));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({
			'get API messagers': '{domain}/api/messagers'
		});
	});

	return api;
}
