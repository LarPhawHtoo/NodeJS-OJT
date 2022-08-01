"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.updateMovie = exports.getMovie = exports.getAllMovies = exports.createMovie = void 0;
const movie_model_1 = require("../models/movie.model");
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code, name, year, rating } = req.body;
    if (!code || !name || !year || !rating) {
        return res.status(422).json({
            message: 'This fields are required',
        });
    }
    const movieInput = {
        code,
        name,
        year,
        rating,
    };
    const movieCreated = movie_model_1.Movie.create(movieInput);
    return res.status(201).json({
        data: movieCreated
    });
});
exports.createMovie = createMovie;
//All retrieving data
const getAllMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movies = yield movie_model_1.Movie.find();
    return res.status(200).json({
        data: movies
    });
});
exports.getAllMovies = getAllMovies;
//Retrieve one data
const getMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const movie = yield movie_model_1.Movie.findOne({ _id: id });
    if (!movie) {
        return res.status(404).json({
            message: `Movie with id "${id}" not found.`
        });
    }
    return res.status(200).json({
        data: movie
    });
});
exports.getMovie = getMovie;
//Update data
const updateMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { code, name, year, rating } = req.body;
    const movie = yield movie_model_1.Movie.findOne({ _id: id });
    if (!movie) {
        return res.status(404).json({
            message: `Movie with id "${id}" not found.`
        });
    }
    if (!code || !name || !year || !rating) {
        return res.status(422).json({
            message: 'This fields are required'
        });
    }
    yield movie_model_1.Movie.updateOne({ _id: id }, { code, name, year, rating });
    const movieUpdated = yield movie_model_1.Movie.findById(id, { code, name, year, rating });
    return res.status(200).json({
        data: movie
    });
});
exports.updateMovie = updateMovie;
//Delete Data
const deleteMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield movie_model_1.Movie.findByIdAndDelete(id);
    return res.status(200).json({
        message: 'Movie deleted successfully.'
    });
});
exports.deleteMovie = deleteMovie;
