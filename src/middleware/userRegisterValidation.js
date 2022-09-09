const {body} = require ('express-validator');
const path = require ('path');

validations = [
    body('image').custom((value, {req}) => {
        if (!req.file) {
            throw new Error('Debes insertar una imagen de perfil');
        }else {
            const validExtensions = ['.jpg', '.png', '.jpeg'];
            let file = req.file;
            if(!validExtensions.includes(path.extname(file.filename))){
                throw new Error('Las extenciones validas son: ' + validExtensions.join(', '));
            };
        }
        return true;
    }),
    body('firstName')
        .notEmpty().withMessage('Campo obligatorio').bail()
        .isLength({min:2}).withMessage('Debes insertar un nombre con dos caracteres como mínimo'),
    body('lastName')
        .notEmpty().withMessage('Campo obligatorio').bail()
        .isLength({min:2}).withMessage('Debes insertar un apellido con dos caracteres como mínimo'),
    body('birthdate')
        .isDate().withMessage('Campo obligatorio'),
    body('email').notEmpty().withMessage('Campo obligatorio').bail()
        .isEmail().withMessage('Debes introducir in email válido'),
    body('password').notEmpty().withMessage('Campo obligatorio').bail()
        .isLength({min:8}).withMessage('La contraseña debe contener al menos 8 caracteres'),
    body('user-confirm-password').notEmpty().withMessage('Campo obligatorio').bail()
        .custom((value, {req})=> {
            if(value != req.body.password){
                throw new Error('Las contraseñas no coinciden')
            }
            return true;
        }),
    body('userTerms').notEmpty().withMessage('Debes aceptar los terminos para continuar')
];

module.exports = validations;