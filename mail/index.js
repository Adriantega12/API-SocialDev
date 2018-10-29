const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const { OAuth2 } = google.auth;

class Mailer {
  constructor() {
    // Creating OAuth2Client
    this.oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT,
    );
    // Setting credentials to get new access token
    this.oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    // Mail options
    this.mailOptions = {
      from: process.env.MAIL_USER,
    };

    // Ethereal
    /*
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILER_HOST,
      port: process.env.MAILER_PORT,
      secure: true,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
    });
    */

    // Gmail
    //console.log(this.oauth2Client.refreshAccessToken().then(res => console.log('res')));
    /*const promise = new Promise((resolve, reject) => {
      console.log(this.oauth2Client.refreshAccessToken()
        .then(res => resolve(res.credentials.accessToken)));
    });*/

    /*
    console.log(this.accessToken);
    this.accessToken = new Promise(async (resolve, reject) => {
      await this.oauth2Client.refreshAccessToken()
        .then(res => resolve(res.credentials.accessToken));
    });
    console.log(this.accessToken);

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: this.accessToken,
      },
    });
    */
  }

  async init() {
    this.accessToken = await this.oauth2Client.refreshAccessToken()
      .then(res => res.credentials.access_token);
    console.log(this.accessToken);
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: this.accessToken,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    console.log('Bitch');
  }

  async sendMail(options) {
    const mailOptions = {
      ...this.mailOptions,
      ...options,
    };

    const sendMailPromise = new Promise(async (resolve, reject) => {
      await this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return reject(error);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        return resolve(info);
      });
    });

    return sendMailPromise;
  }
}

module.exports = new Mailer();
