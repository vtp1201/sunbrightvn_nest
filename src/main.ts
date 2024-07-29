import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { APP_NAME, CONFIGURATION, LIB_VERSION, ROUTES } from '@utilities';
import helmet from 'helmet';
import * as moment from 'moment';
import { join } from 'path';

import { configSwagger } from '@configs/apiDocs.config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    logger: ['error', 'warn'],
  });

  app.use(helmet());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      skipMissingProperties: true,
    }),
  );

  configSwagger(app);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, 'views'));
  app.setViewEngine('ejs');

  const configService = app.get(ConfigService);
  const port = configService.get(CONFIGURATION.PORT);
  const nodeEnv = configService.get(CONFIGURATION.NODE_ENV);

  await app.listen(port, async () => {
    const host = await app.getUrl();
    console.info(
      'Server \x1b[34m%s\x1b[0m version \x1b[34m%s\x1b[0m running at \x1b[34m%s\x1b[0m in \x1b[31m%s\x1b[0m mode!',
      APP_NAME,
      LIB_VERSION,
      host,
      nodeEnv,
      moment().format('YYYY-MM-DD HH:mm:ss'),
    );
    console.info(
      '\x1b[31mAPI Documents\x1b[0m is running at \x1b[34m%s\x1b[0m',
      `${host}/${ROUTES.API_DOCS}`,
    );
  });
}

bootstrap();
