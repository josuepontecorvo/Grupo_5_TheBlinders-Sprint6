const { User } = require('../dataBase/models');

async function userLoggedMiddleware (req,res,next) {
    if(req.cookies.userEmail) {
        req.session.userLogged = await User.findOne({where: {'email' : req.cookies.userEmail}});
    }
    res.locals.isLogged = req.session.userLogged;

    next();
};

module.exports = userLoggedMiddleware;  