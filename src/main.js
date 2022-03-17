import WebApplication from './server';

const app = WebApplication.build();
const config = WebApplication.configService();

app.run(config.get('PORT'));
