import { join } from 'path';
import fs from 'fs';

export default class ValidateUser {
  constructor() {
    this.users = this.loadData().users;
  }

  loadData() {
    return JSON.parse(
      fs.readFileSync(join(process.cwd(), 'src/data/object.json')),
    );
  }

  validate({ name, password }) {
    return this.users.find(
      (user) => user.name == name && user.password == password,
    );
  }

  saveData({ name, password, data }) {
    const user = this.validate({ name, password });
    if (user) {
      const userId = this.users.findIndex((found) => found.name == user.name);
      const save = this.loadData();
      user.data = data;
      this.users[userId] = user;
      save.users = this.users;

      fs.writeFileSync(
        join(process.cwd(), 'src/data/object.json'),
        JSON.stringify(save),
      );
    }
    return true;
  }
}
