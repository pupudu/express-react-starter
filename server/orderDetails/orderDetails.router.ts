import { BaseRouter } from '@core/base.router';
import { OrderDetailsService } from './orderDetails.service';
import { inject } from '@core/base.module';

export class OrderDetailsRouter extends BaseRouter {
  service = inject(OrderDetailsService);

  registerRoutes() {
    this.router.get('/get-order-information', this.getOrderInformation.bind(this));
    this.router.get('/get-all-order-information', this.getAllOrderInformation.bind(this));
    this.router.get('/get-translation-information', this.getTranslationDetails.bind(this));
    this.router.get('/get-all-translation-information', this.getAllTranslationDetails.bind(this));
    this.router.post('/save-order-information', this.saveOrderInformation.bind(this));
    this.router.post('/delete-order-information', this.deleteOrderInformation.bind(this));
    this.router.post('/update-order-status', this.updateOrderStatus.bind(this));
    this.router.post('/add-translator', this.addTranslator.bind(this));
    this.router.post('/update-translation-status', this.updateTranslationStatus.bind(this));

  }

  async getOrderInformation(req, res) {
    return res.json(await this.service.getOrderDetails(req.session.passport.user));
  }
  async getAllOrderInformation(req, res) {
    return res.json(await this.service.getAllOrderInformation());
  }
  async getTranslationDetails(req, res) {
    return res.json(await this.service.getTranslationDetails(req.session.passport.user));
  }
  async getAllTranslationDetails(req, res) {
    return res.json(await this.service.getAllTranslationDetails());
  }
  async saveOrderInformation(req, res) {
    return res.json(await this.service.saveOrderInformation(req.body));
  }
  async deleteOrderInformation(req, res) {
    return res.json(await this.service.deleteOrderInformation(req.body));
  }
  async updateOrderStatus(req, res) {

    return res.json(await this.service.updateOrderStatus(req.body));
  }
  async addTranslator(req, res) {
    const data = [...req.body,req.session.passport.user];

    return res.json(await this.service.addTranslator(data));
  }
  async updateTranslationStatus(req, res) {
    return res.json(await this.service.updateTranslationStatus(req.body));
  }
}
