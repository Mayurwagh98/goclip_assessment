const candidateRouter = require("express").Router()
const {getAllCandidates, createCandidate, updateCandidate, deleteCandidate} = require("../controllers/Candidate.controller")
const authentication = require("../middleware/auth")

candidateRouter.get("/",getAllCandidates)
candidateRouter.post("/create", authentication,createCandidate)
candidateRouter.patch("/update/:id", authentication,updateCandidate)
candidateRouter.delete("/delete/:id", authentication,deleteCandidate)

module.exports = candidateRouter