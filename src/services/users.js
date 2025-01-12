import { UserCollection } from '../db/models/user.js';

export const registerUser = (userData) => {
  return UserCollection.create(userData);
};
export const findUserByEmail = async (email) => {
  return UserCollection.findOne({ email });
};
