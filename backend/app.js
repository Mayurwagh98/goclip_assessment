const express = require("express")
const cors = require("cors")
const router = require("./routes/User.route")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/users", router)

app.get("/", (req, res) =>{
    return res.send("<h1>Server working</h1>")
})


module.exports = app