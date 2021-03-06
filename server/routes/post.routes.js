import { Router } from 'express';

import * as ListController from '../controllers/list.controller';
import * as ListTemplateController from '../controllers/listTemplate.controller';
import * as UserController from '../controllers/user.controller';

const router = new Router();

router.use(function (req, res, next) {
  req.isAuthenticated();
  next();
});

// lists
router.route('/lists').get(ListController.getLists);
router.route('/lists/random').get(ListController.random);
router.route('/lists/demo').get(ListController.getDemoLists);
router.route('/lists/count').get(ListController.count);
router.route('/lists/recent/:page').get(ListController.paginateLists);
router.route('/lists/recent').get(ListController.getRecentLists);
router.route('/lists').post(ListController.addEmptyList);
router.route('/lists/find_or_create').post(ListController.findOrCreateListTemplate);
router.route('/lists/:cuid/toggle/:list_item_id').put(ListController.toggleListItem);
router.route('/lists/:cuid/clone').post(ListController.cloneList);
router.route('/lists/:cuid').get(ListController.getList);
router.route('/lists/:cuid').post(ListController.addListItem);
router.route('/lists/:cuid/item/:id').delete(ListController.deleteListItem);

// templates
router.route('/templates').get(ListTemplateController.getTemplates);

// users
router.route('/logout').post(UserController.logout);
router.route('/user').put(UserController.setUsername);

export default router;
