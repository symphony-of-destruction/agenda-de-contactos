import { Router } from 'express';

const controller = Router();

controller.get('/', (req, res) => {
  res.render('home', { greeter: 'The Show Must Go On' });
});

export default (app) => {
  app.use(controller);
};
