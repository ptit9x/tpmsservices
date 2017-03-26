import client from '../lib/twilioClient';

class PhoneNumber {

 /**
 * incomingPhoneNumbers
 * TEST get list information phone number can be use!
 */
  incomingGetList() {
  return client.incomingPhoneNumbers.list()
    .then(function (data) {
      let listMobilePhone = {};
      if(data.hasOwnProperty('incoming_phone_numbers')) {
        listMobilePhone = data.incoming_phone_numbers;
      }
      return listMobilePhone;
    }, err => console.log(err));
  }

  /**
  * availablePhoneNumbers
  * TEST get list phone number can buy, filter by coutry and something like that!
  */
  availableGetList(params) {

    return client.availablePhoneNumbers(params.postcode).local
		.list(params.areaCode) // { areaCode: '510',}
		.then((data) => {
      let listMobilePhone = {};
      if(data.hasOwnProperty('available_phone_numbers')) {
        listMobilePhone = data.available_phone_numbers;
      }
      return listMobilePhone;
		});
  }

  /**
  * incomingPhoneNumbers
  * get list phone number can be use!
  */
  getListNumbers() {
    return client.incomingPhoneNumbers.list()
      .then((data) => {
        let listNumbers = [];
        if(data.hasOwnProperty('incoming_phone_numbers')) {
          const incomingPhones = data.incoming_phone_numbers;
          incomingPhones.forEach((value) => {
            if(value.hasOwnProperty('sid') && value.hasOwnProperty('phone_number')) {
              listNumbers.push({
                'sid': value.sid,
                'phone_number': value.phone_number
              });
            }
          });
        }
        return listNumbers;
      }, err => console.log(err));
  }
}

export default PhoneNumber;
