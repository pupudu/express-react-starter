import { BaseModule, inject } from '@core/base.module';
import { sleepAsync } from '@core/utils';
import { PreviousDocDao } from './previousDoc.dao';

export class PreviousDocService extends BaseModule {
  dao = inject(PreviousDocDao);

  async getPreviousDocData() {
    await sleepAsync(1000);
    return await this.dao.getFiles();
  }
}
