import { Router } from 'express';
import * as ListController from '../controllers/list.controller';
const router = new Router();

// Get all Posts
router.route('/lists').get(ListController.getLists);

// Get one post by cuid
router.route('/lists/:cuid').get(ListController.getList);

// Add a new Post
router.route('/lists').post(ListController.addList);

// Delete a post by cuid
router.route('/lists/:cuid').delete(ListController.deleteList);

export default router;
