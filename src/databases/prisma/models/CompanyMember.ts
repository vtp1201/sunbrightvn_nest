import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_DATE_TIME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/CompanyMember';
import {
  createdTime,
  deleted,
  oneToMany,
  oneToOne,
  updatedTime,
} from '../mixins';
import {
  answer,
  businessActivity,
  changeRequest,
  company,
  companyInterest,
  companyMemberReference,
  companyOwnership,
  companyPosition,
  companyShare,
  country,
  email,
  fatca,
  file,
  gender,
  note,
  paymentInformation,
  processLog,
  task,
  token,
  typeMember,
} from '.';

export default createModel(MODEL_NAME.COMPANY_MEMBER, (CompanyMemberModel) => {
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
  const companyRelation = oneToOne({
    attribute: ATTRIBUTE.companyId,
    model: company,
    relation: RELATION.company,
  });
  const genderRelation = oneToOne({
    attribute: ATTRIBUTE.genderId,
    model: gender,
    relation: RELATION.gender,
    option: { optional: true },
  });
  const typeMemberRelation = oneToOne({
    attribute: ATTRIBUTE.typeMemberId,
    model: typeMember,
    relation: RELATION.typeMember,
    option: { optional: true },
  });
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: country,
    relation: RELATION.country,
    option: { optional: true },
  });
  const phoneCountryRelation = oneToOne({
    attribute: ATTRIBUTE.phoneCountryId,
    model: country,
    relation: RELATION.phoneCountry,
    option: { optional: true },
  });
  const birthCountryRelation = oneToOne({
    attribute: ATTRIBUTE.birthCountryId,
    model: country,
    relation: RELATION.birthCountry,
    option: { optional: true },
  });
  const addressCountryRelation = oneToOne({
    attribute: ATTRIBUTE.addressCountryId,
    model: country,
    relation: RELATION.addressCountry,
    option: { optional: true },
  });
  const answersRelation = oneToMany({
    model: answer,
    relation: RELATION.answers,
  });
  const changeRequestsRelation = oneToMany({
    model: changeRequest,
    relation: RELATION.changeRequests,
  });
  const companyInterestsRelation = oneToMany({
    model: companyInterest,
    relation: RELATION.companyInterests,
  });
  const companyCorporationInterestsRelation = oneToMany({
    model: companyInterest,
    relation: RELATION.companyCorporationInterests,
  });
  const businessActivitiesRelation = oneToMany({
    model: businessActivity,
    relation: RELATION.businessActivities,
  });
  const operationCountriesRelation = oneToMany({
    model: country,
    relation: RELATION.operationCountries,
  });
  const companyMemberReferencesRelation = oneToMany({
    model: companyMemberReference,
    relation: RELATION.companyMemberReferences,
  });
  const companyOwnershipsRelation = oneToMany({
    model: companyOwnership,
    relation: RELATION.companyOwnerships,
  });
  const companyCorporationOwnershipsRelation = oneToMany({
    model: companyOwnership,
    relation: RELATION.companyCorporationOwnerships,
  });
  const companyPositionsRelation = oneToMany({
    model: companyPosition,
    relation: RELATION.companyPositions,
  });
  const companyCorporationPositionsRelation = oneToMany({
    model: companyPosition,
    relation: RELATION.companyCorporationPositions,
  });
  const companySharesRelation = oneToMany({
    model: companyShare,
    relation: RELATION.companyShares,
  });
  const companyCorporationSharesRelation = oneToMany({
    model: companyShare,
    relation: RELATION.companyCorporationShares,
  });
  const emailsRelation = oneToMany({
    model: email,
    relation: RELATION.emails,
  });
  const fatcasRelation = oneToMany({
    model: fatca,
    relation: RELATION.fatcas,
  });
  const filesRelation = oneToMany({
    model: file,
    relation: RELATION.files,
  });
  const filesFilledRelation = oneToMany({
    model: file,
    relation: RELATION.filesFilled,
  });
  const notesRelation = oneToMany({
    model: note,
    relation: RELATION.notes,
  });
  const paymentsInformationRelation = oneToMany({
    model: paymentInformation,
    relation: RELATION.paymentsInformation,
  });
  const processLogsRelation = oneToMany({
    model: processLog,
    relation: RELATION.processLogs,
  });
  const processLogsBelongToCompanyMemberRelation = oneToMany({
    model: processLog,
    relation: RELATION.processLogsBelongToCompanyMember,
  });
  const tasksAppointedDirectorRelation = oneToMany({
    model: task,
    relation: RELATION.tasksAppointedDirector,
  });
  const tasksAppointedPresidentRelation = oneToMany({
    model: task,
    relation: RELATION.tasksAppointedPresident,
  });
  const tasksAppointedShareholderRelation = oneToMany({
    model: task,
    relation: RELATION.tasksAppointedShareholder,
  });
  const tasksAppointedUboRelation = oneToMany({
    model: task,
    relation: RELATION.tasksAppointedUbo,
  });
  const tokensRelation = oneToMany({
    model: token,
    relation: RELATION.tokens,
  });
  const tokensToCompanyMemberRelation = oneToMany({
    model: token,
    relation: RELATION.tokensToCompanyMember,
  });

  // defined Model
  process.nextTick(() => {
    CompanyMemberModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
      })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
        optional: true,
      })
      .int(ATTRIBUTE.parentId, {
        map: COLUMN.parentId,
        optional: true,
      })
      .int(ATTRIBUTE.typeMemberId, {
        map: COLUMN.typeMemberId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isNominee, {
        map: COLUMN.isNominee,
        default: false,
      })
      .boolean(ATTRIBUTE.isApproved, {
        map: COLUMN.isApproved,
        default: false,
      })
      .string(ATTRIBUTE.firstName, {
        map: COLUMN.firstName,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.middleName, {
        map: COLUMN.middleName,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.lastName, {
        map: COLUMN.lastName,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.fullName, {
        map: COLUMN.fullName,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.corporationName, {
        map: COLUMN.corporationName,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.corporationNumber, {
        map: COLUMN.corporationNumber,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .dateTime(ATTRIBUTE.corporationDate, {
        map: COLUMN.corporationDate,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .int(ATTRIBUTE.genderId, {
        map: COLUMN.genderId,
        optional: true,
      })
      .string(ATTRIBUTE.major, {
        map: COLUMN.major,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.phone, {
        map: COLUMN.phone,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.email, {
        map: COLUMN.email,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .dateTime(ATTRIBUTE.birthday, {
        map: COLUMN.birthday,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .int(ATTRIBUTE.birthCountryId, {
        map: COLUMN.birthCountryId,
        optional: true,
      })
      .string(ATTRIBUTE.address, {
        map: COLUMN.address,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.passport, {
        map: COLUMN.passport,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .dateTime(ATTRIBUTE.passportIssueDate, {
        map: COLUMN.passportIssueDate,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .dateTime(ATTRIBUTE.passportExpireDate, {
        map: COLUMN.passportExpireDate,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .string(ATTRIBUTE.ssn, {
        map: COLUMN.ssn,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.phoneCountryId, {
        map: COLUMN.phoneCountryId,
        optional: true,
      })
      .string(ATTRIBUTE.phoneNumber, {
        map: COLUMN.phoneNumber,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.assetSourceFundCastInBank, {
        map: COLUMN.assetSourceFundCastInBank,
        optional: true,
      })
      .int(ATTRIBUTE.assetSourceFundRealEstate, {
        map: COLUMN.assetSourceFundRealEstate,
        optional: true,
      })
      .string(ATTRIBUTE.assetSourceFundOtherDetail, {
        map: COLUMN.assetSourceFundOtherDetail,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.assetSourceFundOtherMoney, {
        map: COLUMN.assetSourceFundOtherMoney,
        optional: true,
      })
      .int(ATTRIBUTE.incomeSourceFundInvestment, {
        map: COLUMN.incomeSourceFundInvestment,
        optional: true,
      })
      .int(ATTRIBUTE.incomeSourceFundSelfEmployed, {
        map: COLUMN.incomeSourceFundSelfEmployed,
        optional: true,
      })
      .string(ATTRIBUTE.incomeSourceFundOtherDetail, {
        map: COLUMN.incomeSourceFundOtherDetail,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.incomeSourceFundOtherMoney, {
        map: COLUMN.incomeSourceFundOtherMoney,
        optional: true,
      })
      .string(ATTRIBUTE.businessActivityDetail, {
        map: COLUMN.businessActivityDetail,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.serviceAddress, {
        map: COLUMN.serviceAddress,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.operationAddress, {
        map: COLUMN.operationAddress,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.natureBusiness, {
        map: COLUMN.natureBusiness,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.relationshipIntendedCompany, {
        map: COLUMN.relationshipIntendedCompany,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.city, {
        map: COLUMN.city,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.state, {
        map: COLUMN.state,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.postalCode, {
        map: COLUMN.postalCode,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.addressCountryId, {
        map: COLUMN.addressCountryId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(companyRelation)
      .mixin(genderRelation)
      .mixin(typeMemberRelation)
      .mixin(countryRelation)
      .mixin(phoneCountryRelation)
      .mixin(birthCountryRelation)
      .mixin(addressCountryRelation)
      .mixin(answersRelation)
      .mixin(changeRequestsRelation)
      .mixin(companyInterestsRelation)
      .mixin(companyCorporationInterestsRelation)
      .mixin(businessActivitiesRelation)
      .mixin(operationCountriesRelation)
      .mixin(companyMemberReferencesRelation)
      .mixin(companyOwnershipsRelation)
      .mixin(companyCorporationOwnershipsRelation)
      .mixin(companyPositionsRelation)
      .mixin(companyCorporationPositionsRelation)
      .mixin(companySharesRelation)
      .mixin(companyCorporationSharesRelation)
      .mixin(emailsRelation)
      .mixin(fatcasRelation)
      .mixin(filesRelation)
      .mixin(filesFilledRelation)
      .mixin(notesRelation)
      .mixin(paymentsInformationRelation)
      .mixin(processLogsRelation)
      .mixin(processLogsBelongToCompanyMemberRelation)
      .mixin(tasksAppointedDirectorRelation)
      .mixin(tasksAppointedPresidentRelation)
      .mixin(tasksAppointedShareholderRelation)
      .mixin(tasksAppointedUboRelation)
      .mixin(tokensRelation)
      .mixin(tokensToCompanyMemberRelation)

      // table name
      .map(TABLE_NAME.COMPANY_MEMBER);
  });
});
