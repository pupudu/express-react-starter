import { BaseModule, inject } from '@core/base.module';
import { OrderDetailsDao } from './orderDetails.dao';

export class OrderDetailsService extends BaseModule {
  dao = inject(OrderDetailsDao);

  async getOrderDetails(email) {
    return await this.dao.getOrderDetails(email);
  }
  async getTranslationDetails(email) {
    return await this.dao.getTranslationDetails(email);
  }
  async saveOrderInformation(data) {
    return await this.dao.saveOrderInformation(data);
  }
}
