const db = require('../db');

module.exports = (router, oauth) => {
    router.post('/register', register);
    router.post('/login', oauth.grant(), loginUser);
    return router;
};

const register = (req, res, next) => {
    if (req.body.username !== '' &&
    req.body.password !== '') {
        // const query = 'insert into tbl_users (username, password) values'
        const userIsExist = db.query('select * from tbl_users where username=\''+username+'\'');
        if (userIsExist.length > 0) {
            return res.send(400, {
                code: 400,
                message: '',
                errors: 'Username exist please used another username'
            });
        }
        const insertUser = db.query('insert into tbl_users (username, password) values');
    }
    return res.send(403, {
        code: 403,
        message: '',
        errors: 'Username & password required'
    });
};

const loginUser = (req, res, next) => {

};