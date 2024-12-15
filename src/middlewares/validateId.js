import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const validateId = (req, res, next) => {
  const { id } = req.params;
  try {
    if (!isValidObjectId(id)) {
      throw createHttpError(400, 'Invalid Id');
    }
    next();
  } catch (error) {
    next(error);
  }
};
