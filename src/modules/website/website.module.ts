import { Global, Module } from '@nestjs/common';
import { WebsiteService } from './website.service';
import { WebsiteRepository } from './website.repository';

@Global()
@Module({
  providers: [WebsiteService, WebsiteRepository],
  exports: [
    WebsiteService,
    // {
    //   providers: WebsiteService
    //   useValue: () => {

    //   },
    // },
  ],
})
export class WebsiteModule {}
