const router = require("express").Router();
const User = require('../model/userModel');
const signToken = require('../libs/jwt');
const passport = require('passport');
const passportConfig = require('../libs/passport');

router.post('/signup', (req, res) => {
    const { email, username, password} = req.body;
    User.findOne({username}, (err,user) => {
        if(err){
            res.status(500).json({message: {msg: "Error has occured1", magErr: true}});
        }
        if(user){
            res.status(200).json({message: {msg: "This username is already taken", msgErr: true}});
        }else{
            const newUser = new User({email, username, password});
            newUser.save(err => {
                if(err)
                    res.status(500).json({message: {msg: "Error has occured2", magErr: true}});
                else
                    res.status(201).json({message: {msg: "Account successfully created", magErr: true}});

            });
        }
    });
});


router.post('/signin', passport.authenticate('local', {session : false}), (req, res) => {
    if(req.isAuthenticated()){
        const {_id, username, role} = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, {httpOnly: true, sameSite: true});
        res.status(200).json({isAuthenticated: true, user : {username, role,}})
    }
})


/*sign out */

router.get('/signout', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.clearCookie('access_token');
    res.json({isAuthenticated: false, user: {username : "", role: ""}});
})


/*authen check */
router.get('/authenticated',  passport.authenticate('jwt', {session : false}), (req, res) => {
    const {username, role} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username, role}});
})


module.exports = router;