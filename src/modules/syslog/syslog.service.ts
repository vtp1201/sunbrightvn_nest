import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { SyslogRepository } from './syslog.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class SyslogService extends AbstractService<MODEL_NAME.SYSLOG, SyslogRepository> {
  constructor(repository: SyslogRepository) {
    super(repository);
  }
}
