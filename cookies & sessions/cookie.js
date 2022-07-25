var cookieParser = require('cookie-parser');
var express = require('express');
var app = express();
app.use(cookieParser());

app.get('/', function(req, res){
    res.cookie('name', 'express').send('cookie set');

    //Adding Cookie
    //res.cookie('name', 'value', {expire: 360000 + Date.now()});
    console.log('Cookies: ', req.cookies);
});

//Deleting Existing Cookies
app.get('/clear_cookie_foo', function(req, res){
    res.clearCookie('foo');
    res.send('cookie foo cleared');
 });


app.listen(3000);