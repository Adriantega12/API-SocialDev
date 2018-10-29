const nodemailer = require('nodemailer');

class Mailer {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILER_HOST,
      port: process.env.MAILER_PORT,
      // secure: process.env.MAILER_SECURE,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
    });

    this.mailOptions = {
      from: 'SocialDev-TestEnv <testing@example.com>',
    };
  }

  async sendMail(options) {
    const mailOptions = {
      ...this.mailOptions,
      ...options,
    };

    const sendMailPromise = new Promise(async (resolve, reject) => {
      await this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
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
