import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING, RAW_DATE_TIME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/Company';
import {
  createdTime,
  deleted,
  oneToMany,
  oneToOne,
  updatedTime,
} from '../mixins';
import {
  answer,
  billing,
  businessActivity,
  changeRequest,
  companyEvent,
  companyInterest,
  companyMember,
  companyOwnership,
  companyShare,
  companyStatus,
  companySuffix,
  country,
  currency,
  email,
  entityType,
  file,
  historyLogCDC,
  note,
  order,
  proposedName,
  task,
} from '.';

export default createModel(MODEL_NAME.COMPANY, (CompanyModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });
  const initUpdatedTime = updatedTime({
    attribute: ATTRIBUTE.updatedTime,
    column: COLUMN.updatedTime,
  });
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

  // defined Relations
  const answersRelation = oneToMany({
    model: answer,
    relation: RELATION.answers,
  });
  const changeRequestsRelation = oneToMany({
    model: changeRequest,
    relation: RELATION.changeRequests,
  });
  const billingRelation = oneToOne({
    attribute: ATTRIBUTE.billingId,
    model: billing,
    relation: RELATION.billing,
    option: { optional: true },
  });
  const companyStatusRelation = oneToOne({
    attribute: ATTRIBUTE.companyStatusId,
    model: companyStatus,
    relation: RELATION.companyStatus,
    option: { optional: true },
  });
  const companySuffixRelation = oneToOne({
    attribute: ATTRIBUTE.companySuffixId,
    model: companySuffix,
    relation: RELATION.companySuffix,
    option: { optional: true },
  });
  const businessCountryRelation = oneToOne({
    attribute: ATTRIBUTE.businessCountryId,
    model: country,
    relation: RELATION.businessCountry,
    option: { optional: true },
  });
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: country,
    relation: RELATION.country,
    option: { optional: true },
  });
  const entityTypeRelation = oneToOne({
    attribute: ATTRIBUTE.entityTypeId,
    model: entityType,
    relation: RELATION.entityType,
    option: { optional: true },
  });
  const operatingCountryRelation = oneToOne({
    attribute: ATTRIBUTE.operatingCountryId,
    model: country,
    relation: RELATION.operatingCountry,
    option: { optional: true },
  });
  const companyEventsRelation = oneToMany({
    model: companyEvent,
    relation: RELATION.companyEvents,
  });
  const businessActivitiesRelation = oneToMany({
    model: businessActivity,
    relation: RELATION.businessActivities,
  });
  const currenciesRelation = oneToMany({
    model: currency,
    relation: RELATION.currencies,
  });
  const operationCountriesRelation = oneToMany({
    model: country,
    relation: RELATION.operationCountries,
  });
  const companyInterestsRelation = oneToMany({
    model: companyInterest,
    relation: RELATION.companyInterests,
  });
  const companyMembersRelation = oneToMany({
    model: companyMember,
    relation: RELATION.companyMembers,
  });
  const companyOwnershipsRelation = oneToMany({
    model: companyOwnership,
    relation: RELATION.companyOwnerships,
  });
  const companySharesRelation = oneToMany({
    model: companyShare,
    relation: RELATION.companyShares,
  });
  const emailsRelation = oneToMany({
    model: email,
    relation: RELATION.emails,
  });
  const filesRelation = oneToMany({
    model: file,
    relation: RELATION.files,
  });
  const historiesLogCdcRelation = oneToMany({
    model: historyLogCDC,
    relation: RELATION.historiesLogCdc,
  });
  const notesRelation = oneToMany({
    model: note,
    relation: RELATION.notes,
  });
  const ordersRelation = oneToMany({
    model: order,
    relation: RELATION.orders,
  });
  const proposedNamesRelation = oneToMany({
    model: proposedName,
    relation: RELATION.proposedNames,
  });
  const tasksRelation = oneToMany({
    model: task,
    relation: RELATION.tasks,
  });

  // defined Model
  process.nextTick(() => {
    CompanyModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.version, {
        map: COLUMN.version,
        default: 0,
      })
      .string(ATTRIBUTE.companyCode, {
        map: COLUMN.companyCode,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
        optional: true,
      })
      .string(ATTRIBUTE.companyRegNo, {
        map: COLUMN.companyRegNo,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.companyStatusId, {
        map: COLUMN.companyStatusId,
        optional: true,
      })
      .int(ATTRIBUTE.entityTypeId, {
        map: COLUMN.entityTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.companySuffixId, {
        map: COLUMN.companySuffixId,
        optional: true,
      })
      .string(ATTRIBUTE.preventiveName, {
        map: COLUMN.preventiveName,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.address, {
        map: COLUMN.address,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.tax, {
        map: COLUMN.tax,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.tin, {
        map: COLUMN.tin,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.note, {
        map: COLUMN.note,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .dateTime(ATTRIBUTE.incorporationDate, {
        map: COLUMN.incorporationDate,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .string(ATTRIBUTE.xeroContactId, {
        map: COLUMN.xeroContactId,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.businessActivity, {
        map: COLUMN.businessActivity,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .boolean(ATTRIBUTE.isOutsideCompany, {
        map: COLUMN.isOutsideCompany,
        default: false,
      })
      .dateTime(ATTRIBUTE.renewalDate, {
        map: COLUMN.renewalDate,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .int(ATTRIBUTE.billingId, {
        map: COLUMN.billingId,
        optional: true,
      })
      .string(ATTRIBUTE.contactFullName, {
        map: COLUMN.contactFullName,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.contactPhone, {
        map: COLUMN.contactPhone,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.contactEmail, {
        map: COLUMN.contactEmail,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.contactAddress, {
        map: COLUMN.contactAddress,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.tinCode, {
        map: COLUMN.tinCode,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.pinCode, {
        map: COLUMN.pinCode,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.contactPhoneCountryId, {
        map: COLUMN.contactPhoneCountryId,
        optional: true,
      })
      .string(ATTRIBUTE.contactPhoneNumber, {
        map: COLUMN.contactPhoneNumber,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.contactState, {
        map: COLUMN.contactState,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.contactCity, {
        map: COLUMN.contactCity,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.contactPostalCode, {
        map: COLUMN.contactPostalCode,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.operatingCountryId, {
        map: COLUMN.operatingCountryId,
        optional: true,
      })
      .string(ATTRIBUTE.operatingCity, {
        map: COLUMN.operatingCity,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .string(ATTRIBUTE.operatingState, {
        map: COLUMN.operatingState,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .string(ATTRIBUTE.operatingPostalCode, {
        map: COLUMN.operatingPostalCode,
        raw: RAW_STRING.LENGTH_20,
        optional: true,
      })
      .string(ATTRIBUTE.sourceFund, {
        map: COLUMN.sourceFund,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.businessFullName, {
        map: COLUMN.businessFullName,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .string(ATTRIBUTE.businessAddress, {
        map: COLUMN.businessAddress,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .int(ATTRIBUTE.businessCountryId, {
        map: COLUMN.businessCountryId,
        optional: true,
      })
      .string(ATTRIBUTE.businessCity, {
        map: COLUMN.businessCity,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .string(ATTRIBUTE.businessState, {
        map: COLUMN.businessState,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .string(ATTRIBUTE.businessPostalCode, {
        map: COLUMN.businessPostalCode,
        raw: RAW_STRING.LENGTH_20,
        optional: true,
      })
      .int(ATTRIBUTE.businessDayEnd, {
        map: COLUMN.businessDayEnd,
        optional: true,
      })
      .int(ATTRIBUTE.businessMonthEnd, {
        map: COLUMN.businessMonthEnd,
        optional: true,
      })
      .int(ATTRIBUTE.shareCapitalParValue, {
        map: COLUMN.shareCapitalParValue,
        optional: true,
      })
      .int(ATTRIBUTE.shareCapitalTypeOfShare, {
        map: COLUMN.shareCapitalTypeOfShare,
        optional: true,
      })
      .int(ATTRIBUTE.shareCapitalNumberShare, {
        map: COLUMN.shareCapitalNumberShare,
        optional: true,
      })
      .int(ATTRIBUTE.shareCapital, {
        map: COLUMN.shareCapital,
        optional: true,
      })
      .string(ATTRIBUTE.shareCapitalClassOfShare, {
        map: COLUMN.shareCapitalClassOfShare,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.issuedNumberShare, {
        map: COLUMN.issuedNumberShare,
        optional: true,
      })
      .int(ATTRIBUTE.remainingNumberShare, {
        map: COLUMN.remainingNumberShare,
        optional: true,
      })
      .int(ATTRIBUTE.articlesOfOrganization, {
        map: COLUMN.articlesOfOrganization,
        optional: true,
      })
      .string(ATTRIBUTE.recordNumber, {
        map: COLUMN.recordNumber,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.numOfCheckingBank, {
        map: COLUMN.numOfCheckingBank,
        optional: true,
      })
      .string(ATTRIBUTE.businessAnnualReport, {
        map: COLUMN.businessAnnualReport,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.sealImage, {
        map: COLUMN.sealImage,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.leftCheckingBank, {
        map: COLUMN.leftCheckingBank,
        optional: true,
      })
      .int(ATTRIBUTE.businessActivityDetail, {
        map: COLUMN.businessActivityDetail,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(answersRelation)
      .mixin(changeRequestsRelation)
      .mixin(billingRelation)
      .mixin(companyStatusRelation)
      .mixin(companySuffixRelation)
      .mixin(businessCountryRelation)
      .mixin(countryRelation)
      .mixin(entityTypeRelation)
      .mixin(operatingCountryRelation)
      .mixin(companyEventsRelation)
      .mixin(businessActivitiesRelation)
      .mixin(currenciesRelation)
      .mixin(operationCountriesRelation)
      .mixin(companyInterestsRelation)
      .mixin(companyMembersRelation)
      .mixin(companyOwnershipsRelation)
      .mixin(companySharesRelation)
      .mixin(emailsRelation)
      .mixin(filesRelation)
      .mixin(historiesLogCdcRelation)
      .mixin(notesRelation)
      .mixin(ordersRelation)
      .mixin(proposedNamesRelation)
      .mixin(tasksRelation)

      // table name
      .map(TABLE_NAME.COMPANY);
  });
});
