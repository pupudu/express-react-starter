import { BaseDao } from '@core/base.dao';
import dayjs from 'dayjs';

export class OrderDetailsDao extends BaseDao {
  async getOrderDetails(email) {
    const id = await this.query(
      `
    SELECT id FROM database.userdetails WHERE email=?
    `,
      [email],
    );
    const clientId = id[0].id;

    const rows = await this.query(
      `
    SELECT * FROM database.order_details WHERE client_id=?;
    `,
      [clientId],
    );
    return rows;
  }
  async getTranslationDetails(email) {
    const id = await this.query(
      `
    SELECT id FROM database.userdetails WHERE email=?
    `,
      [email],
    );
    const clientId = id[0].id;
    const rows = await this.query(
      `
    SELECT * FROM database.translations WHERE client_id=?;
    `,
      [clientId],
    );
    return rows;
  }

  async saveOrderInformation({
    clientId,
    fileName,
    fileType,
    orderDate,
    sourceLanguage,
    pageCount,
    totalPrice,
    orderStatus,
  }) {
    return await this.query(
      `
        INSERT INTO order_details (client_id, file_name, file_type, order_date, source_language, page_count, total_price, order_status )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
      [
        clientId,
        fileName,
        fileType,
        dayjs(orderDate).format('YYYY-MM-DD'),
        sourceLanguage,
        pageCount,
        totalPrice,
        orderStatus,
      ],
    );
  }
}
