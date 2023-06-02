const { ErrorHandler } = require("../middleware/ErrorHandler")
const User = require("../models/User.model")
const sendToken = require("../utils/token")
const bcrypt = require("bcrypt")

// user auth
let Signup = async(req, res, next) =>{
    
    let {name, email, password} = req.body

    let user = await User.findOne({email})

    try{
        if(user) return next(new ErrorHandler("User Already Registered", 400))

        let hashedPassword = await bcrypt.hash(password, 10)

        user = await User.create({name, email, password: hashedPassword})

        sendToken(res, "Registered Successfully", 201, user)

    }
    catch(error){
        return res.status(500).json({
            message: error.message
         })
    }
}

let Login = async(req, res, next) =>{

    let {email, password} = req.body
//using select because in the schema I have kept select: false, so I can't access password without using select
    let user = await User.findOne({email}).select("+password") 

    try{
        if(!user) return next(new ErrorHandler("Invalid Credentials", 400))

        let matchedPassword = await bcrypt.compare(password, user.password)

        if(!matchedPassword) return next(new ErrorHandler("Invalid Credentials", 400))

        sendToken(res, `Welcome ${user.name}`, 200, user)
    }
    catch(error){
     return res.status(500).json({
        message: error.message
     })
    }

}


let getMyProfile = async(req, res, next) =>{

    try {
        return res.status(200).json({
            status: true,
            user: req.user
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
         })
    }
}

let Logout = (req,res) =>{
    return res.status(200).cookie("token","",{
        expires:new Date(Date.now()), 
        httpOnly: true,
        maxAge: 15 * 60000, // cookie will be deleted after 15 mins
        sameSite: process.env.NODE_ENV === "Development"? "lax":"none", // to be able to access from diff domains
        secure: process.env.NODE_ENV === "Development"? false: true}).json({
        success:true,
        // user:req.user,
        message: "Logged Out"
    })
}

module.exports = {Signup, Login, getMyProfile, Logout}