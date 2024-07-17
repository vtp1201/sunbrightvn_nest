import { Global, Module } from '@nestjs/common';

import { AuthModule } from '@modules/auth/auth.module';

import { WebsiteController } from './website.controller';
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
  controllers: [WebsiteController],
})
export class WebsiteModule {}
