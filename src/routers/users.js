import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { registerSchema } from '../validation/usersSchemas.js';
import * as ctrl from '../controllers/users.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const usersRouter = Router();

usersRouter.post(
  '/register',
  validateBody(registerSchema),
  ctrlWrapper(ctrl.registerUser),
);

export default usersRouter;
