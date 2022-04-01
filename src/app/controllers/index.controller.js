import { Router } from 'express';
import AuthService from '../services/auth.service';

const authService = new AuthService();
const controller = Router();

controller.get('/', async (req, res) => {
  if (!(await req.session.name)) {
    return res.redirect('/signin');
  }
  return res.render('home', { greeter: 'The Show Must Go On' });
});

controller.get('/signin', async (req, res) => {
  res.render('login');
});

controller.get('/logout', async (req, res) => {
  return await authService.logout(req, res);
});

// API's route

controller.post('/signin', async (req, res) => {
  return await authService.login(req, res);
});

/* discarded!
controller.post('/logut', (req, res) => {
  const data = new ValidateUser().saveData({
    name: req.body.name,
    password: req.body.password,
    data: req.body.data,
  });
  res.status(200).send('done');
}); 
*/

export default (app) => {
  app.use(controller);
};
