import path from 'path';
import createServer from './server';
import ConfigService from './services/config.service';
import useController from './controllers/index.controller';

class App {
  constructor(configStorage) {
    this.config = configStorage;
    this.server = createServer(this.config);
    useController(this.server);
  }

  run(port) {
    this.server.listen(port, () =>
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
    return new App(config);
  }
}
