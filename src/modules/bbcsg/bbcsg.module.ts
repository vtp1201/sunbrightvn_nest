import { Module } from '@nestjs/common';

import { BBCSGController } from './bbcsg.controller';
import { BBCSGService } from './bbcsg.service';

@Module({
  imports: [],
  controllers: [BBCSGController],
  providers: [BBCSGService],
  exports: [BBCSGService],
})
export class BBCSGModule {}
