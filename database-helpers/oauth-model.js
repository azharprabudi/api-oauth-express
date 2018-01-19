const accessTokenQuery = require('../query/accesstoken-query');
const db = require('../db');

module.exports = () => {
    return {
        getClient: getClient,
        grantTypeAllowed: grantTypeAllowed,
        getUser: getUser,
        saveAccessToken: saveAccessToken,
        getAccessToken: getAccessToken
    }
};

const getClient = (clientID, clientSecret, callback) => {
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
    console.log(callback);
    // saveAccessToken.checkUserLogin(username, password, callback);
}

const saveAccessToken = (accessToken, clientID, expires, user, callback) => {
    accessTokenQuery.saveAccessToken(accessToken, user.id);
}

const getAccessToken = (bearerToken, callback) => {
    console.log('grantAcces ');
    return true;
}
