const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const multerMiddleware = require('../middleware/multer');
const userRegisterValidation = require('../middleware/userRegisterValidation');
const userEditValidation = require('../middleware/userEditValidation');
const userLoginValidation = require('../middleware/userLoginValidation');
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const uploadFile = multerMiddleware('images/users',"user");


router.get('/', authMiddleware , usersController.list);
router.get('/detalle/:id', usersController.detail);
router.get('/registro', guestMiddleware , usersController.register);
router.post('/registro', uploadFile.single('image'), userRegisterValidation, usersController.store);
router.get('/ingresar', guestMiddleware , usersController.login);
router.get('/logout' , usersController.logout);
router.post('/ingresar', userLoginValidation , usersController.loginProcess);
router.get('/carrito', usersController.cart);
router.get('/editar/:id', usersController.edit);
router.put('/editar/:id',uploadFile.single('image'),  userEditValidation ,usersController.update);
router.delete('/:id', usersController.delete);

module.exports = router;