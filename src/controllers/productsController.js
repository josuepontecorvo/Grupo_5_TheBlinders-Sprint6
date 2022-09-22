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

    delete: async (req,res) => {
        try {
            const { id } = req.params;
            let imagenes = await db.Image.findAll({
                where: {productId: id}
            });
            if (imagenes) {
                let files = imagenes.filter(image => image.fileName != 'default-product-image.png');
            for (let i = 0 ; i< files.length; i++) {
                fs.unlinkSync(path.resolve(__dirname, '../../public/images/'+files[i].fileName))
            }
            };
            await db.Image.destroy({
                where: {
                    productId: id
                }
            }, {
                force: true
            });
            await db.Product.destroy({
                where: {
                    id
                }
            }, {
                force: true
            });
            res.redirect("/productos")
        } catch (error) {
            res.json(error.message)
        }
    },

    update: async (req,res) => {
        try {
            // Validaciones de productos

            let idToUpdate = req.params.id;
            const errors = validationResult(req);
            if (errors.isEmpty()) {

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
                    const oldImages = await db.Image.findAll({where: {productId: idToUpdate}})
                    oldImages.forEach( image => {
                        fs.unlinkSync(path.resolve(__dirname, '../../public/images/'+image.fileName))
                    })
                    await db.Image.destroy({where: {productId: idToUpdate}})
                    await db.Image.bulkCreate(imagenes)
                }
                res.redirect('/productos')
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
                const product = await db.Product.findByPk(idToUpdate,{
                    include: [db.Brake,db.Brand,db.Image,db.WheelSize,db.Frame,db.Shift,db.Suspension,db.Category,db.Color,db.Size,db.Type]
                });
                res.render('products/productEdit',{errors: errors.mapped(), oldData: req.body, idToUpdate,product, idToUpdate,brakes,categories,brands,colors,frames,types,wheelSizes,sizes,shifts,suspentions });
            }
        } catch (error) {
            res.json({error: error.message});
        }
    },
    
    filter: async (req,res) => {
        try {
            let filtro = req.query;
            const products = await db.Product.findAll({
                include: [db.Brake,db.Brand,db.Image,db.Frame,db.Shift,db.Category,db.Type]
            })
            res.render('products/products', {products,toThousand,filtro})
        } catch (error) {
            res.json({error: error.message});
        }
        
    },

    search: async (req,res) => {
        try {
            let busqueda = req.query.search;
            const products = await db.Product.findAll({
                include: [db.Brake,db.Brand,db.Image,db.Frame,db.Shift,db.Category,db.Type]
            })
        res.render('products/products', {products,toThousand,busqueda})
        } catch (error) {
            res.json({error: error.message});
        }
        
    },

};

module.exports = controller;