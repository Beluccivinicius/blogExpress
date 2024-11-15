const nodemailer = require("nodemailer");
const { Model } = require("sequelize");
const RandomPass = require("./randomPass");
require("dotenv").config();
const { EMAIL_UTILIZADO, APP_SENHA_EMAIL } = process.env;

// BOM material para consulta smtp
// https://sistemaaula.com.br/crm/knowledge-base/article/como-utilizar-o-servidor-smtp-do-google-para-enviar-e-mails

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: EMAIL_UTILIZADO,
    pass: APP_SENHA_EMAIL,
  },
});

async function main(nome, email) {
  let randomPass = RandomPass();
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"Maddison Foo Koch 👻" <${EMAIL_UTILIZADO}>`, // sender address
    to: "vinicius.belucci@outlook.com", // list of receivers
    subject: `Hello ${nome} ✔`, // Subject line
    text: randomPass, // plain text body
    html: `<b>${randomPass}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = main;
