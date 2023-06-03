const router = require("express").Router()
const {Signup, Login, myprofile} = require("../controllers/User.controller")
const authentication = require("../middleware/auth")

router.post("/register",Signup)
router.post("/login",Login)
router.get("/myprofile",authentication,myprofile)



module.exports = router