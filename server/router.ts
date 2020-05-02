import { BaseRouter } from '@core/base.router';
import { ExampleRouter } from './example/example.router';

export class RootRouter extends BaseRouter {
  protected async didInit() {
    this.router.use('/example', await ExampleRouter.getRouter());
  }
}
