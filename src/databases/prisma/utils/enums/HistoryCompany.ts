import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  version = 'version',
  companyId = 'companyId',
  taskId = 'taskId',
  companyCode = 'companyCode',
  countryId = 'countryId',
  companyRegNo = 'companyRegNo',
  name = 'name',
  companyStatusId = 'companyStatusId',
  entityTypeId = 'entityTypeId',
  companySuffixId = 'companySuffixId',
  preventiveName = 'preventiveName',
  address = 'address',
  tinCode = 'tinCode',
  pinCode = 'pinCode',
  tax = 'tax',
  description = 'description',
  note = 'note',
  incorporationDate = 'incorporationDate',
  xeroContactId = 'xeroContactId',
  isOutsideCompany = 'isOutsideCompany',
  renewalDate = 'renewalDate',
  billingId = 'billingId',
  contactFullName = 'contactFullName',
  contactPhone = 'contactPhone',
  contactEmail = 'contactEmail',
  contactAddress = 'contactAddress',
  contactPhoneCountryId = 'contactPhoneCountryId',
  contactPhoneNumber = 'contactPhoneNumber',
  contactState = 'contactState',
  contactCity = 'contactCity',
  contactPostalCode = 'contactPostalCode',
  operatingCountryId = 'operatingCountryId',
  operatingCity = 'operatingCity',
  operatingState = 'operatingState',
  operatingPostalCode = 'operatingPostalCode',
  sourceFund = 'sourceFund',
  businessFullName = 'businessFullName',
  businessAddress = 'businessAddress',
  businessCountryId = 'businessCountryId',
  businessCity = 'businessCity',
  businessState = 'businessState',
  businessPostalCode = 'businessPostalCode',
  businessDayEnd = 'businessDayEnd',
  businessMonthEnd = 'businessMonthEnd',
  shareCapitalParValue = 'shareCapitalParValue',
  shareCapitalTypeOfShare = 'shareCapitalTypeOfShare',
  shareCapitalNumberShare = 'shareCapitalNumberShare',
  shareCapital = 'shareCapital',
  shareCapitalClassOfShare = 'shareCapitalClassOfShare',
  articlesOfOrganization = 'articlesOfOrganization',
  recordNumber = 'recordNumber',
  numOfCheckingBank = 'numOfCheckingBank',
  businessAnnualReport = 'businessAnnualReport',
  sealImage = 'sealImage',
  leftCheckingBank = 'leftCheckingBank',
  businessActivityDetail = 'businessActivityDetail',
  remainingNumberShare = 'remainingNumberShare',
  issuedNumberShare = 'issuedNumberShare',
  CompanyHasBusinessActivity = 'CompanyHasBusinessActivity',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  version = 'version',
  companyId = 'company_id',
  taskId = 'task_id',
  companyCode = 'company_code',
  countryId = 'country_id',
  companyRegNo = 'company_reg_no',
  name = 'name',
  companyStatusId = 'company_status_id',
  entityTypeId = 'entity_type_id',
  companySuffixId = 'company_suffix_id',
  preventiveName = 'preventive_name',
  address = 'address',
  tinCode = 'tin_code',
  pinCode = 'pin_code',
  tax = 'tax',
  description = 'description',
  note = 'note',
  incorporationDate = 'incorporation_date',
  xeroContactId = 'xero_contact_id',
  isOutsideCompany = 'is_outside_company',
  renewalDate = 'renewal_date',
  billingId = 'billing_id',
  contactFullName = 'contact_full_name',
  contactPhone = 'contact_phone',
  contactEmail = 'contact_email',
  contactAddress = 'contact_address',
  contactPhoneCountryId = 'contact_phone_country_id',
  contactPhoneNumber = 'contact_phone_number',
  contactState = 'contact_state',
  contactCity = 'contact_city',
  contactPostalCode = 'contact_postal_code',
  operatingCountryId = 'operating_country_id',
  operatingCity = 'operating_city',
  operatingState = 'operating_state',
  operatingPostalCode = 'operating_postal_code',
  sourceFund = 'source_fund',
  businessFullName = 'business_full_name',
  businessAddress = 'business_address',
  businessCountryId = 'business_country_id',
  businessCity = 'business_city',
  businessState = 'business_state',
  businessPostalCode = 'business_postal_code',
  businessDayEnd = 'business_day_end',
  businessMonthEnd = 'business_month_end',
  shareCapitalParValue = 'share_capital_par_value',
  shareCapitalTypeOfShare = 'share_capital_type_of_share',
  shareCapitalNumberShare = 'share_capital_number_share',
  shareCapital = 'share_capital',
  shareCapitalClassOfShare = 'share_capital_class_of_share',
  articlesOfOrganization = 'articles_of_organization',
  recordNumber = 'record_number',
  numOfCheckingBank = 'num_of_checking_bank',
  businessAnnualReport = 'business_annual_report',
  sealImage = 'seal_image',
  leftCheckingBank = 'left_checking_bank',
  businessActivityDetail = 'business_activity_detail',
  remainingNumberShare = 'remaining_number_share',
  issuedNumberShare = 'issued_number_share',
  CompanyHasBusinessActivity = 'CompanyHasBusinessActivity',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  // countryHistoryCompanyCountryIdToCountry = RELATION_DEFAULT.countryHistoryCompanyCountryIdToCountry,
  companyStatus = RELATION_DEFAULT.companyStatus,
  entityType = RELATION_DEFAULT.entityType,
  companySuffix = RELATION_DEFAULT.companySuffix,
  billing = RELATION_DEFAULT.billing,
  // countryHistoryCompanyOperatingCountryIdToCountry = RELATION_DEFAULT.countryHistoryCompanyOperatingCountryIdToCountry,
  // countryHistoryCompanyBusinessCountryIdToCountry = RELATION_DEFAULT.countryHistoryCompanyBusinessCountryIdToCountry,
}

export enum INDEX {
  billingId = `@@index([${ATTRIBUTE.billingId}], map: "billing_id")`,
  businessCountryId = `@@index([${ATTRIBUTE.businessCountryId}], map: "business_country_id")`,
  companyStatusId = `@@index([${ATTRIBUTE.companyStatusId}], map: "company_status_id")`,
  companySuffixId = `@@index([${ATTRIBUTE.companySuffixId}], map: "company_suffix_id")`,
  countryId = `@@index([${ATTRIBUTE.countryId}], map: "country_id")`,
  entityTypeId = `@@index([${ATTRIBUTE.entityTypeId}], map: "entity_type_id")`,
  operatingCountryId = `@@index([${ATTRIBUTE.operatingCountryId}], map: "operating_country_id")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
