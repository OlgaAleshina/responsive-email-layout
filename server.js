var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'yandex',
    auth: {
           user: 'enter e-mail',
           pass: 'enter password'
       }
   });

   const mailOptions = {
    from: 'enter e-mail', // sender address
    to: 'enter e-mail', // list of receivers
    subject: 'Subject of email', // Subject line
    html: '<p>Your html here</p>',// plain text body
     };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log("E-mail sent");
 });