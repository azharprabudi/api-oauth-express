var userQuery = require('../query/user-query');

module.exports = (router, oauth) => {
    router.get('/', oauth.authorise(), getAllUsers);
    router.get('/:id', oauth.authorise(), getUserDetail);
    return router;
};

const getAllUsers = (req, res, next) => {
    userQuery.getAllUsers()
    .then(result => res.status(result.status).send(result.data))
    .catch(err => res.status(err.status).send(err.data));
};

const getUserDetail = (req, res, next) => {
    if (req.params.id) {
        userQuery.getUserDetail(req.params.id)
        .then(result => res.status(result.status).send(result.data))
        .catch(err => console.log('err', err));
    } else {
        res.status(404).send({
            error: 'not found',
            message: ''
        });
    }
};