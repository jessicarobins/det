const secrets = {
  wolframAlphaId: process.env.WA_APP_ID,
  session: process.env.SESSION_SECRET,
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  }
};

export default secrets;