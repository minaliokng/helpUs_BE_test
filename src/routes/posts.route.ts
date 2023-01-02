import { Router } from 'express';
import { multeruploader } from '../middlewares/multer.uploader';
import PostsController from '../controllers/posts.controller';

const postsRouter = Router();
const postsController = new PostsController();

postsRouter.post('/', [multeruploader.array('post-image', 3)], postsController.createPost);
postsRouter.get('/', postsController.findAllPosts);
postsRouter.get('/:postId', postsController.findDetailPost);
postsRouter.put('/:postId', [multeruploader.array('post-image', 3)], postsController.updatePost);
postsRouter.delete('/:postId', postsController.deletePost);

export default postsRouter;
