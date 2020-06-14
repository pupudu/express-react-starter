import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { BaseModule } from '@core/base.module';

export class DatabaseConnection extends BaseModule {
  __SINGLETON__ = true;

  async didInit() {
    await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Windy@24',
      database: 'database',
      entities: [`${__dirname}/../**/*.entity.ts`],
      logging: false,
    });
  }
}
