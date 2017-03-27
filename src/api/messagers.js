import resource from 'resource-router-middleware'
import ModelPhoneNumer from '../models/PhoneNumber'
import ModelVoice from '../models/Voice';
import ModelMessager from '../models/Messager'

const PhoneNumer = new ModelPhoneNumer();
const Voice = new ModelVoice();
const Messager = new ModelMessager();

export default (config) => resource({
	id : 'phone_number',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let err = null;
		if(!id) {
			err = 'Not found';
		}
		callback(err, id);
	},

	/** GET / - Get all messagers and calls */
	async index(req, res) {
		let messagers = {};

		const listNumbers = await PhoneNumer.getListNumbers();
		messagers.list_number = listNumbers;

		const listCalls = await Voice.getAllCall();
		messagers.call_log = listCalls;

		const listMessagers = await Messager.getAllMessager();
		messagers.message = listMessagers;

		res.json(messagers);
	},

	/** POST / - Send a new sms */
	async create(req, res) {
		let results = {
			'status': 500,
			'messager': 'Can not send SMS, please check again your input'
		}
		if (req.body.hasOwnProperty('body')
			&& req.body.hasOwnProperty('to')
			&& req.body.hasOwnProperty('from')) {
				const params = {
			    body: req.body.body,
			    to: req.body.to,
			    from: req.body.from // from is number buy on Twillio
			    // mediaUrl: 'http://www.yourserver.com/someimage.png'
				};
				results = await Messager.sendSMS(params);
			}
		res.json(results);
	},

	/** GET /:id - Return a given entity */
	async read(req, res) {
		const filterOpts = {
			from: req.params.phone_number, // id is phone number
		};
		if (req.query.hasOwnProperty('to')) {
			filterOpts.to = req.query.to;
		}
		if (req.query.hasOwnProperty('dateSent')) {
			filterOpts.dateSent = new Date(req.query.dateSent);
		}
		const listMessagers = await Messager.getMessagerByPhone(filterOpts);
		res.json(listMessagers);
	},

	/** PUT /:id - Update a given entity */
	update({ facet, body }, res) {
		for (let key in body) {
			if (key!=='id') {
				// facet[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ facet }, res) {
		// facets.splice(facets.indexOf(facet), 1);
		res.sendStatus(204);
	}
});
