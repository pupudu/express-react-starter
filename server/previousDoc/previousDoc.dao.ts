import { BaseDao } from '@core/base.dao';

export class PreviousDocDao extends BaseDao {
  async getFiles() {
    return await this.query(`SELECT * FROM file`);
  }
}
