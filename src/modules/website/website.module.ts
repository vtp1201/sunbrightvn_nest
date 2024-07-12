import { Module } from '@nestjs/common';
import { WebsiteService } from './website.service';
import { WebsiteRepository } from './website.repository';

@Module({
  providers: [WebsiteService, WebsiteRepository],
  exports: [WebsiteService],
})
export class WebsiteModule {}
