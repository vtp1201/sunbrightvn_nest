import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  companyId = 'companyId',
  countryId = 'countryId',
  typeMemberId = 'typeMemberId',
  parentId = 'parentId',
  isNominee = 'isNominee',
  isApproved = 'isApproved',
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
  businessActivityDetail = 'businessActivityDetail',
  serviceAddress = 'serviceAddress',
  operationAddress = 'operationAddress',
  natureBusiness = 'natureBusiness',
  relationshipIntendedCompany = 'relationshipIntendedCompany',
  city = 'city',
  state = 'state',
  postalCode = 'postalCode',
  addressCountryId = 'addressCountryId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  companyId = 'company_id',
  countryId = 'country_id',
  typeMemberId = 'type_member_id',
  firstName = 'first_name',
  lastName = 'last_name',
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
  businessActivityDetail = 'business_activity_detail',
  parentId = 'parent_id',
  serviceAddress = 'service_address',
  operationAddress = 'operation_address',
  natureBusiness = 'nature_business',
  relationshipIntendedCompany = 'relationship_intended_company',
  city = 'city',
  state = 'state',
  postalCode = 'postal_code',
  addressCountryId = 'address_country_id',
  middleName = 'middle_name',
  fullName = 'full_name',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  answers = RELATION_DEFAULT.answers,
  company = RELATION_DEFAULT.company,
  country = RELATION_DEFAULT.country,
  typeMember = RELATION_DEFAULT.typeMember,
  gender = RELATION_DEFAULT.gender,
  // birthCountry = RELATION_DEFAULT.birthCountry,
  phoneCountry = RELATION_DEFAULT.phoneCountry,
  // addressCountry = RELATION_DEFAULT.addressCountry,
  // parent = RELATION_DEFAULT.parent,
}

export default {
  ATTRIBUTE,
  RELATION,
};
