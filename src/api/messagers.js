import resource from 'resource-router-middleware';
import messagers from '../models/messagers';

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'message',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let messager = messagers.message,
			err = messager ? null : 'Not found';
		callback(err, messager);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		res.json(messagers);
	},

  /** POST / - Create a new entity */
  create({ body }, res) {
    body.id = messagers.length.toString(36);
    messagers.push(body);
    res.json(body);
  },

  /** GET /:id - Return a given entity */
  read({ messager }, res) {
    console.log(messager);
    res.json(messager);
  },
});
