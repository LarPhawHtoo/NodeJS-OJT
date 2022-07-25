var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

var mongoose = require('mongoose');
//mongoose.connect('mongodb://0.0.0.0:27017/PersonDB');
mongoose.connect('mongodb+srv://LarPhawHtoo:LarPhawHtoo7@cluster0.sdcycqk.mongodb.net/PersonDB', {
    useNewUrlParser: true
},
    err => {
        if (!err) {
            console.log('Connection succeeded');
        } else {
            console.log('Error in connection' + err);
        }
    })

app.set('view engine', 'pug');
app.set('views', './views');
app.engine('pug', require('pug').__express)

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String,
});
var Person = mongoose.model("Person", personSchema);
var urlencodedParser = bodyParser.urlencoded({ extended: true});

app.use(bodyParser.json());
app.use(upload.array());
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/person.html" );
})
 
app.post('/person', urlencodedParser, function (req, res) {
    var personInfo =
     {
        name:req.body.name,
        age: req.body.age,
        nationality:req.body.nationality
    };
    
    if (!personInfo ){
        res.render('show_message', {
            message: "Sorry, you provided worng info", type: "error"
        });
    } else {
        var newPerson = new Person({
            name: personInfo.name,
            age: personInfo.age,
            nationality: personInfo.nationality
        });
       newPerson.save(function (err, Person) {
            if (err)
                res.render('show_message', { message: "Database error", type: "error" });
            else
                res.render('show_message', {
                    message: "New person added", type: "success", person: personInfo

                });
        });
    }
    var jsonString=JSON.parse(JSON.stringify(personInfo));
    console.log(jsonString);
});

//Retrieving Documents model.find()
Person.find({name: "Mg Mg", age: 30}, 
   function(err, response){
      console.log(response);
    });

//Retrieving Documents model.findOne()
Person.findById("507f1f77bcf86cd799439011", function(err, response){
        console.log(response);
});
//Update
Person.update({age: 25}, {nationality: "American"}, function(err, response){
    console.log(response);
 });
     
//View All Records
app.get('/people', function(req, res){
    Person.find(function(err, response){
       res.json(response);
    });
});

//Put
app.put('/people/:id', function(req, res){
    Person.findByIdAndUpdate(req.params.id, req.body, function(err, response){
       if(err) res.json({message: "Error in updating person with id " + req.params.id});
       res.json(response);
    });
});

// Remove
 app.delete('/people/:id', function(req, res){
    Person.findByIdAndRemove(req.params.id, function(err, response){
       if(err) res.json({message: "Error in deleting record id " + req.params.id});
       else res.json({message: "Person with id " + req.params.id + " removed."});
    });
 });

app.listen(3000);