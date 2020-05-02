import { BaseModule } from './base.module';
import { Router } from 'express';

export class BaseRouter extends BaseModule {
  public router: Router;

  static getInstance() {
    const self = super.getInstance();
    self.router = Router();
    self.registerRoutes();
    return self;
  }

  public static async getRouter() {
    return (await this.init()).router;
  }

  public registerRoutes() {
    // placeholder
  }
}
