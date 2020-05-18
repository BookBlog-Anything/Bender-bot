const express = require('express')
const http = require('http')
const app = express()
const path = require('path')

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type" : "text/plain"})
	response.end("Hello World\n")
}).listen(process.env.PORT)

app.get('/', function(request, response) {
	response.send("Lo l")
})