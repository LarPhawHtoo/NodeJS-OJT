const express = require('express');

var router = express.Router();

const mongoose = require('mongoose');

const Movie = mongoose.model('Movie');

router.get('/', (req, res) => {
    res.render('movie/addOrEdit', {
        viewTitle: 'Insert Movie'
    })
})

router.post('/', (req, res) => {
    if (req.body._id == '') {
        insertRecord(req, res)
    }
    else {
        updateRecord(req, res)
    }
})

function insertRecord(req, res) {
    var movie = new Movie();
    movie.code = req.body.code;
    movie.name = req.body.name;
    movie.year = req.body.year;
    movie.rating = req.body.rating;
    movie.profile = req.body.profile;

    movie.save((err, doc) => {
        if (!err) {
            res.redirect('movie/list');
        } else {
            console.log('Error during insert : ' + err)
        }
    })
}

function updateRecord(req, res) {
    Movie.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) {
            res.redirect('movie/list');
        } else {
            console.log('Error during update : ' + err);
        }
    })
}

router.get('/list', (req, res) => {
    Movie.find((err, docs) => {
        if (!err) {
            res.render('movie/list', {
                list: docs
            })
        } else {
            console.log('Error in retrieval : ' + err);
        }
    })
})

router.get('/:id', (req, res) => {
    Movie.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render('movie/addOrEdit', {
                viewTitle: 'Update Movie',
                movie: doc
            })
            console.log(doc);
        }
    })
})

router.get('/delete/:id', (req, res) => {
    Movie.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.render('movie/list');
            console.log("Delete Success");

        } else {
            console.log('Error in deletion : ' + err);
        }
    })
})

module.exports = router;
