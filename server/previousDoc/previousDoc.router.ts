import { BaseRouter } from '@core/base.router';
import { PreviousDocService } from './previousDoc.service';

export class PreviousDocRouter extends BaseRouter {
  service: PreviousDocService;

  async didInit() {
    this.service = await PreviousDocService.init();
  }

  registerRoutes() {
    this.router.get('/showFiles', this.getPreviousDocData.bind(this));
  }

  async getPreviousDocData(req, res) {
    res.json(await this.service.getPreviousDocData());
  }
}
