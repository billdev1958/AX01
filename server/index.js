var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

const path = require("path");
app.use(express.static(path.join(__dirname,"../client","build")))

app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build","index.html"))
})
app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 3001')
})