import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING, RAW_DATE_TIME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/Company';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.COMPANY, (CompanyModel) => {
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
    .mixin(createdTime)
    .mixin(updatedTime)
    .mixin(deleted)

    // table name
    .map(TABLE_NAME.COMPANY);
});
