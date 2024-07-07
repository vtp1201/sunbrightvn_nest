import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/Country';
import { deleted, oneToMany, oneToOne } from '../mixins';
import {
  Package,
  actionProcessStep,
  agent,
  answer,
  bank,
  bankHasCountry,
  bankingProcess,
  billing,
  businessActivity,
  company,
  companyMember,
  companyMemberReference,
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
  historyCompanyMember,
  holiday,
  order,
  person,
  question,
  syslog,
  task,
  visaVietnamArrival,
} from '.';

export default createModel(MODEL_NAME.COUNTRY, (CountryModel) => {
  const initDeleted = deleted(
    {
      attribute: ATTRIBUTE.deletedTime,
      column: COLUMN.deletedTime,
    },
    {
      attribute: ATTRIBUTE.isDeleted,
      column: COLUMN.isDeleted,
    },
  );

  // relations defined
  const actionProcessStepsRelation = oneToMany({
    model: actionProcessStep,
    relation: RELATION.actionProcessSteps,
  });
  const agentsRelation = oneToMany({
    model: agent,
    relation: RELATION.agents,
  });
  const answersRelation = oneToMany({
    model: answer,
    relation: RELATION.answers,
  });
  const banksRelation = oneToMany({
    model: bank,
    relation: RELATION.banks,
  });
  const bankHasCountriesRelation = oneToMany({
    model: bankHasCountry,
    relation: RELATION.bankHasCountries,
  });
  const bankingProcessesRelation = oneToMany({
    model: bankingProcess,
    relation: RELATION.bankingProcesses,
  });
  const billingsRelation = oneToMany({
    model: billing,
    relation: RELATION.billings,
  });
  const phoneBillingsRelation = oneToMany({
    model: billing,
    relation: RELATION.phoneBillings,
  });
  const businessActivitiesRelation = oneToMany({
    model: businessActivity,
    relation: RELATION.businessActivities,
  });
  const businessCountryForCompaniesRelation = oneToMany({
    model: company,
    relation: RELATION.businessCountryForCompanies,
  });
  const companiesRelation = oneToMany({
    model: company,
    relation: RELATION.companies,
  });
  const operatingCountryForCompaniesRelation = oneToMany({
    model: company,
    relation: RELATION.operatingCountryForCompanies,
  });
  const birthCountryForCompanyMembersRelation = oneToMany({
    model: companyMember,
    relation: RELATION.birthCountryForCompanyMembers,
  });
  const addressCountryForCompanyMembersRelation = oneToMany({
    model: companyMember,
    relation: RELATION.addressCountryForCompanyMembers,
  });
  const countryForCompanyMembersRelation = oneToMany({
    model: companyMember,
    relation: RELATION.countryForCompanyMembers,
  });
  const phoneCountryForCompanyMembersRelation = oneToMany({
    model: companyMember,
    relation: RELATION.phoneCountryForCompanyMembers,
  });
  const operatingCountryForCompanyMembersRelation = oneToMany({
    model: companyMember,
    relation: RELATION.operatingCountryForCompanyMembers,
  });
  const companyMemberReferencesRelation = oneToMany({
    model: companyMemberReference,
    relation: RELATION.companyMemberReferences,
  });
  const continentRelation = oneToOne({
    attribute: ATTRIBUTE.continentId,
    model: continent,
    relation: RELATION.continent,
    option: { optional: true },
  });
  const companySuffixesRelation = oneToMany({
    model: companySuffix,
    relation: RELATION.companySuffixes,
  });
  const countryHasEntityTypesRelation = oneToMany({
    model: countryHasEntityType,
    relation: RELATION.countryHasEntityTypes,
  });
  const questionsRelation = oneToMany({
    model: question,
    relation: RELATION.questions,
  });
  const countryHasServicesRelation = oneToMany({
    model: countryHasService,
    relation: RELATION.countryHasServices,
  });
  const phoneCountryForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.phoneCountryForCustomers,
  });
  const countryForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.countryForCustomers,
  });
  const companyCountryForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.companyCountryForCustomers,
  });
  const declarationTaxesRelation = oneToMany({
    model: declarationTax,
    relation: RELATION.declarationTaxes,
  });
  const holderCountryForFatcasRelation = oneToMany({
    model: fatca,
    relation: RELATION.holderCountryForFatcas,
  });
  const mailingCountryForFatcasRelation = oneToMany({
    model: fatca,
    relation: RELATION.mailingCountryForFatcas,
  });
  const residentCountryForFatcasRelation = oneToMany({
    model: fatca,
    relation: RELATION.residentCountryForFatcas,
  });
  const fileTemplateHasNationalitiesRelation = oneToMany({
    model: fileTemplateHasNationality,
    relation: RELATION.fileTemplateHasNationalities,
  });
  const grantSchemesRelation = oneToMany({
    model: grantScheme,
    relation: RELATION.grantSchemes,
  });
  const grantTypeAttributesRelation = oneToMany({
    model: grantTypeAttribute,
    relation: RELATION.grantTypeAttributes,
  });
  const birthCountryForHistoryCompanyMembersRelation = oneToMany({
    model: historyCompanyMember,
    relation: RELATION.birthCountryForHistoryCompanyMembers,
  });
  const addressCountryForHistoryCompanyMembersRelation = oneToMany({
    model: historyCompanyMember,
    relation: RELATION.addressCountryForHistoryCompanyMembers,
  });
  const countryForHistoryCompanyMembersRelation = oneToMany({
    model: historyCompanyMember,
    relation: RELATION.countryForHistoryCompanyMembers,
  });
  const phoneCountryForHistoryCompanyMembersRelation = oneToMany({
    model: historyCompanyMember,
    relation: RELATION.phoneCountryForHistoryCompanyMembers,
  });
  const holidaysRelation = oneToMany({
    model: holiday,
    relation: RELATION.holidays,
  });
  const ordersRelation = oneToMany({
    model: order,
    relation: RELATION.orders,
  });
  const packagesRelation = oneToMany({
    model: Package,
    relation: RELATION.packages,
  });
  const phoneCountryForPersonsRelation = oneToMany({
    model: person,
    relation: RELATION.phoneCountryForPersons,
  });
  const countryForPersonsRelation = oneToMany({
    model: person,
    relation: RELATION.countryForPersons,
  });
  const syslogsRelation = oneToMany({
    model: syslog,
    relation: RELATION.syslogs,
  });
  const countryForTasksRelation = oneToMany({
    model: task,
    relation: RELATION.countryForTasks,
  });
  const incorporationCountryForTasksRelation = oneToMany({
    model: task,
    relation: RELATION.incorporationCountryForTasks,
  });
  const phoneCountryForTasksRelation = oneToMany({
    model: task,
    relation: RELATION.phoneCountryForTasks,
  });
  const visaVietnamArrivalsRelation = oneToMany({
    model: visaVietnamArrival,
    relation: RELATION.visaVietnamArrivals,
  });

  // defined Model
  process.nextTick(() => {
    CountryModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_45,
      })
      .string(ATTRIBUTE.guid, {
        map: COLUMN.guid,
        raw: RAW_STRING.LENGTH_100,
        unique: true,
      })
      .string(ATTRIBUTE.countryCode, {
        map: COLUMN.countryCode,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.phoneCode, {
        map: COLUMN.phoneCode,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.subName, {
        map: COLUMN.subName,
        raw: RAW_STRING.LENGTH_255,
      })
      .boolean(ATTRIBUTE.isRestricted, {
        map: COLUMN.isRestricted,
        default: false,
      })
      .boolean(ATTRIBUTE.isCountry, {
        map: COLUMN.isCountry,
        default: false,
      })
      .int(ATTRIBUTE.continentId, {
        map: COLUMN.continentId,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(actionProcessStepsRelation)
      .mixin(agentsRelation)
      .mixin(answersRelation)
      .mixin(banksRelation)
      .mixin(bankHasCountriesRelation)
      .mixin(bankingProcessesRelation)
      .mixin(billingsRelation)
      .mixin(phoneBillingsRelation)
      .mixin(businessActivitiesRelation)
      .mixin(businessCountryForCompaniesRelation)
      .mixin(companiesRelation)
      .mixin(operatingCountryForCompaniesRelation)
      .mixin(birthCountryForCompanyMembersRelation)
      .mixin(addressCountryForCompanyMembersRelation)
      .mixin(countryForCompanyMembersRelation)
      .mixin(phoneCountryForCompanyMembersRelation)
      .mixin(operatingCountryForCompanyMembersRelation)
      .mixin(companyMemberReferencesRelation)
      .mixin(continentRelation)
      .mixin(companySuffixesRelation)
      .mixin(countryHasEntityTypesRelation)
      .mixin(questionsRelation)
      .mixin(countryHasServicesRelation)
      .mixin(phoneCountryForCustomersRelation)
      .mixin(countryForCustomersRelation)
      .mixin(companyCountryForCustomersRelation)
      .mixin(declarationTaxesRelation)
      .mixin(holderCountryForFatcasRelation)
      .mixin(mailingCountryForFatcasRelation)
      .mixin(residentCountryForFatcasRelation)
      .mixin(fileTemplateHasNationalitiesRelation)
      .mixin(grantSchemesRelation)
      .mixin(grantTypeAttributesRelation)
      .mixin(birthCountryForHistoryCompanyMembersRelation)
      .mixin(addressCountryForHistoryCompanyMembersRelation)
      .mixin(countryForHistoryCompanyMembersRelation)
      .mixin(phoneCountryForHistoryCompanyMembersRelation)
      .mixin(holidaysRelation)
      .mixin(ordersRelation)
      .mixin(packagesRelation)
      .mixin(phoneCountryForPersonsRelation)
      .mixin(countryForPersonsRelation)
      .mixin(syslogsRelation)
      .mixin(countryForTasksRelation)
      .mixin(incorporationCountryForTasksRelation)
      .mixin(phoneCountryForTasksRelation)
      .mixin(visaVietnamArrivalsRelation)

      // table name
      .map(TABLE_NAME.COUNTRY);
  });
});
