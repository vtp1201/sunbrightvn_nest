import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import {
  actionProcessStep,
  agent,
  answer,
  bank,
  bankHasCountry,
  bankingProcess,
  billing,
  businessActivity,
  businessActivityIndustry,
  company,
  companyMember,
  companyMemberReferences,
  companySuffix,
  continent,
  countryHasEntityType,
  countryHasService,
  customer,
  declarationTax,
  fatca,
  fileTemplateHasNationality,
  grantScheme,
  grantTypeAttribute,
  historyCompany,
  historyCompanyMember,
  holiday,
  order,
  Package,
  person,
  question,
  syslog,
  target,
  task,
  visaVietnamArrival,
} from './';

export class country {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsDefined()
  @IsString()
  guid!: string;

  @IsOptional()
  @IsString()
  countryCode?: string;

  @IsOptional()
  @IsString()
  phoneCode?: string;

  @IsDefined()
  @IsString()
  subName!: string;

  @IsDefined()
  @IsBoolean()
  isRestricted!: boolean;

  @IsDefined()
  @IsBoolean()
  isCountry!: boolean;

  @IsOptional()
  @IsInt()
  continentId?: number;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  actionProcessSteps!: actionProcessStep[];

  @IsDefined()
  agents!: agent[];

  @IsDefined()
  answers!: answer[];

  @IsDefined()
  banks!: bank[];

  @IsDefined()
  bankHasCountries!: bankHasCountry[];

  @IsDefined()
  bankingProcesses!: bankingProcess[];

  @IsDefined()
  billings!: billing[];

  @IsDefined()
  phoneBillings!: billing[];

  @IsDefined()
  businessActivities!: businessActivity[];

  @IsDefined()
  businessActivityIndustries!: businessActivityIndustry[];

  @IsDefined()
  businessCountryForCompanies!: company[];

  @IsDefined()
  countryForCompanies!: company[];

  @IsDefined()
  companies!: company[];

  @IsDefined()
  operatingCountryForCompanies!: company[];

  @IsDefined()
  birthCountryForCompanyMembers!: companyMember[];

  @IsDefined()
  addressCountryForCompanyMembers!: companyMember[];

  @IsDefined()
  countryForCompanyMembers!: companyMember[];

  @IsDefined()
  phoneCountryForCompanyMembers!: companyMember[];

  @IsDefined()
  companyMembers!: companyMember[];

  @IsDefined()
  companyMemberReferences!: companyMemberReferences[];

  @IsOptional()
  continent?: continent;

  @IsDefined()
  companySuffixes!: companySuffix[];

  @IsDefined()
  countryHasEntityTypes!: countryHasEntityType[];

  @IsDefined()
  questions!: question[];

  @IsDefined()
  countryHasServices!: countryHasService[];

  @IsDefined()
  phoneCountryForCustomers!: customer[];

  @IsDefined()
  countryForCustomers!: customer[];

  @IsDefined()
  companyCountryForCustomers!: customer[];

  @IsDefined()
  companyAddressCountryForCustomers!: customer[];

  @IsDefined()
  declarationTaxes!: declarationTax[];

  @IsDefined()
  holderCountryForFatcas!: fatca[];

  @IsDefined()
  mailingCountryForFatcas!: fatca[];

  @IsDefined()
  residentCountryForFatcas!: fatca[];

  @IsDefined()
  fileTemplateHasNationalities!: fileTemplateHasNationality[];

  @IsDefined()
  grantSchemes!: grantScheme[];

  @IsDefined()
  grantTypeAttributes!: grantTypeAttribute[];

  @IsDefined()
  birthCountryForHistoryCompanyMembers!: historyCompanyMember[];

  @IsDefined()
  addressCountryForHistoryCompanyMembers!: historyCompanyMember[];

  @IsDefined()
  countryForHistoryCompanyMembers!: historyCompanyMember[];

  @IsDefined()
  phoneCountryForHistoryCompanyMembers!: historyCompanyMember[];

  @IsDefined()
  businessCountryForHistoryCompanies!: historyCompany[];

  @IsDefined()
  operatingCountryForHistoryCompanies!: historyCompany[];

  @IsDefined()
  countryForHistoryCompanies!: historyCompany[];

  @IsDefined()
  contactPhoneCountryForHistoryCompanies!: historyCompany[];

  @IsDefined()
  holidays!: holiday[];

  @IsDefined()
  orders!: order[];

  @IsDefined()
  packages!: Package[];

  @IsDefined()
  phoneCountryForPersons!: person[];

  @IsDefined()
  countryForPersons!: person[];

  @IsDefined()
  syslogs!: syslog[];

  @IsDefined()
  countryForTasks!: task[];

  @IsDefined()
  incorporationCountryForTasks!: task[];

  @IsDefined()
  phoneCountryForTasks!: task[];

  @IsDefined()
  targets!: target[];

  @IsDefined()
  visaVietnamArrivals!: visaVietnamArrival[];
}
