import { answer } from '@prisma/client';

export * from '../answer.service';

export type Answer = answer;

export type GetAnswerByGroupInput = {
  companyMemberId?: number;
  companyId?: number;
  taskId?: number;
  companyMemberIds?: number[];
  companyMemberTypeId?: number;
  questionGroupIds?: number[];
  fileTemplateId?: number;
};
