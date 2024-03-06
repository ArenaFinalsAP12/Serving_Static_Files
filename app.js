const express = require('express');
const path = require('path');
const app = express();
app.use('/public',express.static(path.join(__dirname,'static'))); // This will create an alias 
app.get('/',(req,res)=> { // for the static folder changing its name to "public" for those outside server
    res.sendFile(path.join(__dirname,'static','index.html'));
});
app.listen(3000);