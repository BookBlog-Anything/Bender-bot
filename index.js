var express = require('express')
var app = express()
var http = require('http')

app.get("/setwebhook", function(req, res){
	res.send("Aqui siguo vivo")
})


http.createServer(function(req,res){
	res.writeHead(200, {"Content-Type" : "text/plain"})
	res.end("Hello")
}).listen(process.env.PORT)




