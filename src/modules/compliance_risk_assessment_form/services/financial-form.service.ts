import { Injectable } from '@nestjs/common';

import { AnswerService } from '@modules/answer/answer.service';
import { CompanyMemberService } from '@modules/company_member/company-member.service';
import { COMPANY_MEMBER_TYPE, FILE_TEMPLATE, TYPE_MEMBER } from '@utilities';

import { ComplianceRiskAssessmentFormService } from './compliance-risk-assessment-form.service';

@Injectable()
export class FinancialFormService {
  constructor(
    private answerService: AnswerService,
    private companyMemberService: CompanyMemberService,
    private complianceRiskAssessmentForm: ComplianceRiskAssessmentFormService,
  ) {}

  async getQuestion(params: {
    processId: number;
    typeMemberId: number;
    companyMemberTypeId: number;
  }) {
    const rafTemplateIds = await this.complianceRiskAssessmentForm.getRAFTemplateIdsByProcessId(
      params.processId,
    );

    const fileTemplateId = this.getFileTemplateId(
      rafTemplateIds,
      params.companyMemberTypeId,
      params.typeMemberId,
    );

    const questions = await this.complianceRiskAssessmentForm.getQuestions({
      typeMemberId: params.typeMemberId,
      fileTemplateId,
    });

    return {
      questions,
      fileTemplateId,
    };
  }

  private getFileTemplateId(
    rafTemplateIds: number[],
    companyMemberTypeId: number,
    typeMemberId: number,
  ): number {
    if (rafTemplateIds.includes(FILE_TEMPLATE.CUSTOMER_RISK_ASSESSMENT_FORM)) {
      return FILE_TEMPLATE.CUSTOMER_RISK_ASSESSMENT_FORM;
    }
    if (companyMemberTypeId === COMPANY_MEMBER_TYPE.AGENT) {
      return FILE_TEMPLATE.CUSTOMER_RISK_ASSESSMENT_FORM_AGENT_V3;
    }

    if (typeMemberId === TYPE_MEMBER.CORPORATION) {
      return FILE_TEMPLATE.CUSTOMER_RISK_ASSESSMENT_FORM_ENTITY_V3;
    }

    if (typeMemberId === TYPE_MEMBER.INDIVIDUAL) {
      return FILE_TEMPLATE.CUSTOMER_RISK_ASSESSMENT_FORM_INDIVIDUAL_V3;
    }

    throw Error('');
  }

  async getAnswers(params: {
    processId: number;
    companyMemberId: number;
    companyMemberTypeId: number;
  }) {
    try {
      const [rafTemplateIds, { typeMemberId }] = await Promise.all([
        this.complianceRiskAssessmentForm.getRAFTemplateIdsByProcessId(params.processId),
        this.companyMemberService.findUniqueOrThrow({
          select: {
            typeMemberId: true,
          },
          where: {
            id: params.companyMemberId,
          },
        }),
      ]);

      const fileTemplateId = this.getFileTemplateId(
        rafTemplateIds,
        params.companyMemberTypeId,
        typeMemberId,
      );

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
