import { BaseModule } from '@core/base.module';
import { sleepAsync } from '@core/utils';

export class PreviousDocService extends BaseModule {
  fileNames = ['file1', 'file2'];
  async getPreviousDocData() {
    await sleepAsync(1000);
    return this.fileNames;
  }
}
