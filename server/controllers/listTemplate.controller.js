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
    console.log('a passport? ', req.session.passport)
    console.log('a user? ', req.user)
    console.log('authenticated?', req.isAuthenticated())
    res.json({ templates });
  });
}