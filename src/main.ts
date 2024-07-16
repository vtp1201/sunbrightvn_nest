import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { configSwagger } from '@configs/apiDocs.config';
import helmet from 'helmet';
import { join } from 'path';

import { CONFIGURATION } from '@utilities/enums';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  configSwagger(app);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, 'views'));
  app.setViewEngine('ejs');

  const configService = app.get(ConfigService);
  const port = configService.get(CONFIGURATION.PORT);
  await app.listen(port);
}

bootstrap();
