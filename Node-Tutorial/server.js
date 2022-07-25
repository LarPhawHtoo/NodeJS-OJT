const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/'));
//app.use('/img', express.static('img'));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(8081, function () {
    console.log("Server is started at port 8081");
});