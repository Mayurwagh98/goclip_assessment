const jwt = require("jsonwebtoken")
const User = require("../models/User.model")

const authorization = async(req, res, next) =>{

    const token = req.headers?.authorization?.split(" ")[1]

    try {

        if(token){

            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if(decoded){

                const userID = decoded.userID

                req.body.userID = userID

                req.user = await User.findById(userID)

                next()
            }
            else{
                return res.send("You need to login")
            }
        }
        else{
            return res.status(400).send({message: "You need to login"})
        }


    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}

module.exports = authorization