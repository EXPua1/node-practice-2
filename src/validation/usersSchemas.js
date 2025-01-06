import Joi from 'joi';
import { EMAIL_REGEX } from '../constants/index.js';

export const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().regex(EMAIL_REGEX).required(),
  password: Joi.string().min(8).max(128).required(),
});
