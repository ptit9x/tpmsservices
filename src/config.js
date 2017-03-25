const cfg = {};
cfg.port = process.env.PORT || 3000;

// A random string that will help generate secure one-time passwords and
// HTTP sessions
cfg.secret = process.env.APP_SECRET || '0ktpB1hU+FT1S1qVc8gqlK78clw=0ktpB1hU+FT1S1q';
cfg.bodyLimit = '500kb';
cfg.corsHeaders = 'Link';

cfg.accountSid = process.env.TWILIO_ACCOUNT_SID;
cfg.authToken = process.env.TWILIO_AUTH_TOKEN;

const requiredConfig = [cfg.accountSid, cfg.authToken];
const isConfigured = requiredConfig.every(function(configValue) {
  return configValue || false;
});

if (!isConfigured) {
  const errorMessage = 'TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN must be set.';
  throw new Error(errorMessage);
}

module.exports = cfg;
