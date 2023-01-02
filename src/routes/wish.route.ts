import { Router } from 'express';

import WishsController from '../controllers/wishs.controller';
import { requiredLogin } from '../middlewares/auth.middleware';

const wishsRouter = Router();
const wishsController = new WishsController();

wishsRouter.post('/:postId', requiredLogin, wishsController.wishPost);

export default wishsRouter;
