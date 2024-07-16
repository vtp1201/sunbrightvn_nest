export enum MODEL_NAME {
  ACTION_LOG = 'actionLog',
  ACTION_PROCESS_STEP = 'actionProcessStep',
  ACTION_STEP_TYPE = 'actionStepType',
  ADDITION_PROCESS = 'additionProcess',
  AGENCY = 'agency',
  AGENT_TYPE = 'agentType',
  AGENT = 'agent',
  AIRPORT = 'airport',
  ANSWER = 'answer',
  API_EXAMPLE = 'apiExample',
  API_GROUP = 'apiGroup',
  API_HAS_GROUP = 'apiHasGroup',
  API_METHOD = 'apiMethod',
  API_STATUS = 'apiStatus',
  API = 'api',
  BANK_BRANCH = 'bankBranch',
  BANK_HAS_COUNTRY = 'bankHasCountry',
  BANK_HAS_FILE_TEMPLATE = 'bankHasFileTemplate',
  BANK_HAS_KEYWORD = 'bankHasKeyword',
  BANK = 'bank',
  BANKING_PROCESS = 'bankingProcess',
  BILLING = 'billing',
  BUSINESS_ACTIVITY_INDUSTRY_CLASS = 'businessActivityIndustryClass',
  BUSINESS_ACTIVITY_INDUSTRY = 'businessActivityIndustry',
  BUSINESS_ACTIVITY_LABEL = 'businessActivityLabel',
  BUSINESS_ACTIVITY = 'businessActivity',
  CAMPAIGN_HAS_VOUCHER_TYPE = 'campaignHasVoucherType',
  CAMPAIGN_TYPE = 'campaignType',
  CAMPAIGN = 'campaign',
  CAR_SEAT = 'carSeat',
  CAR_TYPE = 'carType',
  CHANGE_REQUEST_STATUS = 'changeRequestStatus',
  CHANGE_REQUEST_ITEM = 'changeRequestItem',
  CHANGE_REQUEST = 'changeRequest',
  CLICK = 'click',
  COMPANY_EVENT_TYPE = 'companyEventType',
  COMPANY_EVENT = 'companyEvent',
  COMPANY_HAS_BUSINESS_ACTIVITY = 'companyHasBusinessActivity',
  COMPANY_HAS_CURRENCY = 'companyHasCurrency',
  COMPANY_HAS_OPERATION_COUNTRY = 'companyHasOperationCountry',
  COMPANY_MEMBER_HAS_BUSINESS_ACTIVITY = 'companyMemberHasBusinessActivity',
  COMPANY_MEMBER_HAS_OPERATION_COUNTRIES = 'companyMemberOperationCountry',
  COMPANY_INTEREST = 'companyInterest',
  // COMPANY_MEMBER_HAS_TYPE = 'companyMemberHasType',
  COMPANY_MEMBER_ISSUE_REFERENCE = 'companyMemberIssueReference',
  COMPANY_MEMBER_REFERENCES = 'companyMemberReferences',
  COMPANY_MEMBER_TYPE = 'companyMemberType',
  COMPANY_MEMBER = 'companyMember',
  COMPANY_POSITION = 'companyPosition',
  COMPANY_STATUS = 'companyStatus',
  COMPANY_SUFFIX = 'companySuffix',
  COMPANY_SHARE = 'companyShare',
  COMPANY_OWNERSHIP = 'companyOwnership',
  COMPANY = 'company',
  CONTACT_FROM_HISTORY = 'contactFromHistory',
  CONTACT_FROM = 'contactFrom',
  CONTINENT = 'continent',
  COUNTRY_HAS_COMPANY_SUFFIX = 'countryHasCompanySuffix',
  COUNTRY_HAS_ENTITY_TYPE_HAS_FILE_TEMPLATE = 'countryHasEntityTypeHasFileTemplate',
  COUNTRY_HAS_ENTITY_TYPE = 'countryHasEntityType',
  COUNTRY_HAS_QUESTION = 'countryHasQuestion',
  COUNTRY_HAS_SERVICE = 'countryHasService',
  COUNTRY = 'country',
  CURRENCY = 'currency',
  CUSTOMER_HAS_BANK = 'customerHasBank',
  CUSTOMER_HAS_SURVEY_CHOICE = 'customerHasSurveyChoice',
  CUSTOMER_STATUS = 'customerStatus',
  CUSTOMER_TYPE = 'customerType',
  CUSTOMER = 'customer',
  DECLARATION_TAX = 'declarationTax',
  DEPARTMENT = 'department',
  EMAIL_TEMPLATE_HAS_RECEIVER = 'emailTemplateHasReceiver',
  EMAIL_TEMPLATE = 'emailTemplate',
  EMAIL_TRIGGER_HAS_PROCESS = 'emailTriggerHasProcess',
  EMAIL_TRIGGER = 'emailTrigger',
  EMAIL_TYPE = 'emailType',
  EMAIL = 'email',
  ENTITY_TYPE_HAS_COMPANY_SUFFIX = 'entityTypeHasCompanySuffix',
  ENTITY_TYPE = 'entityType',
  FATCA = 'fatca',
  FEE_TYPE = 'feeType',
  FEE = 'fee',
  FILE_TEMPLATE_HAS_COMPANY_MEMBER_TYPE = 'fileTemplateHasCompanyMemberType',
  FILE_TEMPLATE_HAS_NATIONALITY = 'fileTemplateHasNationality',
  FILE_TEMPLATE_HAS_RANKING_PARTNER_TYPE = 'fileTemplateHasRankingPartnerType',
  FILE_TEMPLATE_TYPE = 'fileTemplateType',
  FILE_TEMPLATE = 'fileTemplate',
  FILE_TYPE = 'fileType',
  FILE = 'file',
  GA_CHANNEL = 'gaChannel',
  GENDER = 'gender',
  GRANT_SCHEME_HAS_GRANT_TYPE_ATTRIBUTE = 'grantSchemeHasGrantTypeAttribute',
  GRANT_SCHEME = 'grantScheme',
  GRANT_TYPE_ATTRIBUTE = 'grantTypeAttribute',
  GRANT_TYPE = 'grantType',
  GROUP_HAS_USER = 'groupHasUser',
  HISTORY_COMPANY = 'historyCompany',
  HISTORY_COMPANY_MEMBER = 'historyCompanyMember',
  HISTORY_FILE = 'historyFile',
  HISTORY_LOG_CDC = 'historyLogCdc',
  HOLIDAY = 'holiday',
  LIMIT_TYPE = 'limitType',
  LIMIT_VALUE = 'limitValue',
  LIMIT = 'limit',
  MAILCHIMP_CAMPAIGN_MEMBER = 'mailchimpCampaignMember',
  MAILCHIMP_CAMPAIGN = 'mailchimpCampaign',
  MAILCHIMP_MEMBER = 'mailchimpMember',
  MAILCHIMP_SUMMARY = 'mailchimpSummary',
  MAILCHIMP_TAG = 'mailchimpTag',
  MESSAGE = 'message',
  NOTE_TYPE = 'noteType',
  NOTE = 'note',
  NOTIFICATION_STATUS = 'notificationStatus',
  NOTIFICATION_TEMPLATE_HAS_ROLE = 'notificationTemplateHasRole',
  NOTIFICATION_TEMPLATE = 'notificationTemplate',
  NOTIFICATION_TYPE = 'notificationType',
  NOTIFICATION = 'notification',
  OPTION = 'option',
  ORDER_FROM = 'orderFrom',
  ORDER_HAS_BANK = 'orderHasBank',
  ORDER_ITEM_STATUS = 'orderItemStatus',
  ORDER_ITEM = 'orderItem',
  ORDER_STATUS = 'orderStatus',
  ORDER = 'order',
  PACKAGE_GROUP = 'packageGroup',
  PACKAGE_HAS_SERVICE = 'packageHasService',
  PACKAGE_TYPE = 'packageType',
  PACKAGE = 'Package',
  PAYMENT_GATEWAY = 'paymentGateway',
  PAYMENT_INFORMATION = 'paymentInformation',
  PERMISSION_GROUP = 'permissionGroup',
  PERMISSION = 'permission',
  PERSON = 'person',
  PROCESS_HAS_NOTE = 'processHasNote',
  // PROCESS_HAS_PARENT_PROCESS = 'processHasParentProcess',
  PROCESS_LOG = 'processLog',
  PROCESS_STEP_HAS_FILE_TEMPLATE = 'processStepHasFileTemplate',
  PROCESS_STEP_HAS_ROLE = 'processStepHasRole',
  PROCESS_STEP_TYPE = 'processStepType',
  PROCESS_STEP = 'processStep',
  PROCESS = 'process',
  PROMOTION = 'promotion',
  PROPOSED_NAME = 'proposedName',
  PROPOSED_TIME = 'proposedTime',
  QUESTION_GROUP_HAS_QUESTION = 'questionGroupHasQuestion',
  QUESTION_GROUP = 'questionGroup',
  QUESTION_PRIORITY = 'questionPriority',
  QUESTION_TYPE = 'questionType',
  QUESTION = 'question',
  RANKING_PARTNER_TYPE = 'rankingPartnerType',
  RANKING_PARTNER = 'rankingPartner',
  RATE = 'rate',
  ROLE_HAS_LIMIT = 'roleHasLimit',
  ROLE_HAS_PERMISSION = 'roleHasPermission',
  ROLE = 'role',
  SERVICE_CHANGE_OFFICER = 'serviceChangeOfficer',
  SERVICE_CHANGE_OFFICER_HAS_FILE_TEMPLATE = 'serviceChangeOfficerHasFileTemplate',
  SERVICE_HAS_COMPANY_MEMBER_TYPE = 'serviceHasCompanyMemberType',
  SERVICE_HAS_COMPANY_SUFFIX = 'serviceHasCompanySuffix',
  SERVICE_HAS_FILE_TEMPLATE = 'serviceHasFileTemplate',
  SERVICE_TYPE_HAS_DEPARTMENT = 'serviceTypeHasDepartment',
  SERVICE_TYPE = 'serviceType',
  SERVICE_UNIT = 'serviceUnit',
  SERVICE = 'service',
  SINGAPORE_ACRA = 'singaporeAcra',
  SUBSCRIPTION = 'subscription',
  SUPPORT_CASE_HAS_ORDER = 'supportCaseHasOrder',
  SUPPORT_CASE_PRIORITY = 'supportCasePriority',
  SUPPORT_CASE_STATUS = 'supportCaseStatus',
  SUPPORT_CASE_TYPE = 'supportCaseType',
  SUPPORT_CASE = 'supportCase',
  SURVEY_CHOICE = 'surveyChoice',
  SURVEY = 'survey',
  SYSLOG_TYPE = 'syslogType',
  SYSLOG = 'syslog',
  TARGET = 'target',
  TASK_HAS_AGENT = 'taskHasAgent',
  TASK = 'task',
  TEAM_GROUP = 'teamGroup',
  TITLE_NAME = 'titleName',
  TOKEN_TYPE = 'tokenType',
  TOKEN = 'token',
  TOOL_BUSINESS_ENTITY = 'toolBusinessEntity',
  TYPE_MEMBER = 'typeMember',
  URL_LIST_TYPE = 'urlListType',
  URL_LIST = 'urlList',
  USER_HAS_NOTIFICATION = 'userHasNotification',
  USER_HAS_ROLE = 'userHasRole',
  USER = 'user',
  VISA_ORDER = 'visaOrder',
  VISA_PURPOSE = 'visaPurpose',
  VISA_TYPE = 'visaType',
  VISA_VIETNAM_ARRIVAL = 'visaVietnamArrival',
  VOUCHER_TYPE = 'voucherType',
  VOUCHER = 'voucher',
  WEBSITE = 'website',
  XERO_ACCOUNT = 'xeroAccount',
  XERO_INVOICE_STATUS = 'xeroInvoiceStatus',
}

