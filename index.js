const express = require('express')
const app = express()
const path = require('path')

app.use(path.join(__dirname,'/src'))
app.get('/', function (req, res ){
 res.send('Run')
})