const userQuery = require('../query/user-query');

module.exports = (router, oauth) => {
    router.post('/register', register);
    router.post('/login', oauth.grant(), loginUser);
    return router;
};

const register = (req, res, next) => {
    if (req.body.username !== '' &&
    req.body.password !== '' &&
    req.body.user_group_id) {
        userQuery.registerUser(req.body)
        .then(result => {
            res.status(result.status).send(result.data);
        }).catch(err => {
            res.status(err.status).send(err.data);
        })
    } else {
        res.status(403).send({ code: 403, message: '', errors: 'Username & password required' });
    }
};

const loginUser = (req, res, next) => {

};