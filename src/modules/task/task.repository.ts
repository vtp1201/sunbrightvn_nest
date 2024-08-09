import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class TaskRepository extends AbstractRepository<MODEL_NAME.TASK> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }

  getTaskWithSupporters(where: Prisma.taskWhereInput) {
    const selectSupporter = {
      id: true,
      username: true,
      personId: true,
      customerId: true,
      subscriptionId: true,
      facebookId: true,
      status: true,
    };
    return this.findFirst({
      where,
      select: {
        id: true,
        csLeader: {
          select: selectSupporter,
        },
        csMember: {
          select: selectSupporter,
        },
        accountantLeader: {
          select: selectSupporter,
        },
        accountantMember: {
          select: selectSupporter,
        },
        legalLeader: {
          select: selectSupporter,
        },
        legalMember: {
          select: selectSupporter,
        },
        complianceLeader: {
          select: selectSupporter,
        },
        complianceMember: {
          select: selectSupporter,
        },
        internalBookeepingLeader: {
          select: selectSupporter,
        },
        internalBookeepingMember: {
          select: selectSupporter,
        },
      },
    });
  }
}
