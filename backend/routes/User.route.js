const router = require("express").Router()
const {Signup, Login, getMyProfile, Logout} = require("../controllers/User.controller")
const isAuthenticated = require("../middleware/auth")

router.post("/register", Signup)
router.post("/login", Login)
router.get("/myprofile", isAuthenticated,getMyProfile)
router.get("/logout", Logout)

module.exports = router