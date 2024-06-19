import { createModel } from 'schemix';

import {
  MODEL_NAME,
  TABLE_NAME,
  RAW_STRING,
  RAW_NUMBER,
  RAW_DATE_TIME,
} from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Customer';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.CUSTOMER, (CustomerModel) => {
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

  // defined Model
  process.nextTick(() => {
    CustomerModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .float(ATTRIBUTE.creditAmount, {
        map: COLUMN.creditAmount,
        raw: RAW_NUMBER.FLOAT,
        default: 0,
      })
      .string(ATTRIBUTE.creditDescription, {
        map: COLUMN.creditDescription,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
        optional: true,
      })
      .int(ATTRIBUTE.personId, {
        map: COLUMN.personId,
        optional: true,
      })
      .int(ATTRIBUTE.campaignAdsId, {
        map: COLUMN.campaignAdsId,
        optional: true,
      })
      .int(ATTRIBUTE.clientId, {
        map: COLUMN.clientId,
        optional: true,
      })
      .int(ATTRIBUTE.gaChannelId, {
        map: COLUMN.gaChannelId,
        optional: true,
      })
      .int(ATTRIBUTE.contactFromId, {
        map: COLUMN.contactFromId,
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
      .int(ATTRIBUTE.companyCountryId, {
        map: COLUMN.companyCountryId,
        optional: true,
      })
      .int(ATTRIBUTE.titleNameId, {
        map: COLUMN.titleNameId,
        optional: true,
      })
      .int(ATTRIBUTE.websiteId, {
        map: COLUMN.websiteId,
        default: 1,
      })
      .int(ATTRIBUTE.customerTypeId, {
        map: COLUMN.customerTypeId,
        optional: true,
      })
      .string(ATTRIBUTE.firstName, {
        map: COLUMN.firstName,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.lastName, {
        map: COLUMN.lastName,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.address, {
        map: COLUMN.address,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.genderId, {
        map: COLUMN.genderId,
        optional: true,
      })
      .string(ATTRIBUTE.email, {
        map: COLUMN.email,
        raw: RAW_STRING.LENGTH_320,
        optional: true,
      })
      .string(ATTRIBUTE.ccEmail, {
        map: COLUMN.ccEmail,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.emailStatus, {
        map: COLUMN.emailStatus,
        raw: RAW_STRING.LENGTH_20,
        optional: true,
      })
      .string(ATTRIBUTE.phone, {
        map: COLUMN.phone,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.phoneNumber, {
        map: COLUMN.phoneNumber,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.phoneCountryId, {
        map: COLUMN.phoneCountryId,
        optional: true,
      })
      .string(ATTRIBUTE.skype, {
        map: COLUMN.skype,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .int(ATTRIBUTE.status, {
        map: COLUMN.status,
        optional: true,
        default: 0,
      })
      .string(ATTRIBUTE.companyName, {
        map: COLUMN.companyName,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.image, {
        map: COLUMN.image,
        raw: RAW_STRING.LENGTH_250,
        optional: true,
      })
      .string(ATTRIBUTE.signature, {
        map: COLUMN.signature,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.otherType, {
        map: COLUMN.otherType,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.businessDescription, {
        map: COLUMN.businessDescription,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.subject, {
        map: COLUMN.subject,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.message, {
        map: COLUMN.message,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .dateTime(ATTRIBUTE.entryTime, {
        map: COLUMN.entryTime,
        raw: RAW_DATE_TIME.DATE_CURRENT,
        optional: true,
      })
      .dateTime(ATTRIBUTE.birthday, {
        map: COLUMN.birthday,
        raw: RAW_DATE_TIME.DATE_CURRENT,
        optional: true,
      })
      .dateTime(ATTRIBUTE.exitTime, {
        map: COLUMN.exitTime,
        raw: RAW_DATE_TIME.DATE_CURRENT,
        optional: true,
      })
      .string(ATTRIBUTE.passport, {
        map: COLUMN.passport,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.flightNumber, {
        map: COLUMN.flightNumber,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .dateTime(ATTRIBUTE.arrivalTime, {
        map: COLUMN.arrivalTime,
        raw: RAW_DATE_TIME.DATE_CURRENT,
        optional: true,
      })
      .int(ATTRIBUTE.airportId, {
        map: COLUMN.airportId,
        optional: true,
      })
      .int(ATTRIBUTE.visaPurposeId, {
        map: COLUMN.visaPurposeId,
        optional: true,
      })
      .int(ATTRIBUTE.visaTypeId, {
        map: COLUMN.visaTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.orderId, {
        map: COLUMN.orderId,
        optional: true,
      })
      .string(ATTRIBUTE.mailchimpId, {
        map: COLUMN.mailchimpId,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.surveyContent, {
        map: COLUMN.surveyContent,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.xeroContactId, {
        map: COLUMN.xeroContactId,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.logs, {
        map: COLUMN.logs,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.customerStatusId, {
        map: COLUMN.customerStatusId,
        default: 0,
        optional: true,
      })
      .string(ATTRIBUTE.city, {
        map: COLUMN.city,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .string(ATTRIBUTE.state, {
        map: COLUMN.state,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .string(ATTRIBUTE.postalCode, {
        map: COLUMN.postalCode,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .string(ATTRIBUTE.companyRegistrationNo, {
        map: COLUMN.companyRegistrationNo,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .string(ATTRIBUTE.companyAddress, {
        map: COLUMN.companyAddress,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .int(ATTRIBUTE.companyAddressCountryId, {
        map: COLUMN.companyAddressCountryId,
        optional: true,
      })
      .string(ATTRIBUTE.companyAddressCity, {
        map: COLUMN.companyAddressCity,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .string(ATTRIBUTE.companyAddressState, {
        map: COLUMN.companyAddressState,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })
      .string(ATTRIBUTE.companyAddressPostalCode, {
        map: COLUMN.companyAddressPostalCode,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .boolean(ATTRIBUTE.isFirstLogin, {
        map: COLUMN.isFirstLogin,
        default: false,
      })
      .int(ATTRIBUTE.businessActivityIndustryId, {
        map: COLUMN.businessActivityIndustryId,
        optional: true,
      })
      .int(ATTRIBUTE.packageId, {
        map: COLUMN.packageId,
        optional: true,
      })
      .int(ATTRIBUTE.csLeaderId, {
        map: COLUMN.csLeaderId,
        optional: true,
      })
      .int(ATTRIBUTE.csMemberId, {
        map: COLUMN.csMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.accountantLeaderId, {
        map: COLUMN.accountantLeaderId,
        optional: true,
      })
      .int(ATTRIBUTE.accountantMemberId, {
        map: COLUMN.accountantMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.legalLeaderId, {
        map: COLUMN.legalLeaderId,
        optional: true,
      })
      .int(ATTRIBUTE.legalMemberId, {
        map: COLUMN.legalMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.complianceLeaderId, {
        map: COLUMN.complianceLeaderId,
        optional: true,
      })
      .int(ATTRIBUTE.complianceMemberId, {
        map: COLUMN.complianceMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.internalBookeepingLeaderId, {
        map: COLUMN.internalBookeepingLeaderId,
        optional: true,
      })
      .int(ATTRIBUTE.internalBookeepingMemberId, {
        map: COLUMN.internalBookeepingMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.testerLeaderId, {
        map: COLUMN.testerLeaderId,
        optional: true,
      })
      .bigInt(ATTRIBUTE.timeUnassignedTester, {
        map: COLUMN.timeUnassignedTester,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      .raw(INDEX.accountantLeaderId)
      .raw(INDEX.accountantMemberId)
      .raw(INDEX.airportId)
      .raw(INDEX.businessActivityIndustryId)
      .raw(INDEX.campaignAdsId)
      .raw(INDEX.companyAddressCountryId)
      .raw(INDEX.companyCountryId)
      .raw(INDEX.companySuffixId)
      .raw(INDEX.complianceLeaderId)
      .raw(INDEX.complianceMemberId)
      .raw(INDEX.contactFromId)
      .raw(INDEX.countryId)
      .raw(INDEX.csLeaderId)
      .raw(INDEX.csMemberId)
      .raw(INDEX.customerStatusId)
      .raw(INDEX.customerTypeId)
      .raw(INDEX.entityTypeId)
      .raw(INDEX.gaChannelId)
      .raw(INDEX.genderId)
      .raw(INDEX.internalBookeepingLeaderId)
      .raw(INDEX.internalBookeepingMemberId)
      .raw(INDEX.legalLeaderId)
      .raw(INDEX.legalMemberId)
      .raw(INDEX.orderId)
      .raw(INDEX.packageId)
      .raw(INDEX.personId)
      .raw(INDEX.phoneCountryId)
      .raw(INDEX.testerLeaderId)
      .raw(INDEX.titleNameId)
      .raw(INDEX.visaPurposeId)
      .raw(INDEX.visaTypeId)
      .raw(INDEX.websiteId)

      // table name
      .map(TABLE_NAME.CUSTOMER);
  });
});
