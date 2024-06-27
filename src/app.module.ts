import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ENV_PATH } from '@utilities';
import { validate } from '@configs/config.validate';
import { RedisModule } from '@nestjs-modules/ioredis';
import * as path from 'path';
import { I18nModule } from 'nestjs-i18n';

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
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
