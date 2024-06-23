import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ENV_PATH } from '@utilities';
import { validate } from '@configs/config.validate';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ENV_PATH,
      validate,
      isGlobal: true,
    }),
    RedisModule.forRoot({
      type: 'single',
      url: '',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
