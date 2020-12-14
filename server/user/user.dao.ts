import { BaseDao } from '@core/base.dao';
import dayjs from 'dayjs';
import bcrypt from 'bcryptjs';

export class UserDao extends BaseDao {
  async saveUser({ name, birthday, signinAs, email, password, translateFrom, translateTo }) {
    return await this.query(
      `
        INSERT INTO userdetails (name,birthday, signinAs,email, password, translateFrom, translateTo )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
      [
        name,
        dayjs(birthday).format('YYYY-MM-DD'),
        signinAs,
        email,
        await this.hashPassword(password),
        translateFrom,
        translateTo,
      ],
    );
  }
  async saveFileInfo({ order_number, document_name, document_status, client_id }) {
    return await this.query(
      `
        INSERT INTO document_details (order_number, document_name, document_status, client_id)
        VALUES (?, ?, ?, ?)
    `,
      [
          order_number,
          document_name,
          document_status,
          client_id,
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
    SELECT * FROM database.userdetails WHERE email=?
    `,
      [email],
    );
    return rows[0];
  }
  async getUserInformation(email) {
    const rows = await this.query(
      `
    SELECT * FROM database.userdetails WHERE email=?
    `,
      [email],
    );

    return rows[0];
  }
}
