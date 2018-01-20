const sha1 = require('sha1');
const db = require('../db');

module.exports = {
    // tidak perlu di buat promise dikarenakan ini digunakan sebagai middleware
    checkUserLogin: (username, password, callback) => {
        var query = 'select * from tbl_users a join tbl_user_group b on a.user_group_id = b.id where a.username=\''+username+'\' and a.password=\''+sha1(password)+'\' and a.is_active = 1';
        db.query(query, (err, results) => {
            callback(false, typeof(results) === 'object' && results.length === 1 ? results.shift() : null);
        });
    },
    saveAccessToken: (accessToken, userId, callback) => {
        var query =  'insert into access_tokens (access_token, user_id) values (\''+accessToken+'\', \''+userId+'\') ON DUPLICATE KEY UPDATE access_token = \''+accessToken+'\'';
        db.query(query, (err, results) => {
            callback(err);
        });
    }
};