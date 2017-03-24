import resource from 'resource-router-middleware';
import client from '../lib/twilioClient';

export default (config) => resource({

	index(req, res) {
		const postcode = req.query.postcode || 'us';
		const areaCode = req.query.areaCode || '510';
		client.availablePhoneNumbers(postcode.toUpperCase()).local
		.list(areaCode) // { areaCode: '510',}
		.then((data) => {
			res.json(data);
		});
	},
});
