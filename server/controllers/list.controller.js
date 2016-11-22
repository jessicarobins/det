import List from '../models/list';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all lists
 * @param req
 * @param res
 * @returns void
 */
export function getLists(req, res) {
  List.find().sort('-dateAdded').exec((err, lists) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ lists });
  });
}

/**
 * Save a list
 * @param req
 * @param res
 * @returns void
 */
export function addList(req, res) {
  if (!req.body.list.name) {
    res.status(403).end();
  }

  const newList = new List(req.body.list);

  // Let's sanitize inputs
  newList.name = sanitizeHtml(newList.name);
  newList.cuid = cuid();
  newList.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ list: saved });
  });
}

/**
 * Get a single list
 * @param req
 * @param res
 * @returns void
 */
export function getList(req, res) {
  List.findOne({ cuid: req.params.cuid }).exec((err, list) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ list });
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
