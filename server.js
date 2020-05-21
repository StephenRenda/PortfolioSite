const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');
const app = express();

const port = process.env.PORT || 8080;

require('dotenv').config()
const key = process.env.REACT_APP_SENDGRID;

sendGrid.setApiKey(key);

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

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));