const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport(
  {
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
      user: 'emailEnvio@hotmail.com',
      pass: '123456'
    }
  }
)

transporter.sendMail({
  from: 'Rodrigo guedelho <emailEnvio@hotmail.com>',
  to: 'rodrigoguedelho1@gmail.com',
  subject: 'Testando envio de email com nodemailer',
  text: 'Enviando um email com nodemailer',
  html: '<h1>Envio de email</h1>' +
        '<p>Um email legalzão para chuchu...</p>'
})