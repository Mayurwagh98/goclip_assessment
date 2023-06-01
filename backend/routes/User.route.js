const router = require("express").Router()
const {Signup, Login} = require("../controllers/User.controller")

router.post("/register", Signup)
router.post("/login", Login)

module.exports = router