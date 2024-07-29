import { Injectable } from '@nestjs/common';

import { AnswerService } from '@modules/answer/answer.service';
import { SERVICE_RAF_FORM_ID_LIST } from '@utilities';

import { ComplianceRiskAssessmentFormService } from './compliance-risk-assessment-form.service';

@Injectable()
export class ServiceFormService {
  constructor(
    private answerService: AnswerService,
    private complianceRiskAssessmentForm: ComplianceRiskAssessmentFormService,
  ) {}

  async getQuestion(params: { processId: number }) {
    const rafTemplateIds = await this.complianceRiskAssessmentForm.getRAFTemplateIdsByProcessId(
      params.processId,
    );

    const fileTemplateId = this.getFileTemplateId(rafTemplateIds);

    const questions = await this.complianceRiskAssessmentForm.getQuestions({
      fileTemplateId,
    });

    return {
      questions,
      fileTemplateId,
    };
  }

  private getFileTemplateId(rafTemplateIds: number[]): number {
    const fileTemplateId = SERVICE_RAF_FORM_ID_LIST.find((fileTemplateId) =>
      rafTemplateIds.includes(fileTemplateId),
    );

    if (!fileTemplateId) throw Error('');

    return fileTemplateId;
  }

  async getAnswers(params: { processId: number }) {
    try {
      const rafTemplateIds = await this.complianceRiskAssessmentForm.getRAFTemplateIdsByProcessId(
        params.processId,
      );

      const fileTemplateId = this.getFileTemplateId(rafTemplateIds);

      const answers = await this.answerService.getAnswerByGroup({
        ...params,
        fileTemplateId,
      });

      return {
        fileTemplateId,
        answers,
      };
    } catch (error) {
      throw error;
    }
  }
}
