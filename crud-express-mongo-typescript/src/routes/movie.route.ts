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
import express from 'express';
import { getMovies, createMovie, findMovie, updateMovie, deleteMovie, findByName } from '../controllers/movie.controller';
import { body } from 'express-validator';

const router = express.Router();

router
  .route("/")
  .get(getMovies)
  .post(
    [
      body("code").notEmpty().withMessage("code must not be empty"),
      body("name").notEmpty().withMessage("Movie Name must not be empty"),
      body("year").notEmpty().withMessage("Year must not be empty"),
      body("rating").notEmpty().withMessage("Rating must note be empty")
    ],
    createMovie);

router
  .route("/search")
  .post(findByName)

router
  .route("/:id")
  .get(findMovie)
  .put(
    [
      body("code").notEmpty().withMessage("Code must not be empty"),
      body("name").notEmpty().withMessage("Movie Name must note be empty"),
      body("year").notEmpty().withMessage("Year must not be empty"),
      body("rating").notEmpty().withMessage("Rating must not be empty")
    ],
    updateMovie)
  .delete(deleteMovie)
export default router;