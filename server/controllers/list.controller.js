import List from '../models/list';
import ListTemplate from '../models/listTemplate';
import cuid from 'cuid';
import * as wolframHelper from '../util/wolframHelper';
import * as Q from 'q';
import * as _ from 'lodash';
import mongoose from 'mongoose';
mongoose.Promise = Q.Promise;


export function getDemoLists(req, res) {
  res.json( {lists: List.demoLists() });
}

export function cloneList(req, res) {
  if (!req.user) {
    res.status(401).send('Unauthorized');
  }
  
  List.findOne({ cuid: req.params.cuid })
    .exec()
    .then( (list) => {
      return list.cloneForUser(req.user);
    })
    .then( (list) => {
      return List.populate(list, {path:'_users', select: 'name picture username'});
    })
    .then( (list) => {
      res.json({ list });
    })
    .catch( (err) => {
      console.log('error? ', err)
      res.status(422).send(err);
    });
}

export function getRecentLists(req, res) {
  if (!req.user) {
    req.user = {_id: null}
  }
  
  List
    .find()
    .byRecent()
    .ne('_users', req.user._id)
    .populate('_users', 'name picture username')
    .exec()
    .then( (lists) => {
      const uniqueLists = _.chain(lists)
        .uniqBy('name')
        .take(10)
        .value();
      res.json( { lists: uniqueLists });
    })
    .catch( (err) => {
      res.status(422).send(err);
    });
}

export function getLists(req, res) {
  if (!req.user) {
    res.json({lists: []});
    return;
  }
  
  List.find().forUser(req.user)
    .sort('-dateAdded')
    .populate('_users', 'name picture username')
    .exec()
    .then( (lists) => {
      res.json({ lists });
    })
    .catch( (err) => {
      res.status(422).send(err);
    });
  
}

/**
 * Save a list
 * @param req
 * @param res
 * @returns void
 */
export function addEmptyList(req, res) {
  
  if (!req.body.list.verb || !req.body.list.action) {
    res.status(403).end();
  }
  
  const newList = new List(req.body.list);
  newList.cuid = cuid();
  newList._users.push(req.user);
  
  const newTemplate = new ListTemplate({
    actions: [req.body.list.action],
    createdBy: req.user
  });
  
  newTemplate.save()
    .then( (template) => {
      console.log('creating a new empty template');
      return newList.addItemsFromTemplate(template);
    })
    .then( (list) => {
      return List.populate(list, {path:'_users', select: 'name picture username'});
    })
    .then( (list) => {
      res.json({ list });
    })
    .catch( (err) => {
      res.status(422).send(err);
    });
}

/**
 * Find or create a list template
 * @param req
 * @param res
 * @returns void
 */
export function findOrCreateListTemplate(req, res) {
  
  if (!req.body.list.verb || !req.body.list.action) {
    res.status(403).end();
    return Q.reject('Invalid input');
  }
  
  let newList = new List(req.body.list);
  newList.cuid = cuid();
  newList._users.push(req.user);
  
  //search ListTemplate for matching actions
  ListTemplate.findOne({ actions: req.body.list.action }).exec()
    .then( (template) => {
      //if we have a template with that action already, create
      // a new list based on it
      if(template) {
        console.log('template found by name');
        return Q.when(template);
      }
      return findOrCreateTemplateByItems(req.body.list.action);
    })
    .then( (template) => {
      return newList.addItemsFromTemplate(template);
    })
    .then( (list) => {
      return List.populate(list, {path:'_users', select: 'name picture username'})
    })
    .then( (list) => {
      res.json({ list: list });
    })
    .catch(function(err) {
      console.log('error in the controller', err);
      res.status(422).send(err);
    });
}

/**
 * Get a single list
 * @param req
 * @param res
 * @returns void
 */
export function getList(req, res) {
  List.findOne({ cuid: req.params.cuid })
    .populate('_users', 'name picture username')
    .exec()
    .then( (list) => {
      res.json({ list });
    })
    .catch( (err) => {
      res.status(404).send(err);
    });
}

export function addListItem(req, res) {
  
  List.findOne({ cuid: req.params.cuid })
    .populate('_users', 'name picture username')
    .exec()
    .then( (list) => {
      return list.addListItem(req.body.item, req.user);
    })
    .then( (list) => {
      res.json({ list });
    })
    .catch( (err) => {
      res.status(422).send(err);
    });
}

export function deleteListItem(req, res) {
  List.findOne({ cuid: req.params.cuid })
    .populate('_users', 'name picture username')
    .exec()
    .then( (list) => {
      return list.deleteListItem(req.params.id);
    })
    .then( (list) => {
      res.json({ list });
    })
    .catch( (err) => {
      res.status(422).send(err);
    });
}

export function paginateLists(req, res) {
  List.find().byPage(req.params.page)
    .then( lists => {
      res.json({lists: lists});
    })
    .catch( err => {
      res.status(500).send(err);
    });
}

export function count(req, res) {
  List.count()
    .then( count => {
      res.json({count: count});
    })
    .catch( err => {
      res.status(500).send(err);
    });
}

export function random(req, res) {
  List.random()
    .then( list => {
      res.json({list: list});
    })
    .catch( err => {
      res.status(500).send(err);
    });
}

/**
 * Delete a list
 * @param req
 * @param res
 * @returns void
 */
export function deleteList(req, res) {
  List.findOne({ cuid: req.params.cuid }).exec((err, list) => {
    if (err) {
      res.status(500).send(err);
    }

    list.remove(() => {
      res.status(200).end();
    });
  });
}

export function toggleListItem(req, res) {
 
  List.findOne( { cuid: req.params.cuid })
    .populate('_users', 'name picture username')
    .exec()
    .then( (list ) => {
      const todo = list.items.id(req.params.list_item_id);
      
      todo.dateModified = Date.now();
      todo.complete = !todo.complete;

      return list.save();  
    })
    .then( (list) => {
      res.json({ list });
    })
    .catch( (err) => {
      res.status(422).send(err);
    })
  
}

function findOrCreateTemplateByItems(action) {
  let items;
  return wolframHelper.tryQueries(action)
    .then( (resp) => {
      //look to see if we have any templates with these items already
      items = resp;
      return ListTemplate.find().byItems(resp).exec();
    })
    .then( (template) => {
      if(template) {
        console.log('template found by items');
        //update template to include name
        template.actions.push(action);
        return template.save();
      }
      else {
        //create a new ListTemplate
        console.log('creating a new template');
        return ListTemplate.newWithItems(action, items);
      }
    })
    .then( (template) => {
      return template;
    })
    .catch( (err) => {
      return Q.reject(err);
    });
}