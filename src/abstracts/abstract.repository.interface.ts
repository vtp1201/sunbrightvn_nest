import { Prisma, PrismaClient } from '@prisma/client';
import { Operation, GetResult as PrismaGetResult } from '@prisma/client/runtime/library';

interface Clients<T extends ModelName, A extends ModelArgs<T, O>, O extends Operation> {
  permission: Prisma.Prisma__permissionClient<GetResult<T, A, O>, never>;
  process: Prisma.Prisma__processClient<GetResult<T, A, O>, never>;
  actionLog: Prisma.Prisma__actionLogClient<GetResult<T, A, O>, never>;
  actionProcessStep: Prisma.Prisma__actionProcessStepClient<GetResult<T, A, O>, never>;
  actionStepType: Prisma.Prisma__actionStepTypeClient<GetResult<T, A, O>, never>;
  additionProcess: Prisma.Prisma__additionProcessClient<GetResult<T, A, O>, never>;
  agency: Prisma.Prisma__agencyClient<GetResult<T, A, O>, never>;
  agentType: Prisma.Prisma__agentTypeClient<GetResult<T, A, O>, never>;
  agent: Prisma.Prisma__agentClient<GetResult<T, A, O>, never>;
  airport: Prisma.Prisma__airportClient<GetResult<T, A, O>, never>;
  answer: Prisma.Prisma__answerClient<GetResult<T, A, O>, never>;
  apiExample: Prisma.Prisma__apiExampleClient<GetResult<T, A, O>, never>;
  apiGroup: Prisma.Prisma__apiGroupClient<GetResult<T, A, O>, never>;
  apiHasGroup: Prisma.Prisma__apiHasGroupClient<GetResult<T, A, O>, never>;
  apiMethod: Prisma.Prisma__apiMethodClient<GetResult<T, A, O>, never>;
  apiStatus: Prisma.Prisma__apiStatusClient<GetResult<T, A, O>, never>;
  api: Prisma.Prisma__apiClient<GetResult<T, A, O>, never>;
  bankBranch: Prisma.Prisma__bankBranchClient<GetResult<T, A, O>, never>;
  bankHasCountry: Prisma.Prisma__bankHasCountryClient<GetResult<T, A, O>, never>;
  bankHasFileTemplate: Prisma.Prisma__bankHasFileTemplateClient<GetResult<T, A, O>, never>;
  bankHasKeyword: Prisma.Prisma__bankHasKeywordClient<GetResult<T, A, O>, never>;
  bank: Prisma.Prisma__bankClient<GetResult<T, A, O>, never>;
  bankingProcess: Prisma.Prisma__bankingProcessClient<GetResult<T, A, O>, never>;
  billing: Prisma.Prisma__billingClient<GetResult<T, A, O>, never>;
  businessActivityIndustryClass: Prisma.Prisma__businessActivityIndustryClassClient<
    GetResult<T, A, O>,
    never
  >;
  businessActivityIndustry: Prisma.Prisma__businessActivityIndustryClient<
    GetResult<T, A, O>,
    never
  >;
  businessActivityLabel: Prisma.Prisma__businessActivityLabelClient<GetResult<T, A, O>, never>;
  businessActivity: Prisma.Prisma__businessActivityClient<GetResult<T, A, O>, never>;
  campaignHasVoucherType: Prisma.Prisma__campaignHasVoucherTypeClient<GetResult<T, A, O>, never>;
  campaignType: Prisma.Prisma__campaignTypeClient<GetResult<T, A, O>, never>;
  campaign: Prisma.Prisma__campaignClient<GetResult<T, A, O>, never>;
  carSeat: Prisma.Prisma__carSeatClient<GetResult<T, A, O>, never>;
  carType: Prisma.Prisma__carTypeClient<GetResult<T, A, O>, never>;
  changeRequestStatus: Prisma.Prisma__changeRequestStatusClient<GetResult<T, A, O>, never>;
  changeRequestItem: Prisma.Prisma__changeRequestItemClient<GetResult<T, A, O>, never>;
  changeRequest: Prisma.Prisma__changeRequestClient<GetResult<T, A, O>, never>;
  click: Prisma.Prisma__clickClient<GetResult<T, A, O>, never>;
  companyEventType: Prisma.Prisma__companyEventTypeClient<GetResult<T, A, O>, never>;
  companyEvent: Prisma.Prisma__companyEventClient<GetResult<T, A, O>, never>;
  companyHasBusinessActivity: Prisma.Prisma__companyHasBusinessActivityClient<
    GetResult<T, A, O>,
    never
  >;
  companyHasCurrency: Prisma.Prisma__companyHasCurrencyClient<GetResult<T, A, O>, never>;
  companyHasOperationCountry: Prisma.Prisma__companyHasOperationCountryClient<
    GetResult<T, A, O>,
    never
  >;
  companyMemberHasBusinessActivity: Prisma.Prisma__companyMemberHasBusinessActivityClient<
    GetResult<T, A, O>,
    never
  >;
  companyMemberOperationCountry: Prisma.Prisma__companyMemberOperationCountryClient<
    GetResult<T, A, O>,
    never
  >;
  companyInterest: Prisma.Prisma__companyInterestClient<GetResult<T, A, O>, never>;
  companyMemberIssueReference: Prisma.Prisma__companyMemberIssueReferenceClient<
    GetResult<T, A, O>,
    never
  >;
  companyMemberReferences: Prisma.Prisma__companyMemberReferencesClient<GetResult<T, A, O>, never>;
  companyMemberType: Prisma.Prisma__companyMemberTypeClient<GetResult<T, A, O>, never>;
  companyMember: Prisma.Prisma__companyMemberClient<GetResult<T, A, O>, never>;
  companyPosition: Prisma.Prisma__companyPositionClient<GetResult<T, A, O>, never>;
  companyStatus: Prisma.Prisma__companyStatusClient<GetResult<T, A, O>, never>;
  companySuffix: Prisma.Prisma__companySuffixClient<GetResult<T, A, O>, never>;
  companyShare: Prisma.Prisma__companyShareClient<GetResult<T, A, O>, never>;
  companyOwnership: Prisma.Prisma__companyOwnershipClient<GetResult<T, A, O>, never>;
  company: Prisma.Prisma__companyClient<GetResult<T, A, O>, never>;
  contactFromHistory: Prisma.Prisma__contactFromHistoryClient<GetResult<T, A, O>, never>;
  contactFrom: Prisma.Prisma__contactFromClient<GetResult<T, A, O>, never>;
  continent: Prisma.Prisma__continentClient<GetResult<T, A, O>, never>;
  countryHasCompanySuffix: Prisma.Prisma__countryHasCompanySuffixClient<GetResult<T, A, O>, never>;
  countryHasEntityTypeHasFileTemplate: Prisma.Prisma__countryHasEntityTypeHasFileTemplateClient<
    GetResult<T, A, O>,
    never
  >;
  countryHasEntityType: Prisma.Prisma__countryHasEntityTypeClient<GetResult<T, A, O>, never>;
  countryHasQuestion: Prisma.Prisma__countryHasQuestionClient<GetResult<T, A, O>, never>;
  countryHasService: Prisma.Prisma__countryHasServiceClient<GetResult<T, A, O>, never>;
  country: Prisma.Prisma__countryClient<GetResult<T, A, O>, never>;
  currency: Prisma.Prisma__currencyClient<GetResult<T, A, O>, never>;
  customerHasBank: Prisma.Prisma__taskClient<GetResult<T, A, O>, never>;
  customerHasSurveyChoice: Prisma.Prisma__customerHasSurveyChoiceClient<GetResult<T, A, O>, never>;
  customerStatus: Prisma.Prisma__customerStatusClient<GetResult<T, A, O>, never>;
  customerType: Prisma.Prisma__customerTypeClient<GetResult<T, A, O>, never>;
  customer: Prisma.Prisma__customerClient<GetResult<T, A, O>, never>;
  declarationTax: Prisma.Prisma__declarationTaxClient<GetResult<T, A, O>, never>;
  department: Prisma.Prisma__departmentClient<GetResult<T, A, O>, never>;
  emailTemplateHasReceiver: Prisma.Prisma__emailTemplateHasReceiverClient<
    GetResult<T, A, O>,
    never
  >;
  emailTemplate: Prisma.Prisma__emailTemplateClient<GetResult<T, A, O>, never>;
  emailTriggerHasProcess: Prisma.Prisma__emailTriggerHasProcessClient<GetResult<T, A, O>, never>;
  emailTrigger: Prisma.Prisma__emailTriggerClient<GetResult<T, A, O>, never>;
  emailType: Prisma.Prisma__emailTypeClient<GetResult<T, A, O>, never>;
  email: Prisma.Prisma__emailClient<GetResult<T, A, O>, never>;
  entityTypeHasCompanySuffix: Prisma.Prisma__entityTypeHasCompanySuffixClient<
    GetResult<T, A, O>,
    never
  >;
  entityType: Prisma.Prisma__entityTypeClient<GetResult<T, A, O>, never>;
  fatca: Prisma.Prisma__fatcaClient<GetResult<T, A, O>, never>;
  feeType: Prisma.Prisma__feeTypeClient<GetResult<T, A, O>, never>;
  fee: Prisma.Prisma__feeClient<GetResult<T, A, O>, never>;
  fileTemplateHasCompanyMemberType: Prisma.Prisma__fileTemplateHasCompanyMemberTypeClient<
    GetResult<T, A, O>,
    never
  >;
  fileTemplateHasNationality: Prisma.Prisma__fileTemplateHasNationalityClient<
    GetResult<T, A, O>,
    never
  >;
  fileTemplateHasRankingPartnerType: Prisma.Prisma__fileTemplateHasRankingPartnerTypeClient<
    GetResult<T, A, O>,
    never
  >;
  fileTemplateType: Prisma.Prisma__fileTemplateTypeClient<GetResult<T, A, O>, never>;
  fileTemplate: Prisma.Prisma__fileTemplateClient<GetResult<T, A, O>, never>;
  fileType: Prisma.Prisma__fileTypeClient<GetResult<T, A, O>, never>;
  file: Prisma.Prisma__fileClient<GetResult<T, A, O>, never>;
  gaChannel: Prisma.Prisma__gaChannelClient<GetResult<T, A, O>, never>;
  gender: Prisma.Prisma__genderClient<GetResult<T, A, O>, never>;
  grantSchemeHasGrantTypeAttribute: Prisma.Prisma__grantSchemeHasGrantTypeAttributeClient<
    GetResult<T, A, O>,
    never
  >;
  grantScheme: Prisma.Prisma__grantSchemeClient<GetResult<T, A, O>, never>;
  grantTypeAttribute: Prisma.Prisma__grantTypeAttributeClient<GetResult<T, A, O>, never>;
  grantType: Prisma.Prisma__grantTypeClient<GetResult<T, A, O>, never>;
  groupHasUser: Prisma.Prisma__groupHasUserClient<GetResult<T, A, O>, never>;
  historyCompany: Prisma.Prisma__historyCompanyClient<GetResult<T, A, O>, never>;
  historyCompanyMember: Prisma.Prisma__historyCompanyMemberClient<GetResult<T, A, O>, never>;
  historyFile: Prisma.Prisma__historyFileClient<GetResult<T, A, O>, never>;
  historyLogCdc: Prisma.Prisma__historyLogCdcClient<GetResult<T, A, O>, never>;
  holiday: Prisma.Prisma__holidayClient<GetResult<T, A, O>, never>;
  limitType: Prisma.Prisma__limitTypeClient<GetResult<T, A, O>, never>;
  limitValue: Prisma.Prisma__limitValueClient<GetResult<T, A, O>, never>;
  limit: Prisma.Prisma__limitClient<GetResult<T, A, O>, never>;
  mailchimpCampaignMember: Prisma.Prisma__mailchimpCampaignMemberClient<GetResult<T, A, O>, never>;
  mailchimpCampaign: Prisma.Prisma__mailchimpCampaignClient<GetResult<T, A, O>, never>;
  mailchimpMember: Prisma.Prisma__mailchimpMemberClient<GetResult<T, A, O>, never>;
  mailchimpSummary: Prisma.Prisma__mailchimpSummaryClient<GetResult<T, A, O>, never>;
  mailchimpTag: Prisma.Prisma__mailchimpTagClient<GetResult<T, A, O>, never>;
  message: Prisma.Prisma__messageClient<GetResult<T, A, O>, never>;
  noteType: Prisma.Prisma__noteTypeClient<GetResult<T, A, O>, never>;
  note: Prisma.Prisma__noteClient<GetResult<T, A, O>, never>;
  notificationStatus: Prisma.Prisma__notificationStatusClient<GetResult<T, A, O>, never>;
  notificationTemplateHasRole: Prisma.Prisma__notificationTemplateHasRoleClient<
    GetResult<T, A, O>,
    never
  >;
  notificationTemplate: Prisma.Prisma__notificationTemplateClient<GetResult<T, A, O>, never>;
  notificationType: Prisma.Prisma__notificationTypeClient<GetResult<T, A, O>, never>;
  notification: Prisma.Prisma__notificationClient<GetResult<T, A, O>, never>;
  option: Prisma.Prisma__optionClient<GetResult<T, A, O>, never>;
  orderFrom: Prisma.Prisma__orderFromClient<GetResult<T, A, O>, never>;
  orderHasBank: Prisma.Prisma__orderHasBankClient<GetResult<T, A, O>, never>;
  orderItemStatus: Prisma.Prisma__orderItemStatusClient<GetResult<T, A, O>, never>;
  orderItem: Prisma.Prisma__orderItemClient<GetResult<T, A, O>, never>;
  orderStatus: Prisma.Prisma__orderStatusClient<GetResult<T, A, O>, never>;
  order: Prisma.Prisma__orderClient<GetResult<T, A, O>, never>;
  packageGroup: Prisma.Prisma__packageGroupClient<GetResult<T, A, O>, never>;
  packageHasService: Prisma.Prisma__packageHasServiceClient<GetResult<T, A, O>, never>;
  packageType: Prisma.Prisma__packageTypeClient<GetResult<T, A, O>, never>;
  Package: Prisma.Prisma__PackageClient<GetResult<T, A, O>, never>;
  paymentGateway: Prisma.Prisma__paymentGatewayClient<GetResult<T, A, O>, never>;
  paymentInformation: Prisma.Prisma__paymentInformationClient<GetResult<T, A, O>, never>;
  permissionGroup: Prisma.Prisma__permissionGroupClient<GetResult<T, A, O>, never>;
  person: Prisma.Prisma__personClient<GetResult<T, A, O>, never>;
  processHasNote: Prisma.Prisma__processHasNoteClient<GetResult<T, A, O>, never>;
  processLog: Prisma.Prisma__processLogClient<GetResult<T, A, O>, never>;
  processStepHasFileTemplate: Prisma.Prisma__processStepHasFileTemplateClient<
    GetResult<T, A, O>,
    never
  >;
  processStepHasRole: Prisma.Prisma__processStepHasRoleClient<GetResult<T, A, O>, never>;
  processStepType: Prisma.Prisma__processStepTypeClient<GetResult<T, A, O>, never>;
  processStep: Prisma.Prisma__processStepClient<GetResult<T, A, O>, never>;
  promotion: Prisma.Prisma__promotionClient<GetResult<T, A, O>, never>;
  proposedName: Prisma.Prisma__proposedNameClient<GetResult<T, A, O>, never>;
  proposedTime: Prisma.Prisma__proposedTimeClient<GetResult<T, A, O>, never>;
  questionGroupHasQuestion: Prisma.Prisma__questionGroupHasQuestionClient<
    GetResult<T, A, O>,
    never
  >;
  questionGroup: Prisma.Prisma__questionGroupClient<GetResult<T, A, O>, never>;
  questionPriority: Prisma.Prisma__questionPriorityClient<GetResult<T, A, O>, never>;
  questionType: Prisma.Prisma__questionTypeClient<GetResult<T, A, O>, never>;
  question: Prisma.Prisma__questionClient<GetResult<T, A, O>, never>;
  rankingPartnerType: Prisma.Prisma__rankingPartnerTypeClient<GetResult<T, A, O>, never>;
  rankingPartner: Prisma.Prisma__rankingPartnerClient<GetResult<T, A, O>, never>;
  rate: Prisma.Prisma__rateClient<GetResult<T, A, O>, never>;
  roleHasLimit: Prisma.Prisma__roleHasLimitClient<GetResult<T, A, O>, never>;
  roleHasPermission: Prisma.Prisma__roleHasPermissionClient<GetResult<T, A, O>, never>;
  role: Prisma.Prisma__roleClient<GetResult<T, A, O>, never>;
  serviceChangeOfficer: Prisma.Prisma__serviceChangeOfficerClient<GetResult<T, A, O>, never>;
  serviceChangeOfficerHasFileTemplate: Prisma.Prisma__serviceChangeOfficerHasFileTemplateClient<
    GetResult<T, A, O>,
    never
  >;
  serviceHasCompanyMemberType: Prisma.Prisma__serviceHasCompanyMemberTypeClient<
    GetResult<T, A, O>,
    never
  >;
  serviceHasCompanySuffix: Prisma.Prisma__serviceHasCompanySuffixClient<GetResult<T, A, O>, never>;
  serviceHasFileTemplate: Prisma.Prisma__serviceHasFileTemplateClient<GetResult<T, A, O>, never>;
  serviceTypeHasDepartment: Prisma.Prisma__serviceTypeHasDepartmentClient<
    GetResult<T, A, O>,
    never
  >;
  serviceType: Prisma.Prisma__serviceTypeClient<GetResult<T, A, O>, never>;
  serviceUnit: Prisma.Prisma__serviceUnitClient<GetResult<T, A, O>, never>;
  service: Prisma.Prisma__serviceClient<GetResult<T, A, O>, never>;
  singaporeAcra: Prisma.Prisma__singaporeAcraClient<GetResult<T, A, O>, never>;
  subscription: Prisma.Prisma__subscriptionClient<GetResult<T, A, O>, never>;
  supportCaseHasOrder: Prisma.Prisma__supportCaseHasOrderClient<GetResult<T, A, O>, never>;
  supportCasePriority: Prisma.Prisma__supportCasePriorityClient<GetResult<T, A, O>, never>;
  supportCaseStatus: Prisma.Prisma__supportCaseStatusClient<GetResult<T, A, O>, never>;
  supportCaseType: Prisma.Prisma__supportCaseTypeClient<GetResult<T, A, O>, never>;
  supportCase: Prisma.Prisma__supportCaseClient<GetResult<T, A, O>, never>;
  surveyChoice: Prisma.Prisma__surveyChoiceClient<GetResult<T, A, O>, never>;
  survey: Prisma.Prisma__surveyClient<GetResult<T, A, O>, never>;
  syslogType: Prisma.Prisma__syslogTypeClient<GetResult<T, A, O>, never>;
  syslog: Prisma.Prisma__syslogClient<GetResult<T, A, O>, never>;
  target: Prisma.Prisma__targetClient<GetResult<T, A, O>, never>;
  taskHasAgent: Prisma.Prisma__taskHasAgentClient<GetResult<T, A, O>, never>;
  task: Prisma.Prisma__taskClient<GetResult<T, A, O>, never>;
  teamGroup: Prisma.Prisma__teamGroupClient<GetResult<T, A, O>, never>;
  titleName: Prisma.Prisma__titleNameClient<GetResult<T, A, O>, never>;
  tokenType: Prisma.Prisma__tokenTypeClient<GetResult<T, A, O>, never>;
  token: Prisma.Prisma__tokenClient<GetResult<T, A, O>, never>;
  toolBusinessEntity: Prisma.Prisma__toolBusinessEntityClient<GetResult<T, A, O>, never>;
  typeMember: Prisma.Prisma__typeMemberClient<GetResult<T, A, O>, never>;
  urlListType: Prisma.Prisma__urlListTypeClient<GetResult<T, A, O>, never>;
  urlList: Prisma.Prisma__urlListClient<GetResult<T, A, O>, never>;
  userHasNotification: Prisma.Prisma__userHasNotificationClient<GetResult<T, A, O>, never>;
  userHasRole: Prisma.Prisma__userHasRoleClient<GetResult<T, A, O>, never>;
  user: Prisma.Prisma__userClient<GetResult<T, A, O>, never>;
  visaOrder: Prisma.Prisma__visaOrderClient<GetResult<T, A, O>, never>;
  visaPurpose: Prisma.Prisma__visaPurposeClient<GetResult<T, A, O>, never>;
  visaType: Prisma.Prisma__visaTypeClient<GetResult<T, A, O>, never>;
  visaVietnamArrival: Prisma.Prisma__visaVietnamArrivalClient<GetResult<T, A, O>, never>;
  voucherType: Prisma.Prisma__voucherTypeClient<GetResult<T, A, O>, never>;
  voucher: Prisma.Prisma__voucherClient<GetResult<T, A, O>, never>;
  website: Prisma.Prisma__websiteClient<GetResult<T, A, O>, never>;
  xeroAccount: Prisma.Prisma__xeroAccountClient<GetResult<T, A, O>, never>;
  xeroInvoiceStatus: Prisma.Prisma__xeroInvoiceStatusClient<GetResult<T, A, O>, never>;
}

