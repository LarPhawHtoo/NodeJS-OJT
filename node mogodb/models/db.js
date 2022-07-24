const mongoose = require('mongoose');
//mongoose.connect('mongodb://0.0.0.0:27017/StudentDB',{
//    useNewUrlParser: true
//},
mongoose.connect('mongodb+srv://LarPhawHtoo:LarPhawHtoo7@cluster0.sdcycqk.mongodb.net/StudentDB',{
        useNewUrlParser: true
    },
err=>{
    if (!err) {
        console.log('Connection succeeded');
    } else {
        console.log('Error in connection' + err);
    }
    })
require('./student.model');