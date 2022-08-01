import { Router } from "express";

import { createMovie,getAllMovies,getMovie,updateMovie,deleteMovie } from "../controllers/movie.controller";

const movieRoute = () => {
  const router = Router();

  router.post('/movies', createMovie);

  router.get('/movies', getAllMovies);

  router.get('/movies/:id', getMovie);

  router.put('/movies/:id', updateMovie);

  router.delete('/movies/:id', deleteMovie);

  return router;

};

export { movieRoute };