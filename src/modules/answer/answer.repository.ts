import { Injectable } from '@nestjs/common';

import * as moment from 'moment';

import { Prisma } from '@prisma/client';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { Answer, GetAnswerByGroupInput } from '@types';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class AnswerRepository extends AbstractRepository<MODEL_NAME.ANSWER> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }

  async getAnswerByGroup(params: GetAnswerByGroupInput) {
    const where: Prisma.answerWhereInput = {};
    const include: Prisma.answerInclude = {
      option: {
        include: {
          question: {
            select: {
              id: true,
            },
          },
        },
      },
      question: {
        include: {
          questionPriority: true,
        },
      },
    };
    if (params.companyMemberId) where.companyMemberId = params.companyMemberId;
    if (params.companyId) where.companyId = params.companyId;
    if (params.taskId) where.taskId = params.taskId;

    if (params.fileTemplateId || params.questionGroupIds) {
      const whereQuestionGroup: Prisma.questionGroupWhereInput = {};
      if (params.questionGroupIds) whereQuestionGroup.id = { in: params.questionGroupIds };
      if (params.fileTemplateId) whereQuestionGroup.fileTemplateId = params.fileTemplateId;

      include.question = {
        include: {
          questionPriority: true,
          questionGroups: {
            select: {
              id: true,
              fileTemplateId: true,
            },
            where: whereQuestionGroup,
          },
        },
      };
    } else {
      where.OR = [
        {
          companyMemberId: { in: params.companyMemberIds },
        },
        {
          companyId: params.companyId,
        },
      ];
    }

    const answers = await this.findMany({
      where,
      include,
    });

    const questionIds = [...new Set(answers.map((answer) => answer.questionId))];

    return questionIds.map((questionId) => {
      const answersForQuestion = answers.filter(
        (answer) => answer.option.questionId === questionId,
      );

      if (!answersForQuestion.some((answer) => answer.companyMemberId)) {
        return this.getAnswerFromListAnswerAndSelectTask(answersForQuestion, params.taskId);
      }

      const companyMemberIds = [
        ...new Set(answersForQuestion.map((answer) => answer?.companyMemberId)),
      ].filter((id) => id);
      return companyMemberIds.map((id) => {
        const answerForQuestionMember = answersForQuestion.filter(
          (answer) => answer?.companyMemberId == id,
        );
        return this.getAnswerFromListAnswerAndSelectTask(answerForQuestionMember, params.taskId);
      });
    });
  }

  private getAnswerFromListAnswerAndSelectTask<A extends Answer>(
    answers: A[],
    taskId: number,
  ): A[] {
    const taskIdsFromAnswer = [
      ...new Set(
        answers
          .sort((a, b) => moment.utc(b.createdTime).diff(moment.utc(a.createdTime)))
          .map((answer) => answer?.taskId),
      ),
    ];
    const selectTaskId = taskIdsFromAnswer.some((id) => id == taskId)
      ? taskId
      : taskIdsFromAnswer[0];
    return answers.filter((answer) => answer.taskId === selectTaskId);
  }
}
