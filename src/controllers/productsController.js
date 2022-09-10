const db = require('../dataBase/models');
const  {validationResult} = require('express-validator');
const path = require('path');
const fs = require('fs');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

controller = {

    products: async (req,res) => {
        try {
            const products =  await db.Product.findAll({
                include: [db.Image]
            });
            //res.json(products)
            res.render('products/products', {products,toThousand})
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

    create: async (req,res) => {
        try {
            const brakes = await db.Brake.findAll();
            const categories = await db.Category.findAll();
            const brands = await db.Brand.findAll();
            const colors = await db.Color.findAll();
            const frames = await db.Frame.findAll();
            const types = await db.Type.findAll();
            const wheelSizes = await db.WheelSize.findAll();
            const sizes = await db.Size.findAll();
            const shifts = await db.Shift.findAll();
            const suspentions = await db.Suspension.findAll();   
            res.render('products/productCreate', {brakes,categories,brands,colors,frames,types,wheelSizes,sizes,shifts,suspentions})
        } catch (error) {
            res.json({error: error.message});
        }
    },

    store: async (req, res) => {
        try {
            let product = req.body;

            // Validaciones de productos

                const errors = validationResult(req);
            if (errors.isEmpty()) {
                let imagenes= []
                const productId = await db.Product.create(product);
                for(let i = 0 ; i<req.files.length;i++) {
                    imagenes.push({
                        fileName: req.files[i].filename,
                        productId: productId.id
                    })
                }
                if (imagenes.length > 0) {
                    await db.Image.bulkCreate(imagenes)
                    res.redirect('/productos')
                } else {
                    await db.Image.create([{
                        fileName: 'default-product-image.png',
                        productId: product.id,
                    }])
                    res.redirect('/productos')
                }
                
                
            } else {
                if (req.files) {
                    let {files} = req;
                for (let i = 0 ; i< files.length; i++) {
                    fs.unlinkSync(path.resolve(__dirname, '../../public/images/'+files[i].filename))
                }
                };
                const brakes = await db.Brake.findAll();
                const categories = await db.Category.findAll();
                const brands = await db.Brand.findAll();
                const colors = await db.Color.findAll();
                const frames = await db.Frame.findAll();
                const types = await db.Type.findAll();
                const wheelSizes = await db.WheelSize.findAll();
                const sizes = await db.Size.findAll();
                const shifts = await db.Shift.findAll();
                const suspentions = await db.Suspension.findAll();
                res.render('products/productCreate',{errors: errors.mapped(), oldData: req.body,brakes,categories,brands,colors,frames,types,wheelSizes,sizes,shifts,suspentions});
            }
        } catch (error) {
            res.json({error: error.message});
        }
        
    },

    edit: async (req,res) => { 
        try {
            const brakes = await db.Brake.findAll();
            const categories = await db.Category.findAll();
            const brands = await db.Brand.findAll();
            const colors = await db.Color.findAll();
            const frames = await db.Frame.findAll();
            const types = await db.Type.findAll();
            const wheelSizes = await db.WheelSize.findAll();
            const sizes = await db.Size.findAll();
            const shifts = await db.Shift.findAll();
            const suspentions = await db.Suspension.findAll();
            const idToUpdate = +req.params.id;
            const product = await db.Product.findByPk(idToUpdate,{
                include: [db.Brake,db.Brand,db.Image,db.WheelSize,db.Frame,db.Shift,db.Suspension,db.Category,db.Color,db.Size,db.Type]
            });    
            res.render('products/productEdit',{product, idToUpdate,brakes,categories,brands,colors,frames,types,wheelSizes,sizes,shifts,suspentions});
        } catch (error) {
            res.json({error: error.message});
        }
        
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

    update: async (req,res) => {
        try {
            // Validaciones de productos

            const errors = validationResult(req);
            if (errors.isEmpty()) {

                let idToUpdate = req.params.id;
                let dataUpdate = req.body;
                let imagenes= []
                const product = await db.Product.update({
                    ...dataUpdate,
                }, {
                    where: {
                        id: idToUpdate
                    }
                });
                for(let i = 0 ; i<req.files.length;i++) {
                    imagenes.push({
                        fileName: req.files[i].filename,
                        productId: idToUpdate
                    })
                }
                if (imagenes.length > 0) {
                    await db.Image.bulkCreate(imagenes)
                    res.redirect('/productos')
                }
            } else {
                if (req.files) {
                    let {files} = req;
                    for (let i = 0 ; i< files.length; i++) {
                        fs.unlinkSync(path.resolve(__dirname, '../../public/images/'+files[i].filename))
                    }
                };
                res.render('products/productEdit',{errors: errors.mapped(), oldData: req.body, idToUpdate });
            }
        } catch (error) {
            res.json({error: error.message});
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