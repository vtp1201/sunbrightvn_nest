import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ENV_PATH } from '@utilities';
import { validate } from '@configs/config.validate';
import { RedisModule } from '@nestjs-modules/ioredis';
import * as path from 'path';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';

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
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
        new HeaderResolver(['x-lang']),
      ],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
