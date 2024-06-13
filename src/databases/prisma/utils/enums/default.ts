export enum ATTRIBUTE_DEFAULT {
  id = 'id',
  finishedTime = 'finishedTime',
  createdTime = 'createdTime',
  updatedTime = 'updatedTime',
  deletedTime = 'deletedTime',
  isDeleted = 'isDeleted',
}

export enum COLUMN_DEFAULT {
  id = 'id',
  finishedTime = 'finished_time',
  createdTime = 'created_time',
  updatedTime = 'updated_time',
  deletedTime = 'deleted_time',
  isDeleted = 'is_deleted',
}

export enum RELATION_DEFAULT {
  packages = 'packages',
  packageGroup = 'packageGroup',
  packageType = 'packageType',
  serviceType = 'serviceType',
  packageAnnual = 'packageAnnual',
  orderItems = 'orderItems',
  renamedPackage = 'renamedPackage',
  orderItemStatus = 'orderItemStatus',
  orderStatus = 'orderStatus',
  website = 'website',
  toolBusinessEntities = 'toolBusinessEntities',
  notificationTemplateHasRoles = 'notificationTemplateHasRoles',
  subscription = 'subscription',
  notificationStatus = 'notificationStatus',
  notifications = 'notifications',
  notificationTemplate = 'notificationTemplate',
  notificationType = 'notificationType',
  userHasNotifications = 'userHasNotifications',
  noteType = 'noteType',
  processHasNotes = 'processHasNotes',
  supportCase = 'supportCase',
  mailchimpCampaignMembers = 'mailchimpCampaignMembers',
  mailchimpMember = 'mailchimpMember',
  mailchimpCampaign = 'mailchimpCampaign',
  mailchimpSummaries = 'mailchimpSummaries',
  mailchimpCampaignMember = 'mailchimpCampaignMember',
  limit = 'limit',
  limits = 'limits',
  roleHasLimits = 'roleHasLimits',
  limitValues = 'limitValues',
  permission = 'permission',
  limitType = 'limitType',
  permissionGroup = 'permissionGroup',
  actionStepType = 'actionStepType',
  historyLogCdc = 'historyLogCdc',
  grantTypeAttributes = 'grantTypeAttributes',
  grantSchemeHasGrantTypeAttributes = 'grantSchemeHasGrantTypeAttributes',
  countryHasEntityTypeHasFileTemplates = 'countryHasEntityTypeHasFileTemplates',
  historyFiles = 'historyFiles',
  companyEvent = 'companyEvent',
  rankingPartner = 'rankingPartner',
  apiExample = 'apiExample',
  questionGroup = 'questionGroup',
  message = 'message',
  note = 'note',
  filledByCompanyMember = 'filledByCompanyMember',
  fileType = 'fileType',
  fees = 'fees',
  feeType = 'feeType',
  declarationTaxes = 'declarationTaxes',
  countryHolderCountry = 'countryHolderCountry',
  countryMailingCountry = 'countryMailingCountry',
  countryResidentCountry = 'countryResidentCountry',
  renamedPackages = 'renamedPackages',
  countryHasEntityTypes = 'countryHasEntityTypes',
  countryHasServices = 'countryHasServices',
  emailTemplates = 'emailTemplates',
  emailTrigger = 'emailTrigger',
  teamGroup = 'teamGroup',
  role = 'role',
  emailType = 'emailType',
  otherEmailTemplates = 'otherEmailTemplates',
  processStep = 'processStep',
  emailTriggerHasProcesses = 'emailTriggerHasProcesses',
  emailTemplateHasReceivers = 'emailTemplateHasReceivers',
  emailTemplate = 'emailTemplate',
  agent = 'agent',
  serviceTypeHasDepartments = 'serviceTypeHasDepartments',
  fatca = 'fatca',
  surveyChoice = 'surveyChoice',
  typeMember = 'typeMember',
  gender = 'gender',
  countryHasEntityType = 'countryHasEntityType',
  countries = 'countries',
  contactFrom = 'contactFrom',
  contactFromHistories = 'contactFromHistories',
  mailchimpTags = 'mailchimpTags',
  countryHasCompanySuffixes = 'countryHasCompanySuffixes',
  entityTypeHasCompanySuffixes = 'entityTypeHasCompanySuffixes',
  serviceHasCompanySuffixes = 'serviceHasCompanySuffixes',
  companies = 'companies',
  file = 'file',
  otherCompanyMemberTypes = 'otherCompanyMemberTypes',
  companyPositions = 'companyPositions',
  fileTemplateHasCompanyMemberTypes = 'fileTemplateHasCompanyMemberTypes',
  companyMemberIssueReference = 'companyMemberIssueReference',
  companyMemberReferences = 'companyMemberReferences',
  companyMemberType = 'companyMemberType',
  corporationCompanyMember = 'corporationCompanyMember',
  currency = 'currency',
  businessActivity = 'businessActivity',
  companyEventType = 'companyEventType',
  order = 'order',
  service = 'service',
  changeRequests = 'changeRequests',
  serviceChangeOfficers = 'serviceChangeOfficers',
  changeRequest = 'changeRequest',
  syslogs = 'syslogs',
  apis = 'apis',
  user = 'user',
  task = 'task',
  agents = 'agents',
  agency = 'agency',
  customers = 'customers',
  services = 'services',
  visaOrders = 'visaOrders',
  bank = 'bank',
  country = 'country',
  agentType = 'agentType',
  emails = 'emails',
  processLogs = 'processLogs',
  taskHasAgents = 'taskHasAgents',
  tokens = 'tokens',
  billings = 'billings',
  processes = 'processes',
  actionProcessSteps = 'actionProcessSteps',
  historyLogCDCs = 'historyLogCDCs',
  notificationTemplates = 'notificationTemplates',
  companyMember = 'companyMember',
  option = 'option',
  question = 'question',
  company = 'company',
  apiMethod = 'apiMethod',
  apiExamples = 'apiExamples',
  apiHasFields = 'apiHasFields',
  apiHasGroups = 'apiHasGroups',
  apiStatus = 'apiStatus',
  apiGroup = 'apiGroup',
  api = 'api',
  files = 'files',
  bankBranches = 'bankBranches',
  bankHasCountries = 'bankHasCountries',
  bankHasFileTemplates = 'bankHasFileTemplates',
  bankHasKeywords = 'bankHasKeywords',
  bankingProcesses = 'bankingProcesses',
  customerHasBanks = 'customerHasBanks',
  orderHasBanks = 'orderHasBanks',
  rankingPartnerType = 'rankingPartnerType',
  fileTemplate = 'fileTemplate',
  bankBranch = 'bankBranch',
  process = 'process',
  proposedTime = 'proposedTime',
  additionProcess = 'additionProcess',
  customer = 'customer',
  phoneCountry = 'phoneCountry',
  historyCompanies = 'historyCompanies',
  orders = 'orders',
  businessActivityIndustry = 'businessActivityIndustry',
  companyHasBusinessActivities = 'companyHasBusinessActivities',
  companyMemberHasBusinessActivities = 'companyMemberHasBusinessActivities',
  businessActivityIndustryClass = 'businessActivityIndustryClass',
  businessActivities = 'businessActivities',
  businessActivityIndustries = 'businessActivityIndustries',
  campaignType = 'campaignType',
  campaignHasVoucherTypes = 'campaignHasVoucherTypes',
  campaign = 'campaign',
  voucherType = 'voucherType',
  campaigns = 'campaigns',
  companyPosition = 'companyPosition',
  changeRequestStatus = 'changeRequestStatus',
  changeRequestItems = 'changeRequestItems',
  answers = 'answers',
  businessCountry = 'businessCountry',
  billing = 'billing',
  companyStatus = 'companyStatus',
  companySuffix = 'companySuffix',
  entityType = 'entityType',
  operatingCountry = 'operatingCountry',
  companyEvents = 'companyEvents',
  companyHasCurrencies = 'companyHasCurrencies',
  companyHasOperationCountries = 'companyHasOperationCountries',
  companyInterests = 'companyInterests',
  companyMembers = 'companyMembers',
  companyOwnerships = 'companyOwnerships',
  companyShares = 'companyShares',
  historiesLogCdc = 'historiesLogCdc',
  notes = 'notes',
  proposedNames = 'proposedNames',
  tasks = 'tasks',
}
