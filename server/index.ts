import express from 'express';
import path from 'path';
import passport from 'passport';
import { RootRouter } from './router';
import { internalErrorHandler, notFoundHandler } from '@core/error-handlers';
import { DatabaseConnection } from '@core/database.connection';
import session from 'express-session';
import { PassportService } from './passport.service';

const app = express();

(async () => {
  await DatabaseConnection.init();
  const passportService = await PassportService.init();

  //passport setup
  passportService.setup();

  // register core middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  //Express Session
  app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true,
    }),
  );

  //passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

  // register application routes
  app.use(await RootRouter.getRouter());

  // register the webapp assets and root index.html
  app.use(express.static(path.resolve(`build`)));
  app.use('/', (req, res) => res.sendFile(path.resolve(`${__dirname}/../build/index.html`)));

  // register error handler middleware
  app.use(notFoundHandler);
  app.use(internalErrorHandler);
  const PORT = process.env.port || 8000;
  app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
  });
})();
