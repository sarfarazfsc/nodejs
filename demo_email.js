
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth:{
         user: 'rohinimundra8@gmail.com',
         pass: 'sarfujaan'
     }
});

const mailOptions = {
    from: 'rohinimundra8@gmail.com',
    to: 'sarfarazfsc@gmail.com',
    subject: 'Emails from Nodejs',
    text: 'That was fun'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Email Sent: '+info.response);
    }
})