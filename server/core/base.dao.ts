import { BaseModule } from './base.module';
import { getManager } from 'typeorm';

export class BaseDao extends BaseModule {
  query: (query: string, parameters?: any[]) => Promise<any>;

  protected async didInit(): Promise<any> {
    const manager = getManager();
    this.query = manager.query.bind(manager);
  }
}
