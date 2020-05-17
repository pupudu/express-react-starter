import { BaseModule, inject } from '@core/base.module';
import { UserDao } from './user.dao';

export class UserService extends BaseModule {
  dao = inject(UserDao);

  async saveUser(data) {
    return await this.dao.saveUser(data);
  }
}
