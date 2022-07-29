const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://LarPhawHtoo:LarPhawHtoo7@cluster0.sdcycqk.mongodb.net/MovieDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    err => {
        if (!err) {
            console.log('Database connection successed');
        } else {
            console.log('Error in connection ' + err);
        }
    });
require('./movie.model')
