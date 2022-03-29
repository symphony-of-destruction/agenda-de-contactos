import path from 'path';
import express from 'express';
import session from 'express-session';

export default (config) => {
  const server = express();

  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.use(
    session({
      secret: config.get('auth_key'),
      resave: false,
      saveUninitialized: true,
    }),
  );
  server.set('view engine', 'ejs');
  server.set('views', path.join(process.cwd(), 'src/views/pages'));
  server.use('/static', express.static(path.join(process.cwd(), 'public')));

  return server;
};
