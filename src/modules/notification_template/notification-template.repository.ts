import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class NotificationTemplateRepository extends AbstractRepository<MODEL_NAME.NOTIFICATION_TEMPLATE> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
