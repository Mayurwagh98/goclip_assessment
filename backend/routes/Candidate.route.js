const candidateRouter = require("express").Router()
const {getAllCandidates, createCandidate} = require("../controllers/Candidate.controller")

candidateRouter.get("/", getAllCandidates)
candidateRouter.post("/create", createCandidate)

module.exports = candidateRouter