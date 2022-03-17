import fs from 'fs';
import { parse } from 'dotenv';

export class ConfigStorage {
  storage = {};

  constructor(buffer) {
    this.storage = buffer;
  }

  get(key) {
    return this.storage[key];
  }
}

export default class ConfigService {
  static readFile(envFile) {
    if (process.env.NODE_ENV == 'production') {
      return process.env;
    }

    try {
      return Buffer.from(fs.readFileSync(envFile, 'utf-8'));
    } catch (err) {
      throw new Error(`${envFile} not found`);
    }
  }

  static loadSettings(envFiles) {
    const buffer = parse(this.readFile(envFiles), { debug: true });
    return new ConfigStorage(buffer);
  }
}
