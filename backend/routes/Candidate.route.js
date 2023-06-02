const candidateRouter = require("express").Router()
const {getAllCandidates, createCandidate, updateCandidate, deleteCandidate} = require("../controllers/Candidate.controller")
const isAuthenticated = require("../middleware/auth")

candidateRouter.get("/",getAllCandidates)
candidateRouter.post("/create", isAuthenticated,createCandidate)
candidateRouter.patch("/update/:id", isAuthenticated,updateCandidate)
candidateRouter.delete("/delete/:id", isAuthenticated,deleteCandidate)

module.exports = candidateRouter