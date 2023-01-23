const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()


const PORT = process.env.PORT || 5005
const CONNECTION_STRING = process.env.CONNECTION_STRING
const folderRoute = require("./routes/folder")



app.use(express.json())
app.use(cors())


app.use("/api/v1/folders", folderRoute)


app.listen(PORT, () => {
    console.log("server running. waiting to connect with db ")
    mongoose.connect(CONNECTION_STRING).then(e => console.log("db connected successfully"))
})
