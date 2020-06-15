//importing node framework
const express = require('express')
const app = express()
const port = 3000

//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('Hello World');
});

//listen to port 3000 by default
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
 
module.exports = app;