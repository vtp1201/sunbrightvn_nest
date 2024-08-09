import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class NotificationRepository extends AbstractRepository<MODEL_NAME.NOTIFICATION> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }
}
