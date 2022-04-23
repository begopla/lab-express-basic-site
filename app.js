//Require Express
const express = require('express');
// We create our own server named app
// Express server will be handling requests and responses
const app = express();

//Make everything inside public/ available
app.use(express.static('public'));

//first Route Home Page
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

//First Season Page
app.get('/season1', (request, response, next)=> response.sendFile(__dirname +'/views/first-season.html'))

app.get('/season2', (request, response, next) => response.sendFile(__dirname + '/views/second-season.html'));
//Starting server
app.listen(3000,()=>console.log(
    'lab-express-basic-site'))