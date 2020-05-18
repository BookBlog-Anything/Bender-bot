const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.use(path.join(__dirname,'/src'))
app.get('/', function (req, res ){
 res.send('Run')
})

app.listen(port)