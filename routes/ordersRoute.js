const router = require('express').Router();
const passport = require('passport');
const passportConfig = require('../libs/passport');
const Orders = require('../model/orders.Model');

const auth =  passport.authenticate('jwt', {session: false});


//create

router.post('/add', auth, async(req, res) => {
    try {
        const { orderItems, address, payment, totalPrice } = req.body;
        const order = await  Orders.create({
            userId: req.user._id,
            orderItems,
            address,
            payment,
            totalPrice
        });
        res.status(201).json({order,message: {msg: " success", magErr: true}});
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
})

//fetch

router.get('/myorders', auth, async(req, res) => {
    try {
        const order = await Orders.find({userId: req.user._id})
        .populate("userId", "_id username");
        res.status(200).json({order, message: {msg: "order successfully fetch",magErr: false}});

    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error
    })
}})

//all
router.get('/all', auth, async(req, res) => {
    if(req.user.role === 'admin'){
        try {
            const orders = await Orders.find().populate("userId", "_id username");;
            res.status(200).json({orders})
        } catch (error) {
            res.status(500).json({
            status: 'fail',
            message: error
        })
        }

    }else{
        res.status(403).json({message: { msgBody: "You'er not admin", msgError: true}})
    }

} )


module.exports = router;