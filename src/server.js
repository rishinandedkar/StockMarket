var express = require('express');
var router = express.Router();
var app = express();

router.get('/task',function(req,res){
  res.send("Hello");
})
