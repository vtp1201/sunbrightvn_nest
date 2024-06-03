import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_DATE_TIME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CompanyMember';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.COMPANY_MEMBER, (CompanyMemberModel) => {
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
    .int(ATTRIBUTE.companyId, {
      map: COLUMN.companyId,
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
    .mixin(createdTime)
    .mixin(updatedTime)
    .mixin(deleted)

    // table name
    .map(TABLE_NAME.COMPANY_MEMBER);
});
