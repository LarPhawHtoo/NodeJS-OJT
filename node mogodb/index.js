require('./models/db');

const express = require('express');

const path=require('path');

const handlebars=require('handlebars');

const exphbs = require('express-handlebars');

const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const bodyparser = require('body-parser');

const studentController = require('./controllers/studentController');

var app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static(__dirname+'/'))
app.get('/',(req, res) => {
    res.send(
        
        '<h3> Click here to go to the <b> <a href="/student/list">Database</a></b></h3 >'
    );
});

app.set('views', path.join(__dirname, '/views'));

app.engine('html', exphbs.engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: "html",
    defaultLayout: 'MainLayout',
    layoutDir: __dirname + "/views/layouts/"
}));

app.set("view engine", "html");

app.use("/student", studentController);

app.listen(8081, () => {
    console.log('Server started at port 8081');
});