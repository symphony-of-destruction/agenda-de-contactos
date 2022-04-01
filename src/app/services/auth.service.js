import ValidateUser from './validateUser.service';

export default class AuthService {
  constructor() {
    this.validator = new ValidateUser();
  }

  async login(req, res) {
    req.session.name = req.body.name;
    req.session.password = req.body.password;

    const user = this.validator.validate({
      name: req.session.name,
      password: req.session.password,
    });

    if (!user) {
      req.session.name = '';
      req.session.password = '';
      return await res
        .status(401)
        .send(
          `<h1 style="text-color:red;">No hay user ${req.body.name} con ese usuario en nuestra DB.</h1>`,
        );
    }

    await res.redirect('/');
  }

  async logout(req, res) {
    req.session.name = '';
    req.session.password = '';
    return await res.redirect('/signin');
  }
}
