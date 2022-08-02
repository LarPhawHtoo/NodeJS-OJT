//import mongoose, { Schema, Model, Document } from 'mongoose';
//
//type UserDocument = Document & {
//  fullName: string;
//  email: string;
//  password: string;
//};
//
//type UserInput = {
//  fullName: UserDocument['fullName'];
//  email: UserDocument['email'];
//  password: UserDocument['password'];
//};
//
//const usersSchema = new Schema(
//  {
//    fullName: {
//      type: Schema.Types.String,
//      required: true,
//    },
//    email: {
//      type: Schema.Types.String,
//      required: true,
//      unique: true,
//    },
//    password: {
//      type: Schema.Types.String,
//      required: true,
//    },
//  },
//  {
//    collection: 'users',
//    timestamps: true,
//  },
//);
//
//const User: Model<UserDocument> = mongoose.model<UserDocument>('User', usersSchema);
//
//export { User, UserInput, UserDocument };
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  type: {
    type: String,
    enum: ['Admin', 'User'],
    default: 'User'
  },
  phone: {
    type: String,
    default: ""
  },
  dob: {
    type: Date,
    default: ""
  },
  address: {
    type: String,
    default: ""
  },
  //profile: {
  //  type: String,
  //  default: ""
  //},
  created_user_id: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  updated_user_id: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  deleted_user_id: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  deleted_at: {
    type: Date
  },
},
  {
    timestamps: true
  }
);
export default model("User", userSchema)
