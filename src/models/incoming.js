import client from '../lib/twilioClient';

function incoming() {
  let incoming = {};
  client.incomingPhoneNumbers.list()
  .then(function (data) {
    incoming = data.incoming_phone_numbers;
  }, err => console.log(err));
  return incoming;
}

export default incoming;
