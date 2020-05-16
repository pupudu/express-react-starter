import { BaseRouter } from '@core/base.router';
import { PreviousDocService } from './previousDoc.service';
import { inject } from '@core/base.module';

export class PreviousDocRouter extends BaseRouter {
  service = inject(PreviousDocService);

  registerRoutes() {
    this.router.get('/showFiles', this.getPreviousDocData.bind(this));
  }

  async getPreviousDocData(req, res) {
    res.json(await this.service.getPreviousDocData());
  }
}
