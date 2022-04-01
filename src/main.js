import WebApplication from './app';

const app = WebApplication.build();
// const config = WebApplication.configService();

app.run(process.env.PORT);
