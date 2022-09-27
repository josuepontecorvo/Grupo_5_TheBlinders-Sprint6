const jsonDB = require('../model/jsonDatabase');
const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const { User, Role } = require('../dataBase/models');


controlador = {
    list: async (req,res) =>{ 
        try {

            let users = await User.findAll();
            users = users.map(user => {
                delete user.password;
                return user;
            })   
            res.render('users/user-index',{users});

        } catch (error) {
            res.json(error.message);
        }
        
    },

    detail: async (req,res) => { 
        try {
            
            const id = +req.params.id;
            const user = await User.findByPk(id, {include : [Role]}).then(data => data?.toJSON());
            
        
            if(req.session.userLogged && user?.email == req.session.userLogged.email) {
                delete user.password;
                res.render('users/userDetail', {user});
            } else {
                res.redirect('/usuarios/ingresar');
            }    

        } catch (error) {
            res.json(error.message);
        }
        
        
    },

    register: (req,res) => res.render('users/register'),

    store: async (req,res) => {
        try {

            let newUser = req.body;
            let errors = validationResult(req);
            // There are not validations errors 
            if (errors.isEmpty()) {
                // Email is unavailable (another user has the same email)
                if (await User.findOne({where:{'email' : req.body.email}})){

                    if (req.file) {
                        fs.unlinkSync(path.resolve(__dirname, '../../public/images/users/'+req.file.filename))
                    };

                    let errors = {
                        email : {
                            msg : 'Email existente'
                        }
                    }

                    delete req.body.password;
                    res.render('users/register',{errors , oldData: req.body});
                // Email is available -> create new user
                } else {

                    newUser.image = req.file?.filename ? req.file.filename : ['default-user.png'];
                    delete newUser["user-confirm-password"];
                    delete newUser["phoneNumber"];
                    newUser.password = bcrypt.hashSync(newUser.password,10);
                    await User.create({
                        ...newUser
                    })
                    res.redirect('/');

                }
            // There are validations errors 
            } else {

                if (req.file) {
                    fs.unlinkSync(path.resolve(__dirname, '../../public/images/users/'+req.file.filename))
                };

                delete req.body.password;
                res.render('users/register',{errors : errors.mapped(), oldData: req.body});

            };

        } catch (error) {
            res.json(error.message);
        }
        
    },

    login: (req,res) => res.render('users/login'),

    loginProcess: async (req,res) => {
        try {

            const errors = validationResult(req);
            // There are validations errors
            if(!errors.isEmpty()){
                return res.render('users/login',{errors : errors.mapped(), oldData : req.body});
            }
            // There are not validations errors
            let user = await User.findOne({where:{'email' : req.body.username}}).then(data => data?.toJSON());
            // User credentials are valid
            if (user && (bcrypt.compareSync(req.body.password, user.password))) {

                delete user.password; 
                req.session.userLogged = user;

                if(req.body.rememberUser) {
                    res.cookie('userEmail', req.body.username, { maxAge: 1000 * 60 * 60 });
                }
                
                return res.redirect('/');
            // User credentials are not valid
            } else {

                let errors = {
                    username : {
                        msg: 'Credenciales inválidas'
                    },
                    password : {
                        msg: 'Credenciales inválidas'
                    }
                }

                delete req.body.password;
                return res.render('users/login',{errors , oldData : req.body});

            };

        } catch (error) {
            res.json(error.message)
        }
        
    },

    cart: (req,res) => res.render('users/product-cart'),

    edit: async (req,res) => { 

        try {
            
            const id = +req.params.id;
            const user = await User.findByPk(id);    
            res.render('users/userEdit',{user});

        } catch (error) {
            res.json(error.message);
        }
        
    },

    update: async (req,res) => {

        try {

            let idToUpdate = req.params.id;
            const userToUpdate = await User.findByPk(idToUpdate);  

            let errors = validationResult(req);
            // There are not validations errors
            if (errors.isEmpty()) {
                // The user changed the email and the new email is in used by another user
                const emailVerification = await User.findOne({where: { 'email': req.body.email }})
                if (userToUpdate.email !== req.body.email && emailVerification) {

                    if (req.file) {
                        fs.unlinkSync(path.resolve(__dirname, '../../public/images/users/'+req.file.filename))
                    };

                    let errors = {
                        email : {
                            msg : 'Email existente'
                        }
                    }
                    delete req.body.password;
                    return res.render('users/userEdit',{errors , oldData: req.body, idToUpdate, user:userToUpdate});

                }
                // The user changed the email and the new email is not in use by another user or the user didn´t change the email.
                let dataUpdate = req.body;
                dataUpdate.image = req.file?.filename ? req.file.filename : userToUpdate.image;
                // The user changed the image
                if (userToUpdate.image != dataUpdate.image ) {
                    fs.unlinkSync(path.resolve(__dirname, '../../public/images/users/'+userToUpdate.image));
                };
                 // The user changed the password
                if(dataUpdate.password != "") {

                    delete dataUpdate["user-confirm-password"];
                    delete dataUpdate["phoneNumber"];
                    let userUpdate = {
                        ...dataUpdate,
                    }
                    userUpdate.password = bcrypt.hashSync(userUpdate.password,10);
                    await User.update({...userUpdate},{where: {id: idToUpdate}});
                    delete userUpdate.password;
                    userUpdate.id = idToUpdate
                    req.session.userLogged = userUpdate;
                    res.redirect('/');
                // The user didn´t change the password        
                } else {

                    delete dataUpdate["user-confirm-password"];
                    delete dataUpdate["phoneNumber"];
                    dataUpdate.password = userToUpdate.password;
                    let userUpdate = {
                        ...dataUpdate,
                    }
                    await User.update({...userUpdate},{where: {id: idToUpdate}});
                    delete userUpdate.password;
                    userUpdate.id = idToUpdate
                    req.session.userLogged = userUpdate;
                    res.redirect('/');

                }
            // There are validations errors
            } else {
                if (req.file) {
                    fs.unlinkSync(path.resolve(__dirname, '../../public/images/users/'+req.file.filename))
                };

                delete req.body.password;
                delete userToUpdate.password;

                res.render('users/userEdit',{errors: errors.mapped(), oldData : req.body, idToUpdate, user:userToUpdate});
            }

        } catch (error) {
            res.json(error.message)
        }
        
    },

    delete: async (req,res) => {

        let idToDelete = req.params.id;
        let user = await User.findByPk(idToDelete);

        let pathToImage = path.join(__dirname, '../../public/images/users/'+ user.image);
        fs.unlinkSync( pathToImage );

        await User.destroy({where:{"id": idToDelete}});
        res.clearCookie('userEmail')
        req.session.destroy();
        res.redirect('/usuarios/ingresar');

    },

    logout: (req,res) => {

        res.clearCookie('userEmail')
        req.session.destroy();
        res.redirect('/usuarios/ingresar');
        
    },

};

module.exports = controlador;