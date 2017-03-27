import client from '../lib/twilioClient';

class Messager {

 /**
 * get all sms
 */
  getAllMessager() {
  return client.messages.list()
    .then((data) => {
      let listMessagers = [];
      if(data.hasOwnProperty('messages')) {
        data.messages.forEach((value) => {
          // loop to get field necessary
          if(value.hasOwnProperty('sid')
          && value.hasOwnProperty('to')
          && value.hasOwnProperty('from')) {
            listMessagers.push({
              'sid': value.sid,
              'account_sid': value.account_sid,
              'to': value.to,
              'from': value.from,
              'body': value.body || '',
              'status': value.status || 'failed',
              'date_created': value.date_created
            });
          }
          // END loop
        });
      }
      return listMessagers;
    }, err => console.log(err));
  }

  /**
  * Update a messager
  */
   updateSMS(sid, content) {
     return client.messages(sid)
      .update({body: content})
      .then((message) => process.stdout.write(message.body));
   }

   /**
   * create a sms send to a phone number
   */
  sendSMS(params) {
    return client.messages.create(params)
      .then((data) => {
        let result = {};
        if(data.hasOwnProperty('sid')
          && data.hasOwnProperty('to')
          && data.hasOwnProperty('from')) {
          result = {
            'sid': data.sid,
            'date_created': data.date_created,
            'date_sent': data.date_sent,
            'to': data.to,
            'from': data.from,
            'body': data.body,
            'status': data.status
          };
        }
        return result;
      }, err => console.log(err));
  }

  /**
  * get messager by phone number
  */
  getMessagerByPhone(filterOpts) {
  return client.messages.list(filterOpts)
    .then((data) => {
      let listMessagers = [];
      if(data.hasOwnProperty('messages')) {
        data.messages.forEach((value) => {
          // loop to get field necessary
          if(value.hasOwnProperty('sid')) {
            listMessagers.push({
              'sid': value.sid,
              'account_sid': value.account_sid,
              'to': value.to,
              'from': value.from,
              'body': value.body || '',
              'status': value.status || 'failed',
              'date_created': value.date_created
            });
          }
          // END loop
        });
      }
      return listMessagers;
    }, err => console.log(err));
  }
}

export default Messager;
