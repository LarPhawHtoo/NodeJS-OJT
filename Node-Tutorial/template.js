var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/dynamic_view', function(req, res){
   res.render('dynamic', {
      name: "TutorialsPoint", 
      url:"http://www.tutorialspoint.com"
   });  
});

app.get('/signup_view', function(req, res){
    res.render('signup',{
        user: {name: "Ayush", age: "20"}
        });
});
    
app.get('/components', function(req, res){
    res.render('content');
});

app.listen(3000);