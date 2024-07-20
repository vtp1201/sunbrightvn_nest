import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { validate } from '@configs/config.validate';
import { DatabaseModule } from '@databases/database.module';
import { AuthModule } from '@modules/auth/auth.module';
import { BBCSGModule } from '@modules/bbcsg/bbcsg.module';
import { ComplianceRiskAssessmentFormModule } from '@modules/compliance_risk_assessment_form/compliance-risk-assessment-form.module';
import { UserModule } from '@modules/user/user.module';
import { WebsiteModule } from '@modules/website/website.module';
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
