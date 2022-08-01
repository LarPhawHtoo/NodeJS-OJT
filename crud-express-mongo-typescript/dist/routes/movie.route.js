"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRoute = void 0;
const express_1 = require("express");
const movie_controller_1 = require("../controllers/movie.controller");
const movieRoute = () => {
    const router = (0, express_1.Router)();
    router.post('/movies', movie_controller_1.createMovie);
    router.get('/movies', movie_controller_1.getAllMovies);
    router.get('/movies/:id', movie_controller_1.getMovie);
    router.put('/movies/:id', movie_controller_1.updateMovie);
    router.delete('/movies/:id', movie_controller_1.deleteMovie);
    return router;
};
exports.movieRoute = movieRoute;
