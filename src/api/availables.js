import resource from 'resource-router-middleware'
import client from '../lib/twilioClient'
import PhoneNumber from '../models/PhoneNumber'

export default (config) => resource({

	async index(req, res) {
		const postcode = req.query.postcode || 'us';
		const areaCode = req.query.areaCode || '510';
		const params = {
			'postcode': postcode.toUpperCase(),
			'areaCode' : areaCode
		}

		const availablePhones = new PhoneNumber();
		const listMobilePhone = await availablePhones.availableGetList(params);
		res.json(listMobilePhone);
	},
});
