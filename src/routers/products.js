import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import * as c from '../controllers/products.js';
import { validateId } from '../middlewares/validateId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { productsAddingSchema } from '../validation/productsSchemas.js';

export const productRouter = Router();

productRouter.get('/', ctrlWrapper(c.getProducts));

productRouter.get('/:id', validateId, ctrlWrapper(c.getProductsById));

productRouter.post('/', validateBody(productsAddingSchema), ctrlWrapper(c.addProduct));
