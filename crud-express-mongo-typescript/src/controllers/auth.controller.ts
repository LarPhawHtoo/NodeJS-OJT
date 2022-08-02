import { Request, Response } from "express";
import { loginService, logoutService } from "../services/auth.service";

export const login = async (req: Request, res: Response) => {
  loginService(req, res);
};

export const logout = async (req: any, res: Response) => {
  logoutService(req, res);
};


