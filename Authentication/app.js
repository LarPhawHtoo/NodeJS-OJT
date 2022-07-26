const express = require('express');
var app = express();

const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const User = require("./models/user");

//Connecting database
//mongoose.connect("mongodb://0.0.0.0:27017/auth_demo");
mongoose.connect('mongodb+srv://LarPhawHtoo:LarPhawHtoo7@cluster0.sdcycqk.mongodb.net/auth_demo');

app.use(require('express-session')({
    secret:"Any normal Word",//decode or encode session 
    resave: false,
    saveUninitialized:false
}));

passport.serializeUser(User.serializeUser()); //session encoding
passport.deserializeUser(User.deserializeUser()); //session encoding
passport.use(new LocalStrategy(User.authenticate()));

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

//Routes

app.get('/', (req, res) => {
    res.render("home");
})

app.get('/userprofile', (req, res) => {
    res.render("userprofile");
})

//Auth routes

app.get('/login', (req, res) => {
    res.render("login");
})

app.post('/login', passport.authenticate("local", {
    successRedirect: "/userprofile",
    failureRedirect: "/login"
}), function (req, res) {
    
});

app.get('/register', (req, res) => {
    res.render("register");
})

app.post('/register', (req, res) => {
    User.register(new User({
        username: req.body.username,
        phone: req.body.phone,
        telephone:req.body.telephone
    }), req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/login");
        })
    })
})

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}
app.listen(process.env.PORT || 3000, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server started at port 3000");
    }
});