//var express = require('express');
//var app = express();
//
////Simple request time logger
//app.use(function(req, res, next){
//   console.log("A new request received at " + Date.now());
//
//   //This function call is very important. It tells that more processing is
//   //required for the current request and is in the next middleware
//    //function route(handler)
//        next();
//
//
//});
//
//app.listen(3000);
var express = require('express');
var app = express();

//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

//Route handler
app.get('/', function(req, res, next){
   res.send("Middle");
   next();
});

app.use('/', function(req, res){
   console.log('End');
});

app.listen(3000);