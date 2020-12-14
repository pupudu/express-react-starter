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
      
    SELECT * FROM database.order_details WHERE client_id=? ;
    `,
      [clientId],
    );
    return rows;
  }
    async getAllOrderInformation() {
        const rows = await this.query(
            `
    SELECT * FROM database.order_details  ;
    `
        );
        return rows;

    }
    async getAllTranslationDetails() {
        const rows = await this.query(
            `
    SELECT * FROM database.translations WHERE deleted= ?  ;
    `,
            [0],
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
    SELECT * FROM database.translations WHERE client_id=? AND deleted = 0 ;
    `,
      [clientId],
    );
    return rows;
  }
  async deleteOrderInformation(data) {

      await this.query(
      `
    UPDATE database.translations SET deleted = ? WHERE order_number = ? AND language = ? ;
    `,
      data,
    );
  }
  async updateOrderStatus(data) {

   await this.query(
      `
    UPDATE database.order_details SET order_status = ? WHERE id = ? 
    `,
      data,
    );
  }
  async updateTranslationStatus(data) {

    await this.query(
      `
    UPDATE database.translations SET translation_status = ? WHERE order_number = ? AND language = ? ;
    `,
      data,
    );
  }
  async addTranslator(data) {
      const id = await this.query(
          `
    SELECT id FROM database.userdetails WHERE email=? 
    `,
          [data[2]],
      );
      const clientId = id[0].id;

    await this.query(
      `
    UPDATE database.translations SET translater_id = ? WHERE order_number = ? AND language = ? ;
    `,
        [
            clientId,
            data[0],
            data[1],
        ],
    );
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
      translation,
  }) {
    await this.query(
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
      const orderNumber = await this.query(
          `
    SELECT id FROM database.order_details WHERE id=(SELECT MAX(id) FROM database.order_details);
    `
      );
    translation.map(async language =>  {
        await this.query(
            `
        INSERT INTO database.translations (order_number, client_id, language, translater_id, translation_status, price, deleted )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
            [
                orderNumber[0].id,
                clientId,
                language,
                'not_assigned',
                'placed',
                50,
                0,
            ],
        );
    })
    return orderNumber[0].id;
  }
}
