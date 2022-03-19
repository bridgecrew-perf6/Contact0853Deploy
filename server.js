/*
    server.js is a server for Node.js
    It adds a JSON and URL-encoded parser as a top-level middleware, which will parse the bodies of all incoming requests
*/


// initiating express and assigning a variable to it
var express = require('express')
app = express()


// process data sent through an HTTP request body
const bodyParser = require('body-parser')
const cors = require('cors')


// define the port
port = process.env.PORT || 5001

// to asynchronously append the data to a file
const { appendFile } = require('fs')
app.use(cors())

// url-econdes the body
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// creates the route
var routes = require('./api/routes/contactRoutes')
routes(app)


// bind and listen to the connections on the specified port
app.listen(port)
console.log('ContactList started on : ' + port)