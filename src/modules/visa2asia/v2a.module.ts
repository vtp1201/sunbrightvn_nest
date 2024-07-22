import { Module } from '@nestjs/common';

import { PostController, ServicesController } from './controllers';

@Module({
  imports: [],
  controllers: [PostController, ServicesController],
})
export class Visa2AsiaModule {}
