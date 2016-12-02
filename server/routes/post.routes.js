import { Router } from 'express';
import passport from 'passport';

import * as PostController from '../controllers/post.controller';
import * as ListController from '../controllers/list.controller';
import * as ListTemplateController from '../controllers/listTemplate.controller';
const router = new Router();

router.use(function (req, res, next) {
  req.isAuthenticated();
  console.log('middleware auth? ', req.isAuthenticated())
  next();
});

// Get all Posts
router.route('/posts').get(PostController.getPosts);
// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);
// Add a new Post
router.route('/posts').post(PostController.addPost);
// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost);

// lists
router.route('/lists').get(ListController.getLists);
router.route('/lists').post(ListController.addList);
router.route('/lists/find_or_create').post(ListController.findOrCreateListTemplate);
router.route('/lists/:cuid/toggle/:list_item_id').put(ListController.toggleListItem);
router.route('/lists/:cuid').get(ListController.getList);
router.route('/lists/:cuid').post(ListController.addListItems);

// templates
router.route('/templates').get(ListTemplateController.getTemplates);
export default router;
