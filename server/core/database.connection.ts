import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { BaseModule } from '@core/base.module';
import { SqljsConnectionOptions } from 'typeorm/driver/sqljs/SqljsConnectionOptions';

export class DatabaseConnection extends BaseModule {
  __SINGLETON__ = true;

  async didInit() {
    if (process.env.TEST_DB) {
      await createConnection({
        type: 'sqljs',
        synchronize: true,
        dropSchema: true,
        entities: [`${__dirname}/../**/*.entity.ts`],
      } as SqljsConnectionOptions);
      return;
    }
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
