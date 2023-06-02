const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const UserRouter = require("./routes/User.route")
const CandidateRouter = require("./routes/Candidate.route")
const { errorMiddleware } = require("./middleware/ErrorHandler")

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // we can't pass cookies to frontend, if keep false
}));

app.use("/api/users", UserRouter)
app.use("/api/candidates", CandidateRouter)

app.get("/", (req, res) =>{
    return res.send("<h1>Server working</h1>")
})

app.use(errorMiddleware)

module.exports = app