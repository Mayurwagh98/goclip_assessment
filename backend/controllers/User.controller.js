const bcrypt = require("bcrypt")
const User = require("../models/User.model")
const jwt = require("jsonwebtoken")


let Signup = async(req, res) =>{

    let { name, company_name,mobile_no,role,email, password} = req.body

    let user = await User.findOne({email})
    try {

        if(user){

            return res.status(200).json({message: "User already exists"})
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({name, company_name,mobile_no,role,email, password: hashPassword})

        const token = jwt.sign({email: newUser.email}, process.env.SECRET_KEY)

        return res.status(200).json({success: true,message: "User registered", newUser, token})

    } catch (error) {

        return res.status(500).json({
            status:false,
            message: error.message
        })
    }

}

let Login = async(req, res) =>{

    let {name, email, password} = req.body

    let user = await User.findOne({email})
    try {

        if(!user){
            return res.status(400).json({success: false,message: "User doesn't exists"})
        }

        const matchPassword = await bcrypt.compare(password, user.password)

        if(!matchPassword){
            return res.status(404).json({success:false, message: "Wrong Credentials"})
        }

        const token = jwt.sign({userID: user._id},process.env.SECRET_KEY)

        return res.status(200).json({success:true,message: "Login Successful!", token: token,userId: user._id, name:name})

    } catch (error) {
        return res.status(500).json({success: false,message: error.message})
    }
}

module.exports = {Signup, Login}