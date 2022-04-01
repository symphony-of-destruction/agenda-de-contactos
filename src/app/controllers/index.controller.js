import { Router } from 'express';
import ValidateUser from '../services/validateUser.service';

const controller = Router();

controller.get('/', (req, res) => {
  if(req.session.name){
    res.render('home', { greeter: 'The Show Must Go On' });
  }
  res.redirect('/signin');
});


controller.get('/signin', (req, res) => {
  res.render('login');
});


controller.post('/signin', (req, res) => {
  req.session.name = req.body.name;
  req.session.password = req.body.password;
  
  const user = new ValidateUser().validate({
    name: req.session.name,
    password: req.session.password,
  });

  if(user){
    res.redirect('/');
  }
  req.session.name = '';
  req.session.password = '';
  res.status(401).send(`<h1 style="text-color:red;">No hay user ${req.body.name} con ese usuario en nuestra DB.</h1>`);
  //res.status(200).send(user.data);
  //TODO:
  /*
    Luis, disenar una vista para cuando el usuario no coinsida.
    Tratar de desarrollar el envio de correo con mailto y un modal para eso.
    Traer mediante JS esos datos al modal.
  */

});


controller.get('/logout', (req, res) => {

  req.session.name = '';
  req.session.password = '';
  res.redirect('/signin');
});
  

//Discarded for Now!
/* controller.post('/logut', (req, res) => {
  const data = new ValidateUser().saveData({
    name: req.body.name,
    password: req.body.password,
    data: req.body.data,
  });
  res.status(200).send('done');
}); */

export default (app) => {
  app.use(controller);
};
