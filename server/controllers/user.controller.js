import User from '../models/user';

export function logout(req, res) {
  req.logout();
  res.status(200).send();
  
  // console.log('this is req user before', req.user)
  // req.logout();
  // console.log('this is req user after', req.user)
  // res.redirect('/');
  // res.cookie("sessionId", "", { expires: new Date() });
  // console.log('res cookie?', res.cookie('sessionId'))
  // req.session.destroy(function (err) {
  //   console.log('error: ', err)
  //   res.clearCookie('sessionId', { path: '/' });
  //   console.log('res cookie?', res.cookie('sessionId'))
  //   // res.cookie("sessionId", "", { expires: new Date() });
  //   // res.clearCookie('sessionId', {path:'/'});
  //   res.redirect('/'); //Inside a callback… bulletproof!
  // });
}
