const {body} = require ('express-validator');

validations = [
    body('username')
        .notEmpty().withMessage('Debes completar el campo para poder ingresar').bail()
        .isEmail().withMessage('El usuario debe ser un email válido'),
    body('password')
        .notEmpty().withMessage('Debes completar el campo para poder ingresar').bail()
        .isLength({min: 8}).withMessage('La contraseña debe contener mínimo 8 caracteres')
];

module.exports = validations;