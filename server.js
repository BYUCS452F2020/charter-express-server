// server/server/js
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3000



app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

require('./routes/routes')(app)

// listen on the port
console.log("Listening on port", port)
app.listen(port)