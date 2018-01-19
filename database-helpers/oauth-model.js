const db = require('../db');

module.exports = () => {
    return {
        getClient: (clientID, clientSecret, callback) => {
            // console.log('getclient', { clientID, clientSecret, callback });
            callback();
        },
        saveAccessToken: saveAccessToken,
        getUser: getUser,
        grantTypeAllowed: grantTypeAllowed,
        getAccessToken: getAccessToken
    }
};

const getClient = (clientID, clientSecret, callback) => {
    return true;
}

const saveAccessToken = (accessToken, clientID, expires, user, callback) => {
    console.log('save token');
    return true;
}

const getUser = (username, password, callback) => {
    console.log('get user');
    return true;
}

const grantTypeAllowed = (clientID, grantType, callback) => {
    console.log('grantType');
    return true;
}

const getAccessToken = (bearerToken, callback) => {
    console.log('grantAcces ');
    return true;
}
