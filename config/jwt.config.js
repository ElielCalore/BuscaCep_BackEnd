const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    const {_id, name} = user;

    const signature = process.env.TOKEN_SIGN_SECRET;
    const expiration = "1h";

    return jwt.sign({_id, name}, signature, {
        expiresIn: expiration,
    })
}

module.exports = generateToken;