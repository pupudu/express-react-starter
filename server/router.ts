import { BaseRouter } from '@core/base.router';
import { OrderDetailsRouter } from './orderDetails/orderDetails.router';
import { UserRouter } from './user/user.router';

export class RootRouter extends BaseRouter {
  protected async didInit() {
    this.router.use('/orderDetails', await OrderDetailsRouter.getRouter());
    this.router.use('/user', await UserRouter.getRouter());
  }
}
