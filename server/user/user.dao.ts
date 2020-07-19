import { BaseDao } from '@core/base.dao';
import dayjs from 'dayjs';
import bcrypt from 'bcryptjs';

export class UserDao extends BaseDao {
  async saveUser({ name, birthday, signinAs, email, password }) {
    return await this.query(
      `
        INSERT INTO userdetails (name,birthday, signinAs,email, password )
        VALUES (?, ?, ?, ?, ?)
    `,
      [
        name,
        dayjs(birthday).format('YYYY-MM-DD'),
        signinAs,
        email,
        await this.hashPassword(password),
      ],
    );
  }
  async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
  async getUser(email) {
    const rows = await this.query(
      `
    SELECT * FROM userdetails WHERE email=?
    `,
      [email],
    );
    return rows[0];
  }
}
