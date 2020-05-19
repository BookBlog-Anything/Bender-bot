var express = require('express')
var app = express()
var http = require('http')

http.createServer(function(req,res){
	res.writeHead(200, {"Content-Type" : "text/plain"})
})

app.get('/' function(req, res){
	res.send("Aqui siguo vivo")
})

http.listen(process.env.PORT)