export const TABLE_NAME = {
  ACTION_LOG: 'action_log',
  ACTION_PROCESS_STEP: 'action_process_step',
  ACTION_STEP_TYPE: 'action_step_type',
  ADDITION_PROCESS: 'addition_process',
  AGENCY: 'agency',
  AGENT_TYPE: 'agent_type',
  AGENT: 'agent',
  AIRPORT: 'airport',
  ANSWER: 'answer',
  API_EXAMPLE: 'api_example',
  API_GROUP: 'api_group',
  API_HAS_GROUP: 'api_has_group',
  API_METHOD: 'api_method',
  API_STATUS: 'api_status',
  API: 'api',
  BANK_BRANCH: 'bank_branch',
  BANK_HAS_COUNTRY: 'bank_has_country',
  BANK_HAS_FILE_TEMPLATE: 'bank_has_file_template',
  BANK_HAS_KEYWORD: 'bank_has_keyword',
  BANK: 'bank',
  BANKING_PROCESS: 'banking_process',
  BILLING: 'billing',
  BUSINESS_ACTIVITY_INDUSTRY_CLASS: 'business_activity_industry_class',
  BUSINESS_ACTIVITY_INDUSTRY: 'business_activity_industry',
  BUSINESS_ACTIVITY_LABEL: 'business_activity_label',
  BUSINESS_ACTIVITY: 'business_activity',
  CAMPAIGN_HAS_VOUCHER_TYPE: 'campaign_has_voucher_type',
  CAMPAIGN_TYPE: 'campaign_type',
  CAMPAIGN: 'campaign',
  CAR_SEAT: 'car_seat',
  CAR_TYPE: 'car_type',
  CHANGE_REQUEST_STATUS: 'change_request_status',
  CHANGE_REQUEST_ITEM: 'change_request_item',
  CHANGE_REQUEST: 'change_request',
  CLICK: 'click',
  COMPANY_EVENT_TYPE: 'company_event_type',
  COMPANY_EVENT: 'company_event',
  COMPANY_HAS_BUSINESS_ACTIVITY: 'company_has_business_activity',
  COMPANY_HAS_CURRENCY: 'company_has_currency',
  COMPANY_HAS_OPERATION_COUNTRY: 'company_has_operation_country',
  COMPANY_MEMBER_HAS_BUSINESS_ACTIVITY: 'company_member_has_business_activity',
  COMPANY_MEMBER_HAS_OPERATION_COUNTRIES: 'company_member_has_operation_countries',
  COMPANY_INTEREST: 'company_interest',
  COMPANY_MEMBER_HAS_TYPE: 'company_member_has_type',
  COMPANY_MEMBER_ISSUE_REFERENCE: 'company_member_issue_reference',
  COMPANY_MEMBER_REFERENCES: 'company_member_references',
  COMPANY_MEMBER_TYPE: 'company_member_type',
  COMPANY_MEMBER: 'company_member',
  COMPANY_POSITION: 'company_position',
  COMPANY_STATUS: 'company_status',
  COMPANY_SUFFIX: 'company_suffix',
  COMPANY_SHARE: 'company_share',
  COMPANY_OWNERSHIP: 'company_ownership',
  COMPANY: 'company',
  CONTACT_FROM_HISTORY: 'contact_from_history',
  CONTACT_FROM: 'contact_from',
  CONTINENT: 'continent',
  COUNTRY_HAS_COMPANY_SUFFIX: 'country_has_company_suffix',
  COUNTRY_HAS_ENTITY_TYPE_HAS_FILE_TEMPLATE: 'country_has_entity_type_has_file_template',
  COUNTRY_HAS_ENTITY_TYPE: 'country_has_entity_type',
  COUNTRY_HAS_QUESTION: 'country_has_question',
  COUNTRY_HAS_SERVICE: 'country_has_service',
  COUNTRY: 'country',
  CURRENCY: 'currency',
  CUSTOMER_HAS_BANK: 'customer_has_bank',
  CUSTOMER_HAS_SURVEY_CHOICE: 'customer_has_survey_choice',
  CUSTOMER_STATUS: 'customer_status',
  CUSTOMER_TYPE: 'customer_type',
  CUSTOMER: 'customer',
  DECLARATION_TAX: 'declaration_tax',
  DEPARTMENT: 'department',
  EMAIL_TEMPLATE_HAS_RECEIVER: 'email_template_has_receiver',
  EMAIL_TEMPLATE: 'email_template',
  EMAIL_TRIGGER_HAS_PROCESS: 'email_trigger_has_process',
  EMAIL_TRIGGER: 'email_trigger',
  EMAIL_TYPE: 'email_type',
  EMAIL: 'email',
  ENTITY_TYPE_HAS_COMPANY_SUFFIX: 'entity_type_has_company_suffix',
  ENTITY_TYPE: 'entity_type',
  FATCA: 'fatca',
  FEE_TYPE: 'fee_type',
  FEE: 'fee',
  FILE_TEMPLATE_HAS_COMPANY_MEMBER_TYPE: 'file_template_has_company_member_type',
  FILE_TEMPLATE_HAS_NATIONALITY: 'file_template_has_nationality',
  FILE_TEMPLATE_HAS_RANKING_PARTNER_TYPE: 'file_template_has_ranking_partner_type',
  FILE_TEMPLATE_TYPE: 'file_template_type',
  FILE_TEMPLATE: 'file_template',
  FILE_TYPE: 'file_type',
  FILE: 'file',
  GA_CHANNEL: 'ga_channel',
  GENDER: 'gender',
  GRANT_SCHEME_HAS_GRANT_TYPE_ATTRIBUTE: 'grant_scheme_has_grant_type_attribute',
  GRANT_SCHEME: 'grant_scheme',
  GRANT_TYPE_ATTRIBUTE: 'grant_type_attribute',
  GRANT_TYPE: 'grant_type',
  GROUP_HAS_USER: 'group_has_user',
  HISTORY_COMPANY: 'history_company',
  HISTORY_COMPANY_MEMBER: 'history_company_member',
  HISTORY_FILE: 'history_file',
  HISTORY_LOG_CDC: 'history_log_cdc',
  HOLIDAY: 'holiday',
  LIMIT_TYPE: 'limit_type',
  LIMIT_VALUE: 'limit_value',
  LIMIT: 'limit',
  MAILCHIMP_CAMPAIGN_MEMBER: 'mailchimp_campaign_member',
  MAILCHIMP_CAMPAIGN: 'mailchimp_campaign',
  MAILCHIMP_MEMBER: 'mailchimp_member',
  MAILCHIMP_SUMMARY: 'mailchimp_summary',
  MAILCHIMP_TAG: 'mailchimp_tag',
  MESSAGE: 'message',
  MIGRATION: 'migration',
  NOTE_TYPE: 'note_type',
  NOTE: 'note',
  NOTIFICATION_STATUS: 'notification_status',
  NOTIFICATION_TEMPLATE_HAS_ROLE: 'notification_template_has_role',
  NOTIFICATION_TEMPLATE: 'notification_template',
  NOTIFICATION_TYPE: 'notification_type',
  NOTIFICATION: 'notification',
  OPTION: 'option',
  ORDER_FROM: 'order_from',
  ORDER_HAS_BANK: 'order_has_bank',
  ORDER_ITEM_STATUS: 'order_item_status',
  ORDER_ITEM: 'order_item',
  ORDER_STATUS: 'order_status',
  ORDER: 'order',
  PACKAGE_GROUP: 'package_group',
  PACKAGE_HAS_SERVICE: 'package_has_service',
  PACKAGE_TYPE: 'package_type',
  PACKAGE: 'package',
  PAYMENT_GATEWAY: 'payment_gateway',
  PAYMENT_INFORMATION: 'payment_information',
  PERMISSION_GROUP: 'permission_group',
  PERMISSION: 'permission',
  PERSON: 'person',
  PROCESS_HAS_NOTE: 'process_has_note',
  PROCESS_HAS_PARENT_PROCESS: 'process_has_parent_process',
  PROCESS_LOG: 'process_log',
  PROCESS_STEP_HAS_FILE_TEMPLATE: 'process_step_has_file_template',
  PROCESS_STEP_HAS_ROLE: 'process_step_has_role',
  PROCESS_STEP_TYPE: 'process_step_type',
  PROCESS_STEP: 'process_step',
  PROCESS: 'process',
  PROMOTION: 'promotion',
  PROPOSED_NAME: 'proposed_name',
  PROPOSED_TIME: 'proposed_time',
  QUESTION_GROUP_HAS_QUESTION: 'question_group_has_question',
  QUESTION_GROUP: 'question_group',
  QUESTION_PRIORITY: 'question_priority',
  QUESTION_TYPE: 'question_type',
  QUESTION: 'question',
  RANKING_PARTNER_TYPE: 'ranking_partner_type',
  RANKING_PARTNER: 'ranking_partner',
  RATE: 'rate',
  ROLE_HAS_LIMIT: 'role_has_limit',
  ROLE_HAS_PERMISSION: 'role_has_permission',
  ROLE: 'role',
  SERVICE_CHANGE_OFFICER: 'service_change_officer',
  SERVICE_HAS_COMPANY_MEMBER_TYPE: 'service_has_company_member_type',
  SERVICE_HAS_COMPANY_SUFFIX: 'service_has_company_suffix',
  SERVICE_HAS_FILE_TEMPLATE: 'service_has_file_template',
  SERVICE_TYPE_HAS_DEPARTMENT: 'service_type_has_department',
  SERVICE_TYPE: 'service_type',
  SERVICE_UNIT: 'service_unit',
  SERVICE: 'service',
  SINGAPORE_ACRA: 'singapore_acra',
  SUBSCRIPTION: 'subscription',
  SUPPORT_CASE_HAS_ORDER: 'support_case_has_order',
  SUPPORT_CASE_PRIORITY: 'support_case_priority',
  SUPPORT_CASE_STATUS: 'support_case_status',
  SUPPORT_CASE_TYPE: 'support_case_type',
  SUPPORT_CASE: 'support_case',
  SURVEY_CHOICE: 'survey_choice',
  SURVEY: 'survey',
  SYSLOG_TYPE: 'syslog_type',
  SYSLOG: 'syslog',
  TARGET: 'target',
  TASK_HAS_AGENT: 'task_has_agent',
  TASK: 'task',
  TEAM_GROUP: 'team_group',
  TITLE_NAME: 'title_name',
  TOKEN_TYPE: 'token_type',
  TOKEN: 'token',
  TOOL_BUSINESS_ENTITY: 'tool_business_entity',
  TYPE_MEMBER: 'type_member',
  URL_LIST_TYPE: 'url_list_type',
  URL_LIST: 'url_list',
  USER_HAS_NOTIFICATION: 'user_has_notification',
  USER_HAS_ROLE: 'user_has_role',
  USER: 'user',
  VISA_ORDER: 'visa_order',
  VISA_PURPOSE: 'visa_purpose',
  VISA_TYPE: 'visa_type',
  VISA_VIETNAM_ARRIVAL: 'visa_vietnam_arrival',
  VOUCHER_TYPE: 'voucher_type',
  VOUCHER: 'voucher',
  WEBSITE: 'website',
  XERO_ACCOUNT: 'xero_account',
  XERO_INVOICE_STATUS: 'xero_invoice_status',
};

