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
  }

  async init() {
    this.accessToken = await this.oauth2Client.refreshAccessToken()
      .then(res => res.credentials.access_token);
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
        return resolve(info);
      });
    });

    return sendMailPromise;
  }
}

module.exports = new Mailer();
