const express = require('express');
const app = express();

app.get('/' function(req, res){
	res.send("Aqui siguo vivo");
})
app.listen(process.env.PORT);

