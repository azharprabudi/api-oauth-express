var userQuery = require('../query/user-query');

module.exports = (router, oauth) => {
    router.get('/', oauth.authorise(), getAllUsers);
    return router;
};

const getAllUsers = (req, res, next) => {
    console.log(req);
    userQuery.getAllUsers()
    .then(result => res.status(result.status).send(result.data))
    .catch(err => res.status(err.status).send(err.data));
};