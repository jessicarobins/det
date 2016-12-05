import ListTemplate from '../models/listTemplate';

/**
 * Get all list templates
 * @param req
 * @param res
 * @returns void
 */
export function getTemplates(req, res) {
  ListTemplate.find().sort('-dateAdded').exec((err, templates) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ templates });
  });
}