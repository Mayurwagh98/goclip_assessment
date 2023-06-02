const jwt = require("jsonwebtoken")

const sendToken = (res, message, statusCode, user) =>{

    let token = jwt.sign({_id: user._id}, process.env.SECRET_KEY)

    return res.status(statusCode).cookie("token", token,{
        httpOnly: true,
        maxAge: 15 * 60000, // cookie will be deleted after 15 mins
        sameSite: process.env.NODE_ENV === "Development"? "lax":"none", // to be able to access from diff domains
        secure: process.env.NODE_ENV === "Development"? false: true
    }).json({
        success:true,
        message
    })
}

module.exports = sendToken