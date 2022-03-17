import { Router } from 'express';

const controller = Router();

controller.all('/', (req, res) => {
  res.render('home', { greeter: 'The Show Must Go On' });
});

export default controller;
