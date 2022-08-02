import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import passport from "passport";
require('./config/passport');

//import "dotenv/config"; 

import  movieRoute  from "./routes/movie.route";
import  userRoute  from "./routes/user.route";
import  authRoute from "./routes/auth.route";

import {json} from 'body-parser';


dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT;

mongoose.connect(`${process.env.MONGO_URL}`, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true
},
  err => {
      if (!err) {
          console.log('Database connection successed');
      } else {
          console.log('Error in connection ' + err);
      }
  });

app.use('/api/users', passport.authenticate('jwt', { session: false }), userRoute);
app.use('/api/movies', passport.authenticate('jwt', { session: false }), movieRoute);
app.use("/api", authRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`[server]:Server is running at https://localhost:${port}`);
})
