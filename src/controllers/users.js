import * as services from '../services/users.js';

export const registerUser = async (req, res) => {
  const user = await services.registerUser(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};
