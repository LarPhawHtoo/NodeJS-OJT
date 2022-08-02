import {Router} from "express";
import { createUser } from "../controllers/user.controller";
import { login,logout } from "../controllers/auth.controller";
import { body } from 'express-validator';

const authRoute = () => {
  const router = Router();

  router.post('/signup', [
    body("fullName").notEmpty().withMessage("Name must not be empty"),
    body("email").notEmpty().withMessage("Email must not be empty"),
    body("password").notEmpty().withMessage("Password must not be empty")
  ],
    createUser
  ); 
  
  router.post('/login',
    [
      body("email").notEmpty().withMessage("Email must not be empty"),
      body("password").notEmpty().withMessage("Password must not be empty")
    ],
    login
  );
  
  router.post('logout', [], logout);

}
 
export default  authRoute ;