import { BaseDao } from '@core/base.dao';

export class UserDao extends BaseDao {
  async saveUser({ email, password }) {
    return await this.query(
      `
        INSERT INTO table_name (email, password)
        VALUES (?, ?)
    `,
      [email, password],
    );
  }
}
