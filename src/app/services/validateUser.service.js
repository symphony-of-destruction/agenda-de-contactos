import { join } from 'path';
import fs from 'fs';

export default class ValidateUser {
  constructor() {
    const data = JSON.parse(
      fs.readFileSync(join(process.cwd(), 'src/data/object.json')),
    );

    this.users = data.users;
  }

  validate({ name, password }) {
    return this.users.find(
      (user) => user.name == name && user.password == password,
    );
  }
}
