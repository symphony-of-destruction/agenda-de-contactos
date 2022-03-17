import { Router } from 'express';

const controller = Router();

controller.all('/', (req, res) => {
  res.status(200).send('The Show Must Go On');
});

export default controller;
