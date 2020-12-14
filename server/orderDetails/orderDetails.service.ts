import { BaseModule, inject } from '@core/base.module';
import { OrderDetailsDao } from './orderDetails.dao';

export class OrderDetailsService extends BaseModule {
  dao = inject(OrderDetailsDao);

  async getOrderDetails(email) {
    return await this.dao.getOrderDetails(email);
  }
  async getAllOrderInformation() {
    return await this.dao.getAllOrderInformation();
  }
  async getTranslationDetails(email) {
    return await this.dao.getTranslationDetails(email);
  }
  async getAllTranslationDetails() {
    return await this.dao.getAllTranslationDetails();
  }
  async saveOrderInformation(data) {
    return await this.dao.saveOrderInformation(data);
  }
  async deleteOrderInformation(data) {
    return await this.dao.deleteOrderInformation(data);
  }
  async updateOrderStatus(data) {
    return await this.dao.updateOrderStatus(data);
  }
  async updateTranslationStatus(data) {
    return await this.dao.updateTranslationStatus(data);
  }
  async addTranslator(data) {
    return await this.dao.addTranslator(data);
  }
}
