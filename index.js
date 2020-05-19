const express = require('express');
const app = express();

app.get('/' function(req, res){
	res.send("Aqui siguo ");
})
app.listen(process.env.PORT);

