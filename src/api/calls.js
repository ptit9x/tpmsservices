import resource from 'resource-router-middleware'
import client from '../lib/twilioClient'
import ModelVoice from '../models/Voice'

export default (config) => resource({

	async index(req, res) {
		const params = {
      url: 'http://demo.twilio.com/docs/voice.xml',
      to: '+14155551212',
      from: '+15017250604',
    }

		const voice = new ModelVoice();
		const listMobilePhone = await voice.makeCall(params);
		res.json(listMobilePhone);
	},
});
