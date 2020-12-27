const jwt = require('jsonwebtoken');

const signToken = (userId) => {
    return jwt.sign({
        iss: "secretcode",
        sub: userId
    },"secretcode", {expiresIn: "1h"});
}




module.exports = signToken ;