import { PrismaClient, Prisma } from '@prisma/client';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { timeout } from '@utilities';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  ModelName = Prisma.ModelName;
  constructor(private configService: ConfigService) {
    super();
  }
  async onModuleInit() {
    await this.checkAndLogConnection();
  }

  async checkAndLogConnection() {
    const mysqlURL = this.configService.get('MYSQL_URL');
    const dbName = 'MysqlDB';
    try {
      if (!mysqlURL) throw `Can't find MYSQL_URL in env`;
      await this.$connect();
      console.info('\x1b[31m%s\x1b[0m is connected!', dbName);
    } catch (error) {
      console.error(`Can't connect ${dbName}`);
      console.error('Connect to \x1b[31m%s\x1b[0m is failed!', dbName);
      console.error('Detail: ', error?.message);
      const ms = 10000;
      console.log(
        'Reconnect database after \x1b[34m%s\x1b[0m seconds!',
        ((ms % 60000) / 1000).toFixed(1),
      );
      await timeout(ms);
      await this.checkAndLogConnection();
      throw error;
    }
  }
}
