import { BaseRouter } from '@core/base.router';
import { ExampleService } from './example.service';
import { inject } from '@core/base.module';

export class ExampleRouter extends BaseRouter {
  service = inject(ExampleService);

  registerRoutes() {
    this.router.get('/all', this.getExampleData.bind(this));
  }

  async getExampleData(req, res) {
    res.json(await this.service.getExampleData());
  }
}
