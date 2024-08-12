import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';

import { Answer, AnswerService, NoteService, ProcessService, QuestionService } from '@types';

import { FILE_TEMPLATE, LIST_QUESTION, TYPE_MEMBER } from '@utilities';

@Injectable()
export class ComplianceRiskAssessmentFormService {
  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService,
    private processService: ProcessService,
    private noteService: NoteService,
  ) {}

  async createNote(param: any, userId: number) {
    return this.noteService.createNoteCDC(param, userId);
  }

  async getNotes(
    params: {
      companyMemberId?: number;
      companyId?: number;
      taskId?: number;
    },
    noteTypeId: number,
  ) {
    try {
      const where: Prisma.noteWhereInput = {
        noteTypeId,
      };

      params.companyMemberId
        ? (where.companyMemberId = params.companyMemberId)
        : params.companyId
          ? (where.companyId = params.companyId)
          : (where.taskId = params.taskId);

      return this.noteService.findMany({
        where,
        include: {
          files: {
            select: {
              id: true,
              name: true,
              s3Path: true,
              mimeType: true,
            },
          },
          user: {
            select: {
              id: true,
            },
            include: {
              person: {
                select: {
                  firstName: true,
                  lastName: true,
                },
              },
              roles: {
                select: {
                  name: true,
                  colorCode: true,
                },
              },
            },
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async getQuestions(params: {
    typeMemberId?: number;
    questionGroup?: number;
    fileTemplateId?: number;
  }) {
    try {
      let excludeQuestionIds = [];

      if (params.fileTemplateId === FILE_TEMPLATE.CUSTOMER_RISK_ASSESSMENT_FORM) {
        params.typeMemberId == TYPE_MEMBER.INDIVIDUAL
          ? (excludeQuestionIds = LIST_QUESTION.LIST_QUESTION_CORPORATION)
          : params.typeMemberId === TYPE_MEMBER.CORPORATION
            ? (excludeQuestionIds = LIST_QUESTION.LIST_QUESTION_INDIVIDUAL)
            : '';
      }

      return this.questionService.getQuestionsByQuestionGroup({
        excludeQuestionIds,
        questionGroupIds: [params.questionGroup],
        fileTemplateId: params.fileTemplateId,
      });
    } catch (error) {
      throw error;
    }
  }

  async updateOrCreateAnswersForCompanyMember(params: {
    answersForTask: Answer[];
    companyMemberId?: number;
    companyId?: number;
    taskId?: number;
  }) {
    try {
      if (!params.answersForTask) throw new Error("don't have list answer");

      await this.answerService.deleteMany({
        where: {
          questionId: {
            in: params.answersForTask.map((answer) => answer.questionId),
          },
          companyMemberId: params.companyMemberId,
          companyId: params.companyId,
          taskId: params.taskId,
        },
      });

      const newAnswer = params.answersForTask.map((answer) => {
        return {
          companyMemberId: params?.companyMemberId,
          taskId: params?.taskId,
          companyId: params?.companyId,
          ...answer,
        };
      });

      return this.answerService.createMany({
        data: newAnswer,
      });
    } catch (error) {
      throw error;
    }
  }

  async getRAFTemplateIdsByProcessId(processId: number) {
    try {
      const process = await this.processService.findUniqueOrThrow({
        where: {
          id: processId,
        },
        select: {
          extraValue: true,
        },
      });

      if (!process) throw new Error('process_not_found');
      if (!process?.extraValue || !process?.extraValue?.['raf_template_ids'])
        throw new Error('raf_template_ids_found');

      const rafTemplateIds = process.extraValue['raf_template_ids'] as number[];
      return rafTemplateIds;
    } catch (error) {
      throw error;
    }
  }
}
