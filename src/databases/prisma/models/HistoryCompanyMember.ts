import { createModel } from 'schemix';

import { country, gender, typeMember } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_DATE_TIME, RAW_STRING, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
  INDEX_NAME,
  RELATION,
} from '../utils/enums/HistoryCompanyMember';

export default createModel(MODEL_NAME.HISTORY_COMPANY_MEMBER, (HistoryCompanyMemberModel) => {
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
  const genderRelation = oneToOne({
    attribute: ATTRIBUTE.genderId,
    map: INDEX_NAME.genderId,
    model: gender,
    relation: RELATION.gender,
    option: { optional: true },
  });
  const typeMemberRelation = oneToOne({
    attribute: ATTRIBUTE.typeMemberId,
    map: INDEX_NAME.typeMemberId,
    model: typeMember,
    relation: RELATION.typeMember,
    option: { optional: true },
  });
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    map: INDEX_NAME.countryId,
    model: country,
    relation: RELATION.country,
    isNeedName: true,
    option: { optional: true },
  });
  const phoneCountryRelation = oneToOne({
    attribute: ATTRIBUTE.phoneCountryId,
    map: INDEX_NAME.phoneCountryId,
    model: country,
    relation: RELATION.phoneCountry,
    isNeedName: true,
    option: { optional: true },
  });
  const birthCountryRelation = oneToOne({
    attribute: ATTRIBUTE.birthCountryId,
    map: INDEX_NAME.birthCountryId,
    model: country,
    relation: RELATION.birthCountry,
    isNeedName: true,
    option: { optional: true },
  });
  const addressCountryRelation = oneToOne({
    attribute: ATTRIBUTE.addressCountryId,
    map: INDEX_NAME.addressCountryId,
    model: country,
    relation: RELATION.addressCountry,
    isNeedName: true,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
    HistoryCompanyMemberModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.version, {
        map: COLUMN.version,
        default: 1,
      })
      .int(ATTRIBUTE.taskId, {
        map: COLUMN.taskId,
      })
      .int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
      })
      .int(ATTRIBUTE.companyMemberId, {
        map: COLUMN.companyMemberId,
      })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
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
      .json(ATTRIBUTE.companyPositions, {
        map: COLUMN.companyPositions,
        optional: true,
      })
      .json(ATTRIBUTE.companyShares, {
        map: COLUMN.companyShares,
        optional: true,
      })
      .json(ATTRIBUTE.companyInterests, {
        map: COLUMN.companyInterests,
        optional: true,
      })
      .json(ATTRIBUTE.companyOwnerships, {
        map: COLUMN.companyOwnerships,
        optional: true,
      })
      .json(ATTRIBUTE.files, {
        map: COLUMN.files,
        optional: true,
      })
      .json(ATTRIBUTE.companyMemberReferences, {
        map: COLUMN.companyMemberReferences,
        optional: true,
      })
      .json(ATTRIBUTE.businessActivities, {
        map: COLUMN.businessActivities,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(countryRelation)
      .mixin(typeMemberRelation)
      .mixin(genderRelation)
      .mixin(birthCountryRelation)
      .mixin(phoneCountryRelation)
      .mixin(addressCountryRelation)

      // Indexes
      .raw(INDEX.addressCountryId)
      .raw(INDEX.birthCountryId)
      .raw(INDEX.countryId)
      .raw(INDEX.genderId)
      .raw(INDEX.phoneCountryId)
      .raw(INDEX.typeMemberId)
      .raw(INDEX.uniqueTaskCompanyMemberVersion)

      // table name
      .map(TABLE_NAME.HISTORY_COMPANY_MEMBER);
  });
});
