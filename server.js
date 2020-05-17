const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');
//const path = require('path');
const app = express();

let apiKey = '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';


sendGrid.setApiKey(apiKey);

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.post('/api/email', (req, res, next) => {

    const msg = {
        to: 'stephenrendajr@gmail.com',
        from: 'stephenrendajr@gmail.com',
        subject: 'Website Contact',
        text: 'Sender email: ' + req.body.email + "\n\n" + req.body.message
    }

    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            });
        })
        .catch(err => {
            console.log('error: ', err);
            res.status(401).json({
                success: false
            });
        });
        
});

app.listen(8080);

/*echo "export SENDGRID_API_KEY='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'" > sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env




// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
*/