const nodemailer = require("nodemailer");
import 'dotenv/config';

//transporter for SMTP Mails
export const transporter = nodemailer.createTransport({
    host: process.env.SMTPHOST,
    port: 587,
    secure: false,
    auth: {
      type: "OAuth2",
      user: process.env.SMTPUSER,
      clientid: process.env.OAUTH2CLIENTID,
      clientSecret: process.env.OAUTH2CLIENTID,
      refreshToken: process.env.OAUTH2REFRESHTOKEN,
      accessToken: process.env.OAUTH2ACCESSTOKEN
    },
});
