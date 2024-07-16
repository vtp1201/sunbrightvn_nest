import { Global, Module } from '@nestjs/common';

import { AuthModule } from '@modules/auth/auth.module';

import { WebsiteRepository } from './website.repository';
import { WebsiteService } from './website.service';

@Global()
@Module({
  imports: [AuthModule],
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
