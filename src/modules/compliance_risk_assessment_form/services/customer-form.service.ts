import { Injectable } from '@nestjs/common';

import { BusinessActivityService } from '@modules/business_activity/business-activity.service';
import { CountryService } from '@modules/country/country.service';
import { ProcessService } from '@modules/process/process.service';
import { COMPANY_MEMBER_TYPE, FILE_TEMPLATE, TYPE_MEMBER } from '@utilities';

import { ComplianceRiskAssessmentFormService } from './compliance-risk-assessment-form.service';

@Injectable()
export class CustomerFormService {
  constructor(
    private countryService: CountryService,
    private businessActivityService: BusinessActivityService,
    private processService: ProcessService,
    private complianceRiskAssessmentForm: ComplianceRiskAssessmentFormService,
  ) {}

  async getQuestion(params: {
    processId: number;
    typeMemberId: number;
    companyMemberTypeId: number;
  }) {
    const process = await this.processService.findUniqueOrThrow({
      where: {
        id: params.processId,
      },
      select: {
        extraValue: true,
      },
    });
    const rafTemplateIds: number[] = process.extraValue?.['raf_template_ids'] ?? [];

    if (rafTemplateIds.includes(FILE_TEMPLATE.CUSTOMER_RISK_ASSESSMENT_FORM)) {
      const fileTemplateId = FILE_TEMPLATE.CUSTOMER_RISK_ASSESSMENT_FORM;
      if (!params.typeMemberId) throw new Error('..');
      const questions = this.complianceRiskAssessmentForm.getQuestions({
        typeMemberId: params.typeMemberId,
        fileTemplateId,
      });
      return {
        questions,
        fileTemplateId,
      };
    }

    if (!params.typeMemberId && !params.companyMemberTypeId) throw new Error();

    const fileTemplateId =
      params.companyMemberTypeId === COMPANY_MEMBER_TYPE.AGENT
        ? FILE_TEMPLATE.CUSTOMER_RISK_ASSESSMENT_FORM_AGENT_V3
        : params.typeMemberId === TYPE_MEMBER.CORPORATION
          ? FILE_TEMPLATE.CUSTOMER_RISK_ASSESSMENT_FORM_ENTITY_V3
          : params.typeMemberId === TYPE_MEMBER.INDIVIDUAL
            ? FILE_TEMPLATE.CUSTOMER_RISK_ASSESSMENT_FORM_INDIVIDUAL_V3
            : null;

    if (!fileTemplateId) throw new Error('');

    const questions = await this.complianceRiskAssessmentForm.getQuestions({
      fileTemplateId,
    });

    return {
      questions,
      fileTemplateId,
    };
  }
}
