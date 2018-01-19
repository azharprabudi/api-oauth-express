const db = require('../db');

module.exports = {
    // tidak perlu di buat promise dikarenakan ini digunakan sebagai middleware
    checkUserLogin: (username, password, callback) => {
        let query = 'select * from tbl_users where username=\''+username+'\' password=\''+password+'\'';
        db.query(query, (err, results) => {
            callback(false, typeof(results) === 'object' && results.length === 1 ? results.shift() : null);
        });
    }
};