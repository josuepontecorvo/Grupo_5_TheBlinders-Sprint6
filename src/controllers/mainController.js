const fs = require('fs');
const path = require('path');
const jsonDB = require('../model/jsonDatabase.js');
const productModel = jsonDB('products');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

controller = {
    index : (req,res) => {
        const products = productModel.readFile();
        const highlight = products.filter(product => product.discount != 0);  
        highlight.splice(8);   
        res.render('main/index',{highlight,toThousand});
    },
    contact :(req,res) => res.render('main/contact'),
    help : (req,res) => res.render('main/help'),
    about : (req,res) => res.render('main/about'),
};

module.exports = controller;