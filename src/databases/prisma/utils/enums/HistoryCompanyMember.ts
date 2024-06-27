import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  taskId = 'taskId',
  companyId = 'companyId',
  companyMemberId = 'companyMemberId',
  version = 'version',
  countryId = 'countryId',
  typeMemberId = 'typeMemberId',
  firstName = 'firstName',
  middleName = 'middleName',
  lastName = 'lastName',
  fullName = 'fullName',
  corporationName = 'corporationName',
  corporationNumber = 'corporationNumber',
  corporationDate = 'corporationDate',
  genderId = 'genderId',
  major = 'major',
  phone = 'phone',
  email = 'email',
  birthday = 'birthday',
  birthCountryId = 'birthCountryId',
  address = 'address',
  serviceAddress = 'serviceAddress',
  passport = 'passport',
  passportIssueDate = 'passportIssueDate',
  passportExpireDate = 'passportExpireDate',
  ssn = 'ssn',
  description = 'description',
  phoneCountryId = 'phoneCountryId',
  phoneNumber = 'phoneNumber',
  assetSourceFundCastInBank = 'assetSourceFundCastInBank',
  assetSourceFundRealEstate = 'assetSourceFundRealEstate',
  assetSourceFundOtherDetail = 'assetSourceFundOtherDetail',
  assetSourceFundOtherMoney = 'assetSourceFundOtherMoney',
  incomeSourceFundInvestment = 'incomeSourceFundInvestment',
  incomeSourceFundSelfEmployed = 'incomeSourceFundSelfEmployed',
  incomeSourceFundOtherDetail = 'incomeSourceFundOtherDetail',
  incomeSourceFundOtherMoney = 'incomeSourceFundOtherMoney',
  isNominee = 'isNominee',
  isApproved = 'isApproved',
  operationAddress = 'operationAddress',
  natureBusiness = 'natureBusiness',
  relationshipIntendedCompany = 'relationshipIntendedCompany',
  city = 'city',
  state = 'state',
  postalCode = 'postalCode',
  addressCountryId = 'addressCountryId',
  businessActivityDetail = 'businessActivityDetail',
  companyPositions = 'companyPositions',
  companyShares = 'companyShares',
  companyInterests = 'companyInterests',
  companyOwnerships = 'companyOwnerships',
  files = 'files',
  companyMemberReferences = 'companyMemberReferences',
  businessActivities = 'businessActivities',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  taskId = 'task_id',
  companyId = 'company_id',
  companyMemberId = 'company_member_id',
  version = 'version',
  countryId = 'country_id',
  typeMemberId = 'type_member_id',
  firstName = 'first_name',
  middleName = 'middle_name',
  lastName = 'last_name',
  fullName = 'full_name',
  corporationName = 'corporation_name',
  corporationNumber = 'corporation_number',
  corporationDate = 'corporation_date',
  genderId = 'gender_id',
  major = 'major',
  phone = 'phone',
  email = 'email',
  birthday = 'birthday',
  birthCountryId = 'birth_country_id',
  address = 'address',
  serviceAddress = 'service_address',
  passport = 'passport',
  passportIssueDate = 'passport_issue_date',
  passportExpireDate = 'passport_expire_date',
  ssn = 'ssn',
  description = 'description',
  phoneCountryId = 'phone_country_id',
  phoneNumber = 'phone_number',
  assetSourceFundCastInBank = 'asset_source_fund_cast_in_bank',
  assetSourceFundRealEstate = 'asset_source_fund_real_estate',
  assetSourceFundOtherDetail = 'asset_source_fund_other_detail',
  assetSourceFundOtherMoney = 'asset_source_fund_other_money',
  incomeSourceFundInvestment = 'income_source_fund_investment',
  incomeSourceFundSelfEmployed = 'income_source_fund_self_employed',
  incomeSourceFundOtherDetail = 'income_source_fund_other_detail',
  incomeSourceFundOtherMoney = 'income_source_fund_other_money',
  isNominee = 'is_nominee',
  isApproved = 'is_approved',
  operationAddress = 'operation_address',
  natureBusiness = 'nature_business',
  relationshipIntendedCompany = 'relationship_intended_company',
  city = 'city',
  state = 'state',
  postalCode = 'postal_code',
  addressCountryId = 'address_country_id',
  businessActivityDetail = 'business_activity_detail',
  companyPositions = 'CompanyPositions',
  companyShares = 'CompanyShares',
  companyInterests = 'CompanyInterests',
  companyOwnerships = 'CompanyOwnerships',
  files = 'Files',
  companyMemberReferences = 'CompanyMemberReferences',
  businessActivities = 'BusinessActivities',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  // countryHistoryCompanyMemberCountryIdToCountry = RELATION_DEFAULT.countryHistoryCompanyMemberCountryIdToCountry,
  typeMember = RELATION_DEFAULT.typeMember,
  gender = RELATION_DEFAULT.gender,
  // countryHistoryCompanyMemberBirthCountryIdToCountry = RELATION_DEFAULT.countryHistoryCompanyMemberBirthCountryIdToCountry,
  // countryHistoryCompanyMemberPhoneCountryIdToCountry = RELATION_DEFAULT.countryHistoryCompanyMemberPhoneCountryIdToCountry,
  // countryHistoryCompanyMemberAddressCountryIdToCountry = RELATION_DEFAULT.countryHistoryCompanyMemberAddressCountryIdToCountry,
}

export enum INDEX {
  uniqueTaskCompanyMemberVersion = `@@unique([${ATTRIBUTE.taskId}, ${ATTRIBUTE.companyMemberId}, ${ATTRIBUTE.version}])`,
  addressCountryId = `@@index([${ATTRIBUTE.addressCountryId}])`,
  birthCountryId = `@@index([${ATTRIBUTE.birthCountryId}])`,
  countryId = `@@index([${ATTRIBUTE.countryId}])`,
  genderId = `@@index([${ATTRIBUTE.genderId}])`,
  phoneCountryId = `@@index([${ATTRIBUTE.phoneCountryId}])`,
  typeMemberId = `@@index([${ATTRIBUTE.typeMemberId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
  INDEX,
};
