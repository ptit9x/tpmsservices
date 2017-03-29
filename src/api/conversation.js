import resource from 'resource-router-middleware';
import PhoneNumber from '../models/PhoneNumber';
import ModelMessager from '../models/Messager'

const Messager = new ModelMessager();

export default (config) => resource({

	async index(req, res) {
		if (req.query.hasOwnProperty('number1')
      && req.query.hasOwnProperty('number2')) {
			const number1 = req.query.number1;
      const number2 = req.query.number2;
      let dateSent = req.query.dateSent || '';
      if (dateSent) {
  			dateSent = new Date(dateSent);
  		}
  		const conversation1 = await Messager.getMessagerByPhone({
        'from': number1,
        'to': number2,
        'dataSent': dateSent
      });

      const conversation2 = await Messager.getMessagerByPhone({
        'from': number2,
        'to': number1,
        'dataSent': dateSent
      });
      const results = conversation1.concat(conversation2);
      const count = results.length;
      for (let i = 0; i < count - 1; i++) {
        for (let j = i + 1; j < count - 2; j++) {
          let d1 = new Date(results[i].date_created);
          let d2 = new Date(results[j].date_created);

          if(d2 > d1) {
            let temp = results[i];
            results[i] = results[j];
            results[j] = temp;
          }
        }
      }

  		res.json(results);
		}

    res.json({});
	},
});
