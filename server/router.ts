import { BaseRouter } from '@core/base.router';
import { ExampleRouter } from './example/example.router';
import { PreviousDocRouter } from './previousDoc/previousDoc.router';
import { UserRouter } from './user/user.router';

export class RootRouter extends BaseRouter {
  protected async didInit() {
    this.router.use('/example', await ExampleRouter.getRouter());
    this.router.use('/PreviousDoc', await PreviousDocRouter.getRouter());
    this.router.use('/user', await UserRouter.getRouter());
  }
}
