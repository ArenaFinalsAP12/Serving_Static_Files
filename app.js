// Serving Static Files with Express
/*
const express = require('express');
const path = require('path');
const app = express();
app.use('/public',express.static(path.join(__dirname,'static'))); // This will create an alias 
app.get('/',(req,res)=> { // for the static folder changing its name to "public" for those outside server
    res.sendFile(path.join(__dirname,'static','index.html'));
});
app.listen(3000);
*/
// Http post request with Express and Body Parser Module

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static'))); // middleware
app.use(bodyParser.urlencoded({extended: false})); // parses URL-encoded data and attaches it
                                                   // to the request body
app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'static','indexform.html'));
});
app.post('/',(req,res)=> {
    console.log(req.body);
    // database work here
    res.send('successfully posted data');
});
app.listen(3000);

// Working with JSON Data - Express and Body Parser
// Completed most of the new code in indexform.html file
/*
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // Parses json and attaches the response to bodyParser object

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'static','indexform.html'));
});

app.post('/',(req,res)=> {
    console.log(req.body);
    // database work here
    res.json({success : true}); // Takes a Javascript object and converts it into json
});
app.listen(3000);
*/