const nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport('SMTP', {
    service: 'Gmail',
    auth: {
        user: 'your@gmail.com',
        pass: "yourpassword"
    }
});

smtpTransport.sendMail({
    from: 'Tikken <tikken23@gmail.com>',
    to: 'someboy <somebody@gmail.com>',
    subject: 'Hi there this is a letter body',
    text: 'Me you us ever forever',
    html: "<div>Hello</div>"
}, (err, response) => {
    if(err){
        throw err;
    } else {
        console.log('Message has been sent');
    }

    smtpTransport.close();
})