type MethodsWithParams<T, M extends ModelName> = {
  [K in keyof T & Operation]: T[K] extends true
    ? <A extends ModelArgs<M, K>>(
        args?: Prisma.SelectSubset<A, ModelArgs<M, K>>,
      ) => ModelResult<M, A, K>
    : <A extends ModelArgs<M, K>>(
        args: Prisma.SelectSubset<A, ModelArgs<M, K>>,
      ) => ModelResult<M, A, K>;
};

export type IAbstractRepository<T extends ModelName> = MethodsWithParams<Operation, T>;

/* Prisma models */
export type ModelName = Prisma.ModelName;

/* Prisma model methods */
export type PrismaModelMethods<T extends ModelName> =
  keyof PrismaClient[Uncapitalize<T> extends keyof PrismaClient ? Uncapitalize<T> : never];

type PrismaModelMethod<T extends ModelName> = {
  [K in PrismaModelMethods<T>]: PrismaClient[Uncapitalize<T> extends keyof PrismaClient
    ? Uncapitalize<T>
    : never][K];
};

/* Prisma GetResult */
type GetResult<
  T extends ModelName,
  A extends ModelArgs<T, O>,
  O extends Operation,
> = PrismaGetResult<PrismaPayload<T>, A, O>;

/* Prisma payload */
export type PrismaPayload<T extends ModelName> = Prisma.TypeMap['model'][T]['payload'];

/* Prisma model arguments */
export type ModelArgs<
  T extends ModelName,
  O extends Operation,
> = PrismaModelMethod<T>[O extends keyof PrismaModelMethod<T> ? O : never] extends (
  args: infer A,
) => any
  ? A
  : never;

/* Prisma model return types */
export type ModelResult<T extends ModelName, A extends ModelArgs<T, O>, O extends Operation> =
  PrismaModelMethod<T> extends {
    [K in O]: (args: A) => any;
  }
    ? Clients<T, A, O>[T extends keyof Clients<T, A, O> ? T : never]
    : never;
