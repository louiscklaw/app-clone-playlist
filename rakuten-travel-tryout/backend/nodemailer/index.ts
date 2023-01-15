import nodemailer from 'nodemailer';

const helloworld_mailer = 'helloworld-mailer';

let mailer;

console.log('hello node mailer');

if (process.env.NODE_ENV === 'development') {
  mailer = nodemailer.createTransport({
    host: 'mailhog',
    port: 1025,
  });

  console.log('using develop mail config');
} else {
  // mailer = nodemailer.createTransport({
  //   // SES: new AWS.SES(),
  // });
}

// export default helloworld_mailer;

// export const sendConfirmationEmail = async (email: string) => {
//   const testAccount = await nodemailer.createTestAccount();
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   const user = await UserModel.findOne({ email }); // get user from email
//   if (!user) throw new Error('User not found');
//   // create token
//   const confirmationToken = signToken({ id: user._id }, 'confirmation');
//   // send mail with defined transport object
//   transporter.sendMail(
//     {
//       from: '"MD-Fitness" <srgupta@bigpond.com>', // sender address
//       to: `${user.email}`, // list of receivers
//       subject: 'Confirmation email', // Subject line
//       html: `<b>Hello ${user.name}</b>
//           <p>Link here : <a target="_" href="${process.env.DOMAIN}/confirm-email/${confirmationToken}">Link</a></p>
//           `, // html body
//     },
//     (error, info) => {
//       if (error) throw new Error(error.message);
//       console.log('Message sent: %s', info.messageId);
//       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//     },
//   );
// };

// export default sendConfirmationEmail;
export default mailer;
