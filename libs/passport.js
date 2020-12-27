const passport = require("passport");
const User = require('../model/userModel');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;

const cookieExtractor = (req) => {
    let token = null;
    if(req && req.cookies){
        token = req.cookies["access_token"]
    }
    return token;
}

passport.use(new JwtStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey : "secretcode"
},(payload, done) => {

    User.findOne({_id : payload.sub}, (err, user) => {
        if(err)
            return done(err, false);
        if(user)
            return done(null, user);
        else
            return done(null, false);
    })
}))


passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({username}, (err, user) => {
        if(err)
            return done(err)
        if(!user)
            return done(null, false);
        user.comparePassword(password, done);
    })
}))