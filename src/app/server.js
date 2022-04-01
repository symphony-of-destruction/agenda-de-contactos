import path from 'path';
import express from 'express';
import session from 'express-session';
import sqliteStoreFactory from 'express-session-sqlite';
import * as sqlite3 from 'sqlite3'

export default (config) => {
  const server = express();
  const SqliteStore = sqliteStoreFactory(session);

  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.set('trust proxy', 1);
  server.use(
    session({
      secret: config.get('auth_key'),
      resave: false,
      saveUninitialized: true,
      store: new SqliteStore({
        driver: sqlite3.Database,
        path: '/tmp/sqlite.db',
        ttl: '10d',
        prefix: 'sess:',
        cleanupInterval: '10d',
      }),
    }),
  );
  server.set('view engine', 'ejs');
  server.set('views', path.join(process.cwd(), 'src/views/pages'));
  server.use('/static', express.static(path.join(process.cwd(), 'public')));

  return server;
};
