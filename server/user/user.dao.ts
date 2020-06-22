import { BaseDao } from '@core/base.dao';
import dayjs from 'dayjs';

export class UserDao extends BaseDao {
  async saveUser({ name, birthday, gender, email, password }) {
    return await this.query(
      `
        INSERT INTO userdetails (name,birthday,gender,email, password)
        VALUES (?, ?, ?, ?, ?)
    `,
      [name, dayjs(birthday).format('YYYY-MM-DD'), gender, email, password],
    );
  }
}
