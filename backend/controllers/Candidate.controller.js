const Candidate = require("../models/Candidate.model")
const {ErrorHandler} = require("../middleware/ErrorHandler")
const successMessage = require("../utils/success")

const getAllCandidates = async(req, res) =>{
    try {
        let candidates = await Candidate.find()

        successMessage(res,"All candidates data",200,candidates)
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })       
    }
}

const createCandidate = async(req, res) =>{

    let {email} = req.body

    let existingCandidate = await Candidate.findOne({email})

    try {
       
        if(existingCandidate) return next(new ErrorHandler("Candidate already registered",400))

        let newCandidate = await Candidate.create(req.body)

        successMessage(res,"Candidate Registered",201)

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

const updateCandidate = async(req, res, next) =>{

    let {id} = req.params

    let existingCandidate = await Candidate.findById(id)

    try {
      
        if(!existingCandidate) return next(new ErrorHandler("Candidate doesn't exists",404))

        let newCandidate = await Candidate.findByIdAndUpdate({_id:id},req.body,{
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        successMessage(res, "Candidate profile updated", 200)

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })   
    }

}

const deleteCandidate = async(req, res, next) =>{

    let {id} = req.params

    let existingCandidate = await Candidate.findById(id)    

    try {
       
        if(!existingCandidate) return next(new ErrorHandler("Candidate doesn't exists",404))

        existingCandidate = await Candidate.findByIdAndDelete({_id:id})

        successMessage(res, "Candidate profile deleted", 200)

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

module.exports = {getAllCandidates, createCandidate, updateCandidate, deleteCandidate}