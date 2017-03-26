import client from '../lib/twilioClient';

export default class Voice {

 /**
 *
 * List All Calls
 */
  getAllCall() {
    const options = {
      status: "completed",
      "startTime>": "2009-07-06"
    }
    return client.calls.list(options)
    .then((data) => {
      const listCalls = [];
      if(data.hasOwnProperty('calls')) {
        data.calls.forEach((call) => {
          if(call.hasOwnProperty('sid')
            && call.hasOwnProperty('to')
            && call.hasOwnProperty('from')) {
            listCalls.push({
              'sid': call.sid,
              'to': call.to,
              'from': call.from,
              'date_created': call.date_created,
              'duration': call.duration
            });
          }
        });
      }
      return listCalls;
    }, err => console.log(err));
  }
}