export enum TABLE_NAME_N_M {
  BANK_HAS_FILE_TEMPLATE = '_bankTofileTemplate',
  COMPANY_HAS_BUSINESS_ACTIVITY = 'companyHasBusinessActivity',
  COMPANY_HAS_CURRENCY = 'companyHasCurrency',
  COMPANY_HAS_OPERATION_COUNTRY = 'companyHasOperationCountry',
  COMPANY_MEMBER_HAS_BUSINESS_ACTIVITY = 'companyMemberHasBusinessActivity',
  COMPANY_MEMBER_HAS_OPERATION_COUNTRIES = 'companyMemberOperationCountries',
  COUNTRY_HAS_COMPANY_SUFFIX = 'countryHasCompanySuffix',
  COUNTRY_HAS_QUESTION = 'countryHasQuestion',
  CUSTOMER_HAS_BANK = 'customerHasBank',
  ENTITY_TYPE_HAS_COMPANY_SUFFIX = 'entityTypeHasCompanySuffix',
  FILE_TEMPLATE_HAS_RANKING_PARTNER_TYPE = 'fileTemplateHasRankingPartnerType',
  GROUP_HAS_USER = 'groupHasUser',
  NOTIFICATION_TEMPLATE_HAS_ROLE = 'notificationTemplateHasRole',
  ORDER_HAS_BANK = 'orderHasBank',
  PROCESS_HAS_NOTE = 'processHasNote',
  QUESTION_GROUP_HAS_QUESTION = 'questionGroupHasQuestion',
  ROLE_HAS_LIMIT = 'roleHasLimit',
  ROLE_HAS_PERMISSION = 'roleHasPermission',
  SERVICE_HAS_COMPANY_MEMBER_TYPE = 'serviceHasCompanyMemberType',
  SERVICE_CHANGE_OFFICER_HAS_FILE_TEMPLATE = '',
  SERVICE_HAS_COMPANY_SUFFIX = 'serviceHasCompanySuffix',
  SUPPORT_CASE_HAS_ORDER = 'supportCaseHasOrder',
  USER_HAS_ROLE = 'userHasRole',
}
