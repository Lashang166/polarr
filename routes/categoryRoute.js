const router = require('express').Router();
const passport = require('passport');
const passportConfig = require('../libs/passport');

const Category = require('../model/categoryModel');

router.post('/create', passport.authenticate('jwt', {session: false}) , async(req, res) => {
    if(req.user.role === 'admin'){
        try {
            const { name } = req.body;
            const Cate= await Category.create({ name });
            res.status(201).json({message: {msg: "cate successfully created",Cate, magErr: true}});
       
        } catch (error) {
            res.status(500).json({
            status: 'fail',
            message: error
        })
        }

    }else{
        res.status(403).json({message: { msgBody: "You'er not admin", msgError: true}})
    }
});

router.get('/relate', async (req, res) => {
    try {
        const cate = req.query.cate;
        const Cate = await Category.find({name: cate});

        res.status(201).json({message: {msg: "cate successfully related",Cate, magErr: true}});

    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error
    })
}
})



module.exports = router;