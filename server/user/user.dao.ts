import { BaseDao } from '@core/base.dao';

export class UserDao extends BaseDao {
  async saveUser({ name, birthday, gender, email, password }) {
    return await this.query(
      `
        INSERT INTO userdetails (name,birthday,gender,email, password)
        VALUES (?, ?, ?, ?, ?)
    `,
      [name, birthday, gender, email, password],
    );
  }
}
