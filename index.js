const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/wwwroot/index.html'));
});

router.get('/start',async function(req,res){
    await snooze(3000);
    res.sendFile(path.join(__dirname+'/wwwroot/index.html'));
});

//add the router
app.use('/', router);
app.listen(3000);
console.log('Running at Port 3000');