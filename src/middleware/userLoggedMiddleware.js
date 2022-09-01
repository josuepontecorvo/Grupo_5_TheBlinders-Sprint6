const jsonDB = require('../model/jsonDatabase');
const userModel = jsonDB('users');

function userLoggedMiddleware (req,res,next) {
    if(req.cookies.userEmail) {
        req.session.userLogged = userModel.findByField('email', req.cookies.userEmail);
    }
    res.locals.isLogged = req.session.userLogged;

    next();
};

module.exports = userLoggedMiddleware;  