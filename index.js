const http = require('http');
const express = require('express')
const app = express()

app.get("/", function(res, req){
 res.end("Helo")
})
http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type" : "text/plain"})

}).listen(process.env.PORT)

