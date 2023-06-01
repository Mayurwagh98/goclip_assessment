const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    company_name:String,
    mobile_no:Number,
    email:String,
    role:String,
    password:String
})

module.exports = mongoose.model("User", userSchema)
