import { Global, Module } from '@nestjs/common';
import { WebsiteService } from './website.service';
import { WebsiteRepository } from './website.repository';
import { AuthModule } from '@modules/auth/auth.module';

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
