//import { Request, Response } from 'express';
//import crypto from 'crypto';
//
//import { User, UserInput } from '../models/user.model';
//
//const hashPassword = (password: string) => {
//  const salt = crypto.randomBytes(16).toString('hex');
//
//  // Hashing salt and password with 100 iterations, 64 length and sha512 digest
//  return crypto.pbkdf2Sync(password, salt, 100, 64, `sha512`).toString(`hex`);
//};
//
//const createUser = async (req: Request, res: Response) => {
//  const { email,  fullName, password} = req.body;
//
//  if (!email || !fullName || !password) {
//    return res.status(422).json({ message: 'The fields email, fullName and password are required' });
//  }
//
//  const userInput: UserInput = {
//    fullName,
//    email,
//    password: hashPassword(password),
//  };
//
//  const userCreated = await User.create(userInput);
//
//  return res.status(201).json({ data: userCreated });
//};
//
//const getAllUsers = async (req: Request, res: Response) => {
//  const users = await User.find().sort('-createdAt').exec();
//
//  return res.status(200).json({ data: users });
//};
//
//const getUser = async (req: Request, res: Response) => {
//  const { id } = req.params;
//
//  const user = await User.findOne({ _id: id }).exec();
//
//  if (!user) {
//    return res.status(404).json({ message: `User with id "${id}" not found.` });
//  }
//
//  return res.status(200).json({ data: user });
//};
//
//const updateUser = async (req: Request, res: Response) => {
//  const { id } = req.params;
//  const { fullName} = req.body;
//
//  const user = await User.findOne({ _id: id });
//
//  if (!user) {
//    return res.status(404).json({ message: `User with id "${id}" not found.` });
//  }
//
//  if (!fullName) {
//    return res.status(422).json({ message: 'The field fullName is required' });
//  }
//
//  await User.updateOne({ _id: id }, { fullName });
//
//  const userUpdated = await User.findById(id);
//
//  return res.status(200).json({ data: userUpdated });
//};
//
//const deleteUser = async (req: Request, res: Response) => {
//  const { id } = req.params;
//
//  await User.findByIdAndDelete(id);
//
//  return res.status(200).json({ message: 'User deleted successfully.' });
//};
//
//export { createUser, deleteUser, getAllUsers, getUser, updateUser };
import { Request, Response, NextFunction } from 'express';
import {
  createUserService,
  getUserService,
  findUserService,
  updateUserService,
  deleteUserService,
  findByNameService
} from '../services/user.service';

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getUserService(req, res, next);
};

export const createUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  createUserService(req, res, next);
};

export const findUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  findUserService(req, res, next);
}

export const updateUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  updateUserService(req, res, next);
};

export const deleteUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  deleteUserService(req, res, next);
};

export const findByName = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  findByNameService(req, res, next);
}


