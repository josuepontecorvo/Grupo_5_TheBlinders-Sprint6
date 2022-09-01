const {body} = require ('express-validator');
const path = require ('path');

validations = [
    body('profileimg').custom((value, {req}) => {
        if (req.files.length > 0) {
            const validExtensions = ['.jpg', '.png', '.jpeg'];
            let files = req.files;
            files.forEach(file => {
                if(!validExtensions.includes(path.extname(file.filename))){
                    throw new Error('Las extenciones validas son: ' + validExtensions.join(', '));
                };
            })
        }
        return true;
    }),
    body('firstname')
        .notEmpty().withMessage('Campo obligatorio').bail()
        .isLength({min:2}).withMessage('Debes insertar un nombre con dos caracteres como mínimo'),
    body('lastname')
        .notEmpty().withMessage('Campo obligatorio').bail()
        .isLength({min:2}).withMessage('Debes insertar un apellido con dos caracteres como mínimo'),
    body('birthdate')
        .isDate().withMessage('Campo obligatorio'),
    body('email').notEmpty().withMessage('Campo obligatorio').bail()
        .isEmail().withMessage('Debes introducir in email válido'),
    body('password').custom((value, {req})=>{
        if (req.body.password && value.length < 8){
            throw new Error ('La contraseña debe contener 8 caracteres como mínimo')
        }
        return true;
    }),
    body('user-confirm-password').custom((value, {req})=> {
            if(req.body.password && value != req.body.password) {
                throw new Error('Las contraseñas no coinciden')
            }
            return true;
        }),
];

module.exports = validations;