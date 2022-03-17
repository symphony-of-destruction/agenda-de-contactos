import path from 'path';
import express from 'express';

export default () => {
  const server = express();

  server.use(express.urlencoded({ extended: false }));
  server.set('view engine', 'ejs');
  server.set('views', path.join(process.cwd(), 'src/views'));
  server.use('/static', express.static(path.join(process.cwd(), 'public')));

  return server;
};
