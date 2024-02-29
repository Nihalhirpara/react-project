const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AdminModel = require('./model/AdminModel');
const cors = require('cors');
const Products = require('./model/ProductModel');

mongoose.connect('mongodb+srv://nihalhirpara:nihal@cluster0.c6zgy7x.mongodb.net/factory?retryWrites=true&w=majority').then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());
    app.get('/products', async (req, res) => {
        const data = await Products.find();
        res.send(data);
    });

    app.get('/product/:id', async (req, res) => {
        const data = await Products.findOne({
            _id: req.params.id
        });
        res.send(data);
    });

    app.post('/admin/add',async (req,res)=>{
        const pro = new Products();
        pro.ProductName = req.body.ProductName;
        pro.ProductWarranty = req.body.ProductWarranty;
        pro.ProductPrice = req.body.ProductPrice;
        pro.ProductImage = req.body.ProductImage;
        pro.ProductWeight = req.body.ProductWeight;
        pro.ProductCategory = req.body.ProductCategory;
        const data = await pro.save();
        res.send(data);
    });

    app.put('/admin/edit/:id', async (req, res) => {
        const pro = await Products.findOne({ _id: req.params.id });
        pro.ProductName = req.body.ProductName;
        pro.ProductWarranty = req.body.ProductWarranty;
        pro.ProductPrice = req.body.ProductPrice;
        pro.ProductImage = req.body.ProductImage;
        pro.ProductWeight = req.body.ProductWeight;
        pro.ProductCategory = req.body.ProductCategory;
        console.log("edit Method called", req.body);
        await pro.save();
        res.send(pro);
    });

    app.delete('/product/:id', async (req, res) => {
        const data = await Products.deleteOne({ _id: req.params.id });
        res.send(data);
    });
    
    app.listen(3003, () => {
        console.log("Server started at @ 3003");
    })


    app.get('/admins', async (req, res) => {
        const data = await AdminModel.find();
        res.send(data);
    });
     
    app.get('/admin/:id', async (req, res) => {
        const data = await AdminModel.findOne({
            _id: req.params.id
        });
        res.send(data);
    });
});