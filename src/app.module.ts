import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { validate } from '@configs/config.validate';
import { DatabaseModule } from '@databases/database.module';
import {
  AuthModule,
  BBCSGModule,
  ComplianceRiskAssessmentFormModule,
  PortalModule,
  UserModule,
  WebsiteModule,
} from '@modules';
// import { RedisModule } from '@nestjs-modules/ioredis';
import { ENV_PATH } from '@utilities';
import { AcceptLanguageResolver, HeaderResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ENV_PATH,
      validate,
      isGlobal: true,
      cache: true,
    }),
    // RedisModule.forRoot({
    //   type: 'single',
    //   url: '',
    // }),
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
    DatabaseModule,
    AuthModule,
    UserModule,
    WebsiteModule,
    BBCSGModule,
    ComplianceRiskAssessmentFormModule,
    PortalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
