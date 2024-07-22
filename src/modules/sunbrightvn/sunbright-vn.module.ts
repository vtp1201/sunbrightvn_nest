import { Module } from '@nestjs/common';

import { ContactFormController } from './controller';

@Module({
  imports: [],
  controllers: [ContactFormController],
})
export class SunbrightVNModule {}
