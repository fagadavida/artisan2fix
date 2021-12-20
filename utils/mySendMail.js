const nodemailer = require("nodemailer");

module.exports = class Letterwords {
  sendEmailFromMailer(toEmail, title, body) {
    let transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "averadavida@gmail.com",
        pass: "fagas123",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    let mailOptions = {
      from: "averadavida@gmail.com",
      to: toEmail,
      subject: title,
      text: "",
      html: body,
    };
    try {
      transport.sendMail(mailOptions);
    } catch (error) {
      console.log("Mail not sent!");
    }
  }
};
