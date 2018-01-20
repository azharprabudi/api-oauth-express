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
            let query = 'select a.id, a.name, b.alias from tbl_users a join tbl_user_group b on a.user_group_id = b.id';
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
    },
    getUserDetail: userId => {
        return new Promise((resolve, reject) => {
            var data = {};
            let queryGetDetail = 'select *, ((master_2.gaji_harian * master_2.remaining_presensi) + master_2.gaji_pokok) as remaining_payroll from (select *, (select count(id) from `api-oauth`.tbl_handle_order where user_id = \''+ userId +'\') as remaining_target, (select count(id) from `api-oauth`.tbl_presensi where user_id = \''+ userId +'\') as remaining_presensi from (select a.id, a.name, b.gaji_pokok, b.gaji_harian, c.max_target from `api-oauth`.tbl_users a INNER JOIN  `api-oauth`.tbl_payroll b on a.payroll_id = b.id INNER JOIN `api-oauth`.tbl_target c on a.target_id = c.id) as master_1) as master_2';
            db.query(queryGetDetail, (err, result) => {
                if (result.length === 1) {
                    data = result.shift();
                    let getDetailAbsensi = 'select * from tbl_presensi where user_id=\''+ userId +'\'';
                    db.query(getDetailAbsensi, (err, result) => {
                        if (result.length > 0) {
                            data = Object.assign({}, data, { detailPresensi: result });
                            resolve({
                                status: 200,
                                data: {
                                    error: '',
                                    message: data
                                }
                            });
                        } else {
                            reject(err);
                        }
                    });
                } else {
                    reject(err);
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
