var express = require('express')
var app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send("Hello World"))
app.get('webhooks/telegram', (req, res) => {
	require(src/main.js)
})
app.listen(port, ()=> console.log("El servidor corre en el puerto ${port}"))




