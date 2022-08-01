import { Request, Response } from "express";

import { Movie, MovieInput } from "../models/movie.model";

const createMovie = async (req: Request, res: Response) => {
  const { code,name, year, rating } = req.body;

  if (!code || !name || !year || !rating) {
    return res.status(422).json({
      message: 'This fields are required',
    });
  }

  const movieInput: MovieInput = {
    code,
    name,
    year,
    rating,
  };

  const movieCreated = Movie.create(movieInput);

  return res.status(201).json({
    data: movieCreated
  });
};

//All retrieving data
const getAllMovies = async (req: Request, res: Response) => {
  const movies = await Movie.find();
  return res.status(200).json({
    data: movies
  });
};

//Retrieve one data
const getMovie = async (req: Request, res: Response) => {
  const { id } = req.params;

  const movie = await Movie.findOne({ _id: id });

  if (!movie) {
    return res.status(404).json({
      message: `Movie with id "${id}" not found.`
    });
  }
  return res.status(200).json({
    data: movie
  });
};

//Update data
const updateMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { code, name, year, rating } = req.body;

  const movie = await Movie.findOne({ _id: id });

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

  await Movie.updateOne({ _id: id }, { code, name, year, rating });

  const movieUpdated = await Movie.findById(id, { code, name, year, rating });

  return res.status(200).json({
    data: movie
  });
};

//Delete Data
const deleteMovie = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Movie.findByIdAndDelete(id);

  return res.status(200).json({
    message: 'Movie deleted successfully.'
  });
};

export { createMovie,getAllMovies,getMovie,updateMovie,deleteMovie };