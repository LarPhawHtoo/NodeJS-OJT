require('./models/db');
const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const bodyParser = require('body-parser');

const movieController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('/'))

app.set('views', path.join(__dirname, '/views'));
app.engine('html', exphbs.engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: "html",
    defaultLayout: 'MainLayout',
    layoutDir: __dirname + "/views/layouts/"
}));
app.set('view engine', 'html');

app.use("/movie", movieController);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(3000, function () {
    console.log("Server started at port 3000");
})