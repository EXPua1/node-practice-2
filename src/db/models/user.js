import { Schema, model } from 'mongoose';
import { EMAIL_REGEX } from '../../constants/index.js';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: EMAIL_REGEX,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

export const UserCollection = model('user', userSchema);
