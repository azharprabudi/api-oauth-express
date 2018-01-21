const JWT = require('jsonwebtoken');
const accessTokenQuery = require('../query/accesstoken-query');
const db = require('../db');

module.exports = () => {
    return {
        getClient: getClient,
        grantTypeAllowed: grantTypeAllowed,
        getUser: getUser,
        saveAccessToken: saveAccessToken,
        getAccessToken: getAccessToken,
        generateToken: generateToken
    }
};

const getClient = (clientID, clientSecret, callback) => {
    console.log('get client');
    const client = {
        clientID,
        clientSecret,
        grants: null,
        redirectUris: null
    };
    callback(false, client);
}

const grantTypeAllowed = (clientID, grantType, callback) => {
    callback(false, true);
}

const getUser = (username, password, callback) => {
    console.log('get user');
    accessTokenQuery.checkUserLogin(username, password, callback);
}

const saveAccessToken = (accessToken, clientID, expires, user, callback) => {
    console.log('get save access token');
    accessTokenQuery.saveAccessToken(accessToken, user.id, callback);
}

const getAccessToken = (bearerToken, callback) => {
    return JWT.verify(bearerToken, 'XT6PRpRuehFsyMa2', (err, decoded) => {
        if (err) {
            return callback(err, false);
        }
        /* 
        hasil decoded 
        {
            iss: 'secret',
            exp: expired,
            userId: id user,
        }
        */
        return callback(false, {
            expires: new Date(decoded.exp),
            userId: decoded.userId
        });
    });
    return true;
}

const generateToken = (type, req, callback) => {
    var time = new Date(), token = '';
    var payload = {
        iss: 'thisdemo',
        exp: '',
        userId: req.user.id
    };
    var options = { algorithm: 'HS256' };
    if (type === 'accessToken') {
        secret = 'XT6PRpRuehFsyMa2';
        time.setSeconds(time.getSeconds() + 3600);
    } else {
        secret = 'JWPVzFWkqGxoE2C2';
        time.setSeconds(time.getSeconds() + 1209600);
    }
    payload.exp = time.getTime();
    token = JWT.sign(payload, secret, options);

    callback(false, token);
}
