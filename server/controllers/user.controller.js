import * as Q from 'q';
import mongoose from 'mongoose';
mongoose.Promise = Q.Promise;

import User from '../models/user';

export function logout(req, res) {
  req.logout();
  res.status(200).send();
}

export function setUsername(req, res) {
  if (!req.user) {
    res.status(401).send('Unauthorized');
    return;
  }
  
  if (!req.body.username) {
    res.status(422).end();
    return;
  }
  
  req.user.username = req.body.username;
  
  req.user.save()
    .then( (user) => {
      res.status(200).send({user: user.getPublicFields()});
    })
    .catch( (err) => {
      res.status(422).send(err);
    });
}

