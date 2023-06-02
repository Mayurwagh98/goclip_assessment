const express = require("express")
const cors = require("cors")
const UserRouter = require("./routes/User.route")
const CandidateRouter = require("./routes/Candidate.route")
const { errorMiddleware } = require("./middleware/ErrorHandler")

const app = express()

app.use(express.json())
app.use(cors());

app.use("/api/users", UserRouter)
app.use("/api/candidates", CandidateRouter)

app.get("/", (req, res) =>{
    return res.send("<h1>Server working</h1>")
})

app.use(errorMiddleware)

module.exports = app