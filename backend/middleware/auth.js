const User = require("../models/User.model")
const jwt = require("jsonwebtoken")

let isAuthenticated = async(req, res, next) =>{

    const {token} = req.cookies

    if(!token){
        return res.status(400).json({
            status: false,
            message: "Login First"
        })
    }

    const decoded = await jwt.verify(token, process.env.SECRET_KEY)

    req.user = await User.findById(decoded._id)

    next()
}

module.exports = isAuthenticated