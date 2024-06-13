import { PrismaClient } from '@prisma/client';
import { timeout } from '@utilities';

export const connectPrisma = async () => {
  const dbName = 'MysqlDB';
  try {
    // if (!MYSQL_URL) throw `Can't find MYSQL_URL in env`;
    await PrismaClient.$connect();
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
    await connectPrisma();
    throw error;
  }
};
