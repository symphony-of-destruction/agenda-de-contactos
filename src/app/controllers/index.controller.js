import { Router } from 'express';
import ValidateUser from '../services/validateUser.service';

const controller = Router();

controller.get('/', (req, res) => {
  res.render('home', { greeter: 'The Show Must Go On' });
});

controller.post('/sigin', (req, res) => {
  req.session.name = req.body.name;
  req.session.password = req.body.password;
  const user = new ValidateUser().validate({
    name: req.session.name,
    password: req.session.password,
  });
  res.status(200).send(user.data);
});

controller.post('/logut', (req, res) => {
  const data = new ValidateUser().saveData({
    name: req.body.name,
    password: req.body.password,
    data: req.body.data,
  });
  res.status(200).send('done');
});

export default (app) => {
  app.use(controller);
};
