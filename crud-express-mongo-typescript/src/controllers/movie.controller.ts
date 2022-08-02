import { Request, Response, NextFunction } from 'express'
import {
  getMovieService,
  createMovieService,
  findMovieService,
  updateMovieService,
  deleteMovieService,
  findByNameService
} from '../services/movie.service';


export const getMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getMovieService(req, res, next);
};

export const createMovie = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  createMovieService(req, res, next);
}

export const findMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  findMovieService(req, res, next);
}

export const updateMovie = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  updateMovieService(req, res, next);
};

export const deleteMovie = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  deleteMovieService(req, res, next);
};

export const findByName = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  findByNameService(req, res, next);
}