import { BaseRouter } from '@core/base.router';
import { ExampleService } from './example.service';

export class ExampleRouter extends BaseRouter {
  service: ExampleService;

  async didInit() {
    this.service = await ExampleService.init();
  }

  registerRoutes() {
    this.router.get('/all', this.getExampleData.bind(this));
  }

  async getExampleData(req, res) {
    res.json(await this.service.getExampleData());
  }
}
