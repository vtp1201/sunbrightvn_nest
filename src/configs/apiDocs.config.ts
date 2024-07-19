import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { LIB_VERSION, ROUTES } from '@utilities';

export function configSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('SunbrightVN API')
    .setDescription('## The SunbrightVN API description')
    .setVersion(LIB_VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(ROUTES.API_DOCS, app, document);
}
