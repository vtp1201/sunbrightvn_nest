import { Global, Module } from '@nestjs/common';

import { SyslogRepository } from './syslog.repository';
import { SyslogService } from './syslog.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [SyslogService, SyslogRepository],
  exports: [SyslogService],
})
export class SyslogModule {}
