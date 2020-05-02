import { BaseModule } from '@core/base.module';

export class ExampleService extends BaseModule {
  getExampleData() {
    return 'Hello example';
  }
}
