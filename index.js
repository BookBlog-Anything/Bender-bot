const express = require('express')
const http = require('http')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) =>{
  res.statusCode =200;
  res.setHeader('Content-Type', 'text/plain')
  res.end('Lol')
})


server.listen(app.get(port),()=>{
  console.log('El servidor corre en el puerto '${port})
})