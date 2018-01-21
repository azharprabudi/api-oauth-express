const express = require('express');
const bodyParser = require('body-parser');
const OAuthServer = require('node-oauth2-server');
const cors = require('cors');
const model = require('./database-helpers/oauth-model');

// inisialiasi express app
const app = express();
const router = express.Router();

// oauth server untuk express js
app.oauth = new OAuthServer({
    model: model(),
    grants: ['password'],
    debug: true,
    accessTokenLifetime: 4*60*60
});

const authentication = require('./routes/authentication')(router, app.oauth);
const user = require('./routes/user')(router, app.oauth);

// set plugin in express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/auth', authentication);
app.use('/user', user);


app.listen(3030, () => console.log('server sudah up'));