const http = require('http');
const express = require('express')
const app = express()
app.get('/' function(req, res){
	res.send("Aqui seguimos vivos")
})
app.listen(process.env.PORT || 3000)

