import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class SyslogRepository extends AbstractRepository<MODEL_NAME.SYSLOG> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
