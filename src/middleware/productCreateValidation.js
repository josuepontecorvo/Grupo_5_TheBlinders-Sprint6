const {body} = require('express-validator');
const path = require('path');

validations = [
    body('categoryId').notEmpty().withMessage('Debe seleccionar una categoria de producto.'),
    body('typeId').notEmpty().withMessage('Debe seleccionar un tipo de producto.'),
    body('description').isLength({min:8}).withMessage('Debe completar la descripción y debe tener mínimo 8 caracteres.'),
    body('image').custom((value,{req})=> {
        if(!req.files.length > 0){
            throw new Error('Debe cargar una imagen');
        } else {
            let extensions = [".jpg", ".png", ".jpeg"];
            let files = req.files;
            files.forEach(file => {
                let fileExtension = path.extname(file.originalname);
                if(!extensions.includes(fileExtension)){
                    throw new Error('Las extensiones de imagén aceptada son'+ extensions.join(' '));
                };
            })
        }
        return true;
    }),
    body('price').isFloat({min:0}).withMessage('El precio debe ser un número mayor a 0'),
    body('discount').isInt({max:100}).withMessage('El descuento debe ser un número menor a 100% '),
    body('brandId').notEmpty().withMessage('Debe ingresar la marca del producto'),
    body('model').notEmpty().withMessage('Debe ingresar el modelo del producto')

];

module.exports = validations;