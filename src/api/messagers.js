import resource from 'resource-router-middleware';
import client from '../lib/twilioClient';

export default (config) => resource({
	/** GET / - List all entities */
	index({ params }, res) {
		client.messages.list()
    .then(function (data) {
			const messages = data.messages;
      res.json(messages);
    }, err => console.log(err));
	}
});
