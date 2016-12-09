import { Router } from 'express';
import passport from 'passport';

import * as PostController from '../controllers/post.controller';
import * as ListController from '../controllers/list.controller';
import * as ListTemplateController from '../controllers/listTemplate.controller';
import * as UserController from '../controllers/user.controller';

const router = new Router();

router.use(function (req, res, next) {
  req.isAuthenticated();
  console.log('middleware auth? ', req.isAuthenticated())
  next();
});

// lists
router.route('/lists').get(ListController.getLists);
router.route('/lists/demo').get(ListController.getDemoLists);
router.route('/lists').post(ListController.addEmptyList);
router.route('/lists/find_or_create').post(ListController.findOrCreateListTemplate);
router.route('/lists/:cuid/toggle/:list_item_id').put(ListController.toggleListItem);
router.route('/lists/:cuid').get(ListController.getList);
router.route('/lists/:cuid').post(ListController.addListItem);

// templates
router.route('/templates').get(ListTemplateController.getTemplates);

// users
router.route('/logout').post(UserController.logout);

export default router;
