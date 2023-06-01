const Candidate = require("../models/Candidate.model")

const getAllCandidates = async(req, res) =>{
    try {
        let candidates = await Candidate.find()

        return res.status(200).json({
            status: true,
            candidates
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })       
    }
}

const createCandidate = async(req, res) =>{

    let {email} = req.body

    let existingCandidate = await Candidate.findOne({email})

    try {
        if(existingCandidate) return res.status(400).json({
            status: false,
            message: "Candidate already registered"
        })

        let newCandidate = await Candidate.create(req.body)

        return res.status(201).json({
            status:true,
            message: "Candidate Registered"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }

}

module.exports = {getAllCandidates, createCandidate}