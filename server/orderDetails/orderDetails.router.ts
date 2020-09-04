import { BaseRouter } from '@core/base.router';
import { OrderDetailsService } from './orderDetails.service';
import { inject } from '@core/base.module';

export class OrderDetailsRouter extends BaseRouter {
  service = inject(OrderDetailsService);

  registerRoutes() {
    this.router.get('/get-order-information', this.getOrderInformation.bind(this));
    this.router.get('/get-translation-information', this.getTranslationDetails.bind(this));
    this.router.post('/save-order-information', this.saveOrderInformation.bind(this));
  }

  async getOrderInformation(req, res) {
    return res.json(await this.service.getOrderDetails(req.session.passport.user));
  }
  async getTranslationDetails(req, res) {
    return res.json(await this.service.getTranslationDetails(req.session.passport.user));
  }
  async saveOrderInformation(req, res) {
    return res.json(await this.service.saveOrderInformation(req.body));
  }
}
