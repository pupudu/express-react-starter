import { BaseDao } from '@core/base.dao';

export class PreviousDocDao extends BaseDao {
  async getFiles() {
    return await this.query(`SELECT * FROM previousdoc`);
  }

  async saveFile() {
    await this.query(`INSERT INTO file(id, filename) values(3, 'new file')`);
  }
}
