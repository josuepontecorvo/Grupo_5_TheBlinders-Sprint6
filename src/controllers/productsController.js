const db = require('../dataBase/models');
const  {validationResult} = require('express-validator');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

controller = {

    products: async (req,res) => {
        try {
            const products =  await db.Product.findAll({
                include: [db.Image]
            });
            res.render('products/products', {products,toThousand});
        } catch (error) {
            res.json({error: error.message});
        }
        
    },

    detail: async (req,res) => {
        try {
            const id = +req.params.id;
            const product = await db.Product.findByPk(id, {
                include: [db.Brake,db.Brand,db.Image,db.WheelSize,db.Frame,db.Shift,db.Suspension]
            });    
            res.render('products/productDetail', {product,toThousand})
        } catch (error) {
            res.json({error: error.message});
        }
        
    },

    create: (req,res) => res.render('products/productCreate'),

    store: (req, res) => {
        let product = req.body;

        // Validaciones de productos

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            let imagenes= []
            for(let i = 0 ; i<req.files.length;i++) {
            imagenes.push(req.files[i].filename)
            }
            product.image = imagenes.length > 0 ? imagenes : ['default-product-image.png'];
            productModel.create(product);
            res.redirect('/productos')
        }else {
            if (req.files) {
                let {files} = req;
            for (let i = 0 ; i< files.length; i++) {
                fs.unlinkSync(path.resolve(__dirname, '../../public/images/'+files[i].filename))
            }
            };
            res.render('products/productCreate',{errors: errors.mapped(), oldData: req.body});
        }

        
    },

    edit: (req,res) => { 
        const id = +req.params.id;
        const product = productModel.find(id);    
        res.render('products/productEdit',{product});
    },

    delete: (req,res) => {
        let idToDelete = req.params.id;
        let product = productModel.find(idToDelete);
        if (product.image) {
            let files = product.image;
            files = files.filter(image => image != 'default-product-image.png');
        for (let i = 0 ; i< files.length; i++) {
            fs.unlinkSync(path.resolve(__dirname, '../../public/images/'+files[i]))
        }
        };
        productModel.delete(idToDelete);
        res.redirect('/productos');
    },

    update: (req,res) => {
        let idToUpdate = req.params.id;
        let dataUpdate = req.body;

        // Validaciones de productos

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const product = productModel.find(idToUpdate);  
            let imagenes= []
            for(let i = 0 ; i<req.files.length;i++){
                imagenes.push(req.files[i].filename)
            }
            dataUpdate.image =imagenes.length > 0 ? imagenes : product.image;

            if (imagenes.length > 0 && product.image) {
                let files = product.image;
                files = files.filter(image => image != 'default-product-image.png')
            for (let i = 0 ; i< files.length; i++) {
                fs.unlinkSync(path.resolve(__dirname, '../../public/images/'+files[i]));
            }
            };

            let productUpdate = {
                id: idToUpdate,
                ...dataUpdate,
            }
            productModel.update(productUpdate);
            res.redirect('/productos');
        }else {
            if (req.files) {
                let {files} = req;
            for (let i = 0 ; i< files.length; i++) {
                fs.unlinkSync(path.resolve(__dirname, '../../public/images/'+files[i].filename))
            }
            };
            res.render('products/productEdit',{errors: errors.mapped(), oldData: req.body, idToUpdate });
        }

        
    },
    
    filter: (req,res) => {
        let filtro = req.query;
        const products = productModel.readFile();
        res.render('products/products', {products,toThousand,filtro})
    },

    search: (req,res) => {
        let busqueda = req.query.search;
        const products = productModel.readFile();
        res.render('products/products', {products,toThousand,busqueda})
    },

};

module.exports = controller;