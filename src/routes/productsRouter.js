const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multerMiddleware = require('../middleware/multer')
const uploadFile = multerMiddleware('images','product');
const productCreateValidation = require('../middleware/productCreateValidation');
const productEditValidation = require('../middleware/productEditValidation');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');


router.get('/', productsController.products);
router.get('/filtrar', productsController.filter);
router.get('/buscar', productsController.search);
router.get('/detalle/:id', productsController.detail);
router.get('/editar/:id', productsController.edit);
router.get('/create',adminMiddleware , productsController.create);
router.post('/create',uploadFile.array('image'), productCreateValidation,  productsController.store);
router.delete('/:id', productsController.delete);
router.put('/:id',uploadFile.array('image'),productEditValidation , productsController.update);

module.exports = router;