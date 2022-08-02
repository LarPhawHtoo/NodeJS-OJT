import { compareSync } from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.model';
import session from 'express-session';

const loginService = async (req: Request, res: Response) => {
  User.findOne({ email: req.body.email }).then(async (user: any) => {
    if (!user) {
      return res.status(401).send({
        success: false,
        message:'Could not find user'
      })
    }
    if (!compareSync(req.body.password, user.password)) {
      return res.status(401).send({
        success: false,
        message:'Incorrect Password'
      })
    }
    const payload = {
      email: await bcrypt.hash(user.email, 12),
      id:await bcrypt.hash(user.id,12)
    }
    const token = jwt.sign(payload, 'secrect', { expiresIn: '1d' });

    return res.status(200).send({
      success: true,
      message: 'Login Successfully!',
      users: user,
      token: token
    }); 
  })
}

const logoutService = async (req: any, res: Response) => {
  req.session = null;
  return res.json({ "message": "Logout Successfully" });
};

export { loginService, logoutService };
