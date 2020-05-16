import express from 'express';
import path from 'path';
import { RootRouter } from './router';
import { internalErrorHandler, notFoundHandler } from '@core/error-handlers';
import { DatabaseConnection } from '@core/database.connection';

const app = express();

(async () => {
  await DatabaseConnection.init();

  // register core middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // register application routes
  app.use(await RootRouter.getRouter());

  // register the webapp assets and root index.html
  app.use(express.static(path.resolve(`build`)));
  app.use('/', (req, res) => res.sendFile(path.resolve(`${__dirname}/../build/index.html`)));

  // register error handler middleware
  app.use(notFoundHandler);
  app.use(internalErrorHandler);

  app.listen(8000, () => {
    console.log(`Server started in port ${8000}`);
  });
})();
