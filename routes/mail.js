const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    //host: 'smtp.gmail.com',
    //port: 465,
    //secure: true,
    service: 'gmail',
    auth: {
        user: 'rebath2021@gmail.com',
        pass: 'rebath@123'
    }
});


exports.send = function (data, callback) {
    var attachment = data.attachment;
    var emaillist = [];
    emaillist = data.email;
    
    var subject = data.subject;
    var message = data.message;
    
    let mailOptions = {
        from: data.fromusername,
        to: emaillist,
        subject: subject,
        text: message,
        attachments: [
            {
                filename: 'attachment.pdf',
                //path : attachment
                //contents:new Buffer(attachment, 'base64')
                content: attachment,
                encoding: 'base64'
            }
        ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            callback(false);
        }
        callback(true);
    });
}