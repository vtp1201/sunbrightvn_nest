import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  guid = 'guid',
  countryCode = 'countryCode',
  phoneCode = 'phoneCode',
  isRestricted = 'isRestricted',
  subName = 'subName',
  isCountry = 'isCountry',
  left = 'left',
  right = 'right',
  continentId = 'continentId',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  guid = 'guid',
  countryCode = 'country_code',
  phoneCode = 'phone_code',
  isRestricted = 'is_restricted',
  subName = 'sub_name',
  isCountry = 'is_country',
  left = 'left',
  right = 'right',
  continentId = 'continent_id',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  actionProcessSteps = RELATION_DEFAULT.actionProcessSteps,
  agents = RELATION_DEFAULT.agents,
  answers = RELATION_DEFAULT.answers,
  banks = RELATION_DEFAULT.banks,
  bankHasCountries = RELATION_DEFAULT.bankHasCountries,
  bankingProcesses = RELATION_DEFAULT.bankingProcesses,
  billings = RELATION_DEFAULT.billings,
  phoneBillings = RELATION_DEFAULT.phoneBillings,
  businessActivities = RELATION_DEFAULT.businessActivities,
  businessActivityIndustries = RELATION_DEFAULT.businessActivityIndustries,
  businessCountryForCompanies = RELATION_DEFAULT.businessCountryForCompanies,
  countryForCompanies = RELATION_DEFAULT.countryForCompanies,
  companies = RELATION_DEFAULT.companies,
  operatingCountryForCompanies = RELATION_DEFAULT.operatingCountryForCompanies,
  birthCountryForCompanyMembers = RELATION_DEFAULT.birthCountryForCompanyMembers,
  addressCountryForCompanyMembers = RELATION_DEFAULT.addressCountryForCompanyMembers,
  countryForCompanyMembers = RELATION_DEFAULT.countryForCompanyMembers,
  phoneCountryForCompanyMembers = RELATION_DEFAULT.phoneCountryForCompanyMembers,
  companyMembers = RELATION_DEFAULT.companyMembers,
  companyMemberReferences = RELATION_DEFAULT.companyMemberReferences,
  continent = RELATION_DEFAULT.continent,
  companySuffixes = RELATION_DEFAULT.companySuffixes,
  countryHasEntityTypes = RELATION_DEFAULT.countryHasEntityTypes,
  questions = RELATION_DEFAULT.questions,
  countryHasServices = RELATION_DEFAULT.countryHasServices,
  countryForCustomers = RELATION_DEFAULT.countryForCustomers,
  phoneCountryForCustomers = RELATION_DEFAULT.phoneCountryForCustomers,
  companyCountryForCustomers = RELATION_DEFAULT.companyCountryForCustomers,
  companyAddressCountryForCustomers = RELATION_DEFAULT.companyAddressCountryForCustomers,
  declarationTaxes = RELATION_DEFAULT.declarationTaxes,
  holderCountryForFatcas = RELATION_DEFAULT.holderCountryForFatcas,
  mailingCountryForFatcas = RELATION_DEFAULT.mailingCountryForFatcas,
  residentCountryForFatcas = RELATION_DEFAULT.residentCountryForFatcas,
  fileTemplateHasNationalities = RELATION_DEFAULT.fileTemplateHasNationalities,
  grantSchemes = RELATION_DEFAULT.grantSchemes,
  grantTypeAttributes = RELATION_DEFAULT.grantTypeAttributes,
  businessCountryForHistoryCompanies = RELATION_DEFAULT.businessCountryForHistoryCompanies,
  operatingCountryForHistoryCompanies = RELATION_DEFAULT.operatingCountryForHistoryCompanies,
  countryForHistoryCompanies = RELATION_DEFAULT.countryForHistoryCompanies,
  contactPhoneCountryForHistoryCompanies = RELATION_DEFAULT.contactPhoneCountryForHistoryCompanies,
  birthCountryForHistoryCompanyMembers = RELATION_DEFAULT.birthCountryForHistoryCompanyMembers,
  addressCountryForHistoryCompanyMembers = RELATION_DEFAULT.addressCountryForHistoryCompanyMembers,
  countryForHistoryCompanyMembers = RELATION_DEFAULT.countryForHistoryCompanyMembers,
  phoneCountryForHistoryCompanyMembers = RELATION_DEFAULT.phoneCountryForHistoryCompanyMembers,
  holidays = RELATION_DEFAULT.holidays,
  orders = RELATION_DEFAULT.orders,
  packages = RELATION_DEFAULT.packages,
  phoneCountryForPersons = RELATION_DEFAULT.phoneCountryForPersons,
  countryForPersons = RELATION_DEFAULT.countryForPersons,
  syslogs = RELATION_DEFAULT.syslogs,
  countryForTasks = RELATION_DEFAULT.countryForTasks,
  incorporationCountryForTasks = RELATION_DEFAULT.incorporationCountryForTasks,
  phoneCountryForTasks = RELATION_DEFAULT.phoneCountryForTasks,
  targets = RELATION_DEFAULT.targets,
  visaVietnamArrivals = RELATION_DEFAULT.visaVietnamArrivals,
}

const tableName = TABLE_NAME.COUNTRY;
export enum INDEX_NAME {
  continentId = `"${tableName}_${COLUMN.continentId}_fkey"`,
}

export enum INDEX {
  continentId = `@@index([${ATTRIBUTE.continentId}], map: ${INDEX_NAME.continentId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
