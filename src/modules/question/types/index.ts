import { question } from '@prisma/client';

export * from '../question.service';

export type Question = question;

export type GetQuestionsByQuestionGroupInput = {
  questionGroupIds: number[];
  fileTemplateId: number;
  excludeQuestionIds: number[];
};
