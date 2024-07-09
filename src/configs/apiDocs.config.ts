import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ROUTES } from '@utilities/enums';

export function configSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('SunbrightVN API')
    .setDescription('## The SunbrightVN API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(ROUTES.API_DOCS, app, document);
}
