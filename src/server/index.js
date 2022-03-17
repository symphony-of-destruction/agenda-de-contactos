import path from 'path';
import express from 'express';
import ConfigService from './config.service';
import controller from '../controller/index.controller';

class Server {
  expressInstance = express();
  config = {};
  controller = controller;

  constructor(configStorage) {
    this.config = configStorage;

    this.expressInstance.use(express.urlencoded({ extended: false }));
    this.expressInstance.use(this.controller);
    this.expressInstance.set('view engine', 'ejs');
    this.expressInstance.set('views', path.join(process.cwd(), 'src/view'));
    this.expressInstance.use(
      '/static',
      express.static(path.join(process.cwd(), 'public')),
    );
  }

  run(port) {
    this.expressInstance.listen(port, () =>
      console.log(`The Server is running on http://127.0.0.1:${port}`),
    );
  }
}

export default class WebApplication {
  static configService() {
    return ConfigService.loadSettings(path.join(process.cwd(), '.env.local'));
  }

  static build() {
    const config = this.configService();
    return new Server(config);
  }
}
