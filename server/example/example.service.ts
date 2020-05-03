import { BaseModule } from '@core/base.module';
import { sleepAsync } from '@core/utils';

export class ExampleService extends BaseModule {
  async getExampleData() {
    await sleepAsync(5000);
    return 'Hello example';
  }
}
