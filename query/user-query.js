const sha1 = require('sha1');
const db = require('../db');

module.exports = {
    registerUser: data => {
        return new Promise((resolve, reject) => {
            checkExistingUser(data.username)
            .then(() => {
                saveUserToDb(data)
                .then(result => resolve(result))
                .catch(err => reject(err));
            })
            .catch(err => reject(err));
        });
    },
    getAllUsers: () => {
        return new Promise((resolve, reject) => {
            let query = 'select * from tbl_users a join tbl_user_group b on a.user_group_id = b.id';
            db.query(query, (err, results) => {
                if (err) {
                    reject({
                        status:404,
                        data: {error: err, message: ''}
                    })
                } else {
                    resolve({
                        status: 200,
                        data: {error: '', message: results}
                    });
                }
            });
        });
    }
};

const checkExistingUser = username => {
    return new Promise((resolve, reject) => {
        let query = 'select * from tbl_users where username=\''+username+'\'';
        db.query(query, (err, users) => {
            if (err) {
                reject({
                    status: 404,
                    data: {error: err,  message: ''}
                });
            } else {
                if (users.length > 0) {
                    reject({
                        status: 400,
                        data: {error: '', message: 'User already exist'}
                    });
                } else resolve();
            }
        });
    });
};

const saveUserToDb = data => {
    return new Promise((resolve, reject) => {
        let query = 'insert into tbl_users (username, password, user_group_id, is_active) values (\''+data.username+'\', \''+sha1(data.password)+'\', \''+data.user_group_id+'\', \'1\')';
        db.query(query, (err, result) => {
            if (err) {
                reject({
                    status: 400,
                    data: {error: err, message: ''}
                });
            } else {
                resolve({
                    status: 200,
                    data: {error: '', message: result}
                });
            }
        });
    });
};
