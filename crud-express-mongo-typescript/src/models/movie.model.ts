import mongoose, { Schema, Model, Document } from "mongoose";

type MovieDocument = Document & {
  code: Number;
  name: String;
  year: Number;
  rating: Number;
};
type MovieInput = {
  code: MovieDocument['code'];
  name: MovieDocument['name'];
  year: MovieDocument['year'];
  rating: MovieDocument['rating'];
};

const movieSchema = new Schema({
  code: {
    type: Schema.Types.Number,
    required: true
  },
  name: {
    type: Schema.Types.String,
    required: true
  },
  year: {
    type: Schema.Types.Number,
    required: true
  },
  rating: {
    type: Schema.Types.Number,
    required: true
  },
},
  {
    collection: 'movies',
    timestamps: true,
  },
);

const Movie: Model<MovieDocument> = mongoose.model<MovieDocument>('Movie', movieSchema);

export { Movie, MovieInput, MovieDocument };