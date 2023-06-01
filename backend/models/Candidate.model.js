const mongoose = require("mongoose")

const candidateSchema = mongoose.Schema({
    name: {type:String, required:true},
    email:{type:String, required:true},
    mobile_no:{type:Number, required:true},
    role:{type:String, required:true},
    gender:{type:String, required:true},
    nationality: {type:String, required:true},
    linkedin:{type:String, default:"NA"},
    martial_status:{type:String, required:true},
    post_grad:{type:String, required:true},
    post_grad_college_name:{type:String, default:"NA"},
    post_grad_course:{type:String, default:"NA"},
    post_grad_city:{type:String, default:"NA"},
    post_grad_year:{type:Number, default:0},
    graduation:{type:String, required:true},
    grad_college_name:{type:String, default:"NA"},
    grad_course:{type:String, default:"NA"},
    grad_city:{type:String, default:"NA"},
    grad_year:{type:Number, default:0},
    secondary_school:{type:String, required:true},
    secondary_school_name:{type:String, default:"NA"},
    secondary_school_course:{type:String, default:"NA"},
    secondary_school_city:{type:String, default:"NA"},
    secondary_school_year:{type:Number, default:0},
    hobbies:{type:Array, default:"NA"},
    preffered_job_location:{type:Array, default:"NA"},
    skills:{type:Array, default:"NA"},
    certification_name:{type:String, default:"NA"},
    certification_org:{type:String, default:"NA"},
    certification_date: {type:Date, default:0},
    job_exp_company_name:{type:String, default:"NA"},
    job_exp_role:{type:String, default:"NA"},
    job_exp_duration:{type:String, default:"NA"}

})

module.exports = mongoose.model("Candidate", candidateSchema)
