"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { Router } from "express";
//
//import { createMovie,getAllMovies,getMovie,updateMovie,deleteMovie } from "../controllers/movie.controller";
//
//const movieRoute = () => {
//  const router = Router();
//
//  router.post('/movies', createMovie);
//
//  router.get('/movies', getAllMovies);
//
//  router.get('/movies/:id', getMovie);
//
//  router.put('/movies/:id', updateMovie);
//
//  router.delete('/movies/:id', deleteMovie);
//
//  return router;
//
//}
//
//export { movieRoute };
const express_1 = __importDefault(require("express"));
const movie_controller_1 = require("../controllers/movie.controller");
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
router
    .route("/")
    .get(movie_controller_1.getMovies)
    .post([
    (0, express_validator_1.body)("code").notEmpty().withMessage("code must not be empty"),
    (0, express_validator_1.body)("name").notEmpty().withMessage("Movie Name must not be empty"),
    (0, express_validator_1.body)("year").notEmpty().withMessage("Year must not be empty"),
    (0, express_validator_1.body)("rating").notEmpty().withMessage("Rating must note be empty")
], movie_controller_1.createMovie);
router
    .route("/search")
    .post(movie_controller_1.findByName);
router
    .route("/:id")
    .get(movie_controller_1.findMovie)
    .put([
    (0, express_validator_1.body)("code").notEmpty().withMessage("Code must not be empty"),
    (0, express_validator_1.body)("name").notEmpty().withMessage("Movie Name must note be empty"),
    (0, express_validator_1.body)("year").notEmpty().withMessage("Year must not be empty"),
    (0, express_validator_1.body)("rating").notEmpty().withMessage("Rating must not be empty")
], movie_controller_1.updateMovie)
    .delete(movie_controller_1.deleteMovie);
exports.default = router;
