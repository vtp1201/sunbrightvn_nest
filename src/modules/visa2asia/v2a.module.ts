import { Module } from '@nestjs/common';

import { PostController, ServicesController } from './controller';

@Module({
  imports: [],
  controllers: [PostController, ServicesController],
})
export class Visa2AsiaModule {}
