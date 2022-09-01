guestMiddleware = function(req, res, next) {
    if( req.session.userLogged ) {
        return res.redirect('/usuarios/detalle/' + req.session.userLogged.id)
    }
    next();
};
module.exports = guestMiddleware;