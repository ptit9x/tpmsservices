import config from '../config';
import twilio from 'twilio';
module.exports = twilio(config.accountSid, config.authToken);

// module.exports.sendSms = function(to, message) {
//   client.messages.create({
//     body: message,
//     to: to,
//     from: config.sendingNumber
// //  mediaUrl: imageUrl
//   }, function(err, data) {
//     if (err) {
//       console.error('Could not notify administrator');
//       console.error(err);
//     } else {
//       console.log('Administrator notified');
//     }
//   });
// };
