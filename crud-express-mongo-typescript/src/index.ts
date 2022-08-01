import express, { Express, Request, Response } from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";

import "dotenv/config"; 

import { movieRoute } from "./routes/movie.route";

import {json} from 'body-parser';


dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.use('/', movieRoute());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`[server]:Server is running at https://localhost:${port}`);
})
