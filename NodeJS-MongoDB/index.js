var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/my_db');
//mongoose.connect("mongodb+srv://LarPhawHtoo:LarPhawHtoo7@cluster0.sdcycqk.mongodb.net/?retryWrites=true&w=majority/my_db");
console.log('Database connection successful')

app.set('view engine', 'pug');
app.set('views', './views');

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
 });
var Person = mongoose.model("Person", personSchema);
// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));


app.get('/person', function(req, res){
    res.sendFile(__dirname+ '/person.html');
 });
// app.get('/person', function(req, res){
//    res.render('person');
// });
app.post('/person', function(req, res){
   var personInfo=req.body;
   if(!personInfo.name || !personInfo.age || !personInfo.nationality){
    res.render('show_message', {
       message: "Sorry, you provided worng info", type: "error"});
 } else {
    var newPerson = new Person({
       name: personInfo.name,
       age: personInfo.age,
       nationality: personInfo.nationality
    });
      
    newPerson.save(function(err, Person){
       if(err)
          res.render('show_message', {message: "Database error", type: "error"});
       else
          res.render('show_message', {
             message: "New person added", type: "success", person: personInfo});
    });
 }
});

app.listen(3000);