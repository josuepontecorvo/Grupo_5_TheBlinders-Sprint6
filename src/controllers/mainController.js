const fs = require('fs');
const path = require('path');
const {Product, Image} = require('../dataBase/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

controller = {
    index : async (req,res) => {
        try {
            const products = await Product.findAll({
                include: [Image]
            });
            const highlight = products.filter(product => product.discount != 0);  
            highlight.splice(8);   
            res.render('main/index',{highlight,toThousand});
        } catch (error) {
            res.json({error: error.message})
        }
        
    },
    contact :(req,res) => res.render('main/contact'),
    help : (req,res) => res.render('main/help'),
    about : (req,res) => res.render('main/about'),
};

module.exports = controller;