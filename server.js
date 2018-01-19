const express = require('express');
const bodyParser = require('body-parser');
const OAuthServer = require('node-oauth2-server');
const model = require('./database-helpers/oauth-model');

// inisialiasi express app
const app = express();

// oauth server untuk express js
app.oauth = new OAuthServer({
    model: model,
    grants: ['password'],
    debug: true
});

const authentication = require('./routes/authentication')(express.Router(), app.oauth);

// set plugin in express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/auth', authentication);

app.listen(3030, () => console.log('server sudah up'));