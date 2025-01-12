import createHttpError from 'http-errors';
import * as services from '../services/users.js';

export const registerUser = async (req, res) => {
  const findedUser = await services.findUserByEmail(req.body.email);
  if (findedUser) {
    throw createHttpError(409, 'User is already exist.');
  }

  const user = await services.registerUser(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};
