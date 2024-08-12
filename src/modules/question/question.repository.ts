import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { GetQuestionsByQuestionGroupInput } from '@types';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class QuestionRepository extends AbstractRepository<MODEL_NAME.QUESTION> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }

  getQuestionsByQuestionGroup({
    excludeQuestionIds,
    questionGroupIds,
    fileTemplateId,
  }: GetQuestionsByQuestionGroupInput) {
    return this.findMany({
      select: {
        id: true,
        content: true,
        questionParentId: true,
        questionTypeId: true,
        options: true,
        questionPriority: true,
        questionGroups: {
          where: {
            id: {
              in: questionGroupIds,
            },
            fileTemplateId: fileTemplateId,
          },
        },
      },
      where: {
        id: {
          notIn: excludeQuestionIds,
        },
      },
    });
  }
}
