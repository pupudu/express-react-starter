import { BaseModule, inject } from '@core/base.module';
import { UserDao } from './user.dao';

export class UserService extends BaseModule {
  __SINGLETON__ = true;
  dao = inject(UserDao);

  async saveUser(data) {
    return await this.dao.saveUser(data);
  }
  async saveFileInfo(data) {
    return await this.dao.saveFileInfo(data);
  }
  async getUser(email) {
    return await this.dao.getUser(email);
  }

  async getUserInformation(email) {
    return await this.dao.getUserInformation(email);
  }
}
