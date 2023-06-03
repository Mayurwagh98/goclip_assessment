const candidateRouter = require("express").Router()
const {getAllCandidates, createCandidate, updateCandidate, deleteCandidate,getCandidatesDetails} = require("../controllers/Candidate.controller")
const authentication = require("../middleware/auth")

candidateRouter.get("/",authentication,getAllCandidates)
candidateRouter.get("/:id",authentication,getCandidatesDetails)
candidateRouter.post("/create", authentication,createCandidate)
candidateRouter.patch("/update/:id", authentication,updateCandidate)
candidateRouter.delete("/delete/:id", authentication,deleteCandidate)

module.exports = candidateRouter