const router = require("express").Router();
const passport = require('passport');
const passportConfig = require('../libs/passport');

const Product = require('../model/productModel');


class APIfeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    filtering() {
        const queryobj = { ...this.queryString };
        const excludedfields = ['page', 'sort', 'limit'];
        excludedfields.forEach(el => delete queryobj[el]);
        let querystr = JSON.stringify(queryobj);
        querystr = querystr.replace(
            /\b(gte|gt|lt|lte)\b/g,
            match => `$${match}`
        );
        this.query.find(JSON.parse(querystr));
        return this
    }
    sorting() {
        if(this.queryString.sort) {
            const sortby = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortby);
        }else {
            this.query = this.query.sort('-createdAt')
        }
        return this;
    } 
    paginating() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 9;
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit);
        return this;
    }

} 


//find
router.get('/fetch', async(req, res) => {
    try {
        const features = new APIfeatures(Product.find(), req.query)
        .filtering()
        .sorting()
        .paginating();

        const products = await features.query;

        res.status(200).json({
            status: 'success',
            result: products.length,
            data: {
                products
            }
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
})

/*create product */
router.post('/create', passport.authenticate('jwt', {session: false}),async (req,res) => {
    if(req.user.role === 'admin'){
        try {
            const { name, price, description, images, countInStock, colors, size, tags, categories } = req.body;
            const newProduct = await Product.create({ name, price, description, images, countInStock, colors, size, tags, categories });
            res.status(201).json({message: {msg: "product successfully created",newProduct, magErr: true}});
        } catch (error) {
            res.status(500).json({
            status: 'fail',
            message: error
        })
        }

    }else{
        res.status(403).json({message: { msgBody: "You'er not admin", msgError: true}})
    }


})

//findOne
router.get('/fetch/:id', async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: product
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
});


//relateitem
router.get('/relate', async (req, res) => {
    try {
        const cate = req.query.cate;
        const relate = await Product.find({categories: { $all : [cate]}});
        res.status(200).json({
            status: 'success',
            data: relate
        })

    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
})

//search
// router.get('/search', (req, res) => {
//     const field = req.query.name;
//     Product.find({$text: { $search: field}})
//         .then(data => res.send({data}))
//         .catch(err => res.send({err}))
// })
  
module.exports = router;        