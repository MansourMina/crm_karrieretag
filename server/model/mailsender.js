const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  // tls: {
  //   rejectUnauthorized: false,
  // },
});

let mailOptions = {
  from: process.env.EMAIL,
  to: 'mansour.m02@htlwienwest.at',
  subject: 'Sending Email using Node.js',
  text: 'Email gesendet',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
