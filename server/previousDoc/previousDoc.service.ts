import { BaseModule, inject } from '@core/base.module';
import { PreviousDocDao } from './previousDoc.dao';

export class PreviousDocService extends BaseModule {
  dao = inject(PreviousDocDao);

  async getPreviousDocData() {
    return await this.dao.getFiles();
  }

  async validateTranslation() {
    //
  }
}
