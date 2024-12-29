import Joi from 'joi';

import { PRODUCT_CATEGORIES } from '../constants/index.js';

export const productsAddingSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(0).required(),
  category: Joi.string().valid(...PRODUCT_CATEGORIES),
  description: Joi.string(),
});
