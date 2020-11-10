const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 8080

app.use(bodyParser.urlencoded(
  { extended: true }
))

app.use(cors())

app.use(bodyParser.json())

app.get('/', function(request, response){
    response.send("Hello world")
})

app.listen(apiPort, function(request, response){
    console.log('Server is running on port ', apiPort)
})