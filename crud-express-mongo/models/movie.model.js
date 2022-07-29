const mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
    code: {
        type: Number,
        required: 'This field is required'
    },
    name: {
        type: String,
        required: 'This field is required'
    },
    year: {
        type: Number,
        required: 'This field is required'
    },
    rating: {
        type: Number,
        required: 'This field is required'
    }
});
mongoose.model("Movie", movieSchema);