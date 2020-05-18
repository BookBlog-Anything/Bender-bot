const express = require('express')
const http = require('http')
const app = express()
const path = require('path')



http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type" : "text/plain"})

app.get('/', function(request, response) {
	response.send("Lol")
})

}).listen(process.env.PORT)

