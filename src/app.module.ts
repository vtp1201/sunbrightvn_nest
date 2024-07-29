import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import {
  AuthModule,
  BBCSGModule,
  ComplianceRiskAssessmentFormModule,
  GleadsModule,
  GleadsSGModule,
  OnboardingModule,
  PortalModule,
  StatisticModule,
  StripeModule,
  SunbrightVNModule,
  UserModule,
  Visa2AsiaModule,
  WebsiteModule,
} from '@modules';
import { AcceptLanguageResolver, HeaderResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import * as path from 'path';

import { validate } from '@configs/config.validate';

import { DatabaseModule } from '@databases/database.module';

// import { RedisModule } from '@nestjs-modules/ioredis';
import { ENV_PATH } from '@utilities';

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
    BBCSGModule,
    ComplianceRiskAssessmentFormModule,
    GleadsModule,
    GleadsSGModule,
    OnboardingModule,
    PortalModule,
    StatisticModule,
    StripeModule,
    SunbrightVNModule,
    UserModule,
    Visa2AsiaModule,
    WebsiteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
