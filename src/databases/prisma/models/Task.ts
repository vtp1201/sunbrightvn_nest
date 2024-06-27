import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Task';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.TASK, (TaskModel) => {
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
    TaskModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.customerId, {
        map: COLUMN.customerId,
        optional: true,
      })
      .int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
        optional: true,
      })
      .int(ATTRIBUTE.orderId, {
        map: COLUMN.orderId,
        optional: true,
      })
      .int(ATTRIBUTE.upgradeOrderId, {
        map: COLUMN.upgradeOrderId,
        optional: true,
      })
      .int(ATTRIBUTE.entityTypeId, {
        map: COLUMN.entityTypeId,
        optional: true,
      })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
        optional: true,
      })
      .int(ATTRIBUTE.incorporationCountryId, {
        map: COLUMN.incorporationCountryId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isRemindClientContact, {
        map: COLUMN.isRemindClientContact,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindAgentCheckName, {
        map: COLUMN.isRemindAgentCheckName,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindClientSignOrder, {
        map: COLUMN.isRemindClientSignOrder,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindAgentCheckDocument, {
        map: COLUMN.isRemindAgentCheckDocument,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindClientSignDocument, {
        map: COLUMN.isRemindClientSignDocument,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindAgentCheckOriginDocument, {
        map: COLUMN.isRemindAgentCheckOriginDocument,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindClientCheckName, {
        map: COLUMN.isRemindClientCheckName,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindAgentReviewBusinessPlanForm, {
        map: COLUMN.isRemindAgentReviewBusinessPlanForm,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindAgentReviewApplicationSet, {
        map: COLUMN.isRemindAgentReviewApplicationSet,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindClientReviewApplicationSet, {
        map: COLUMN.isRemindClientReviewApplicationSet,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindClientDeposit, {
        map: COLUMN.isRemindClientDeposit,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindAgentReviewApplicationForm, {
        map: COLUMN.isRemindAgentReviewApplicationForm,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindClientReviewApplicationForm, {
        map: COLUMN.isRemindClientReviewApplicationForm,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindAgentReviewScheduleMeeting, {
        map: COLUMN.isRemindAgentReviewScheduleMeeting,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindClientScheduleMeeting, {
        map: COLUMN.isRemindClientScheduleMeeting,
        default: false,
      })
      .boolean(ATTRIBUTE.isFinished, {
        map: COLUMN.isFinished,
        default: false,
      })
      .string(ATTRIBUTE.fullName, {
        map: COLUMN.fullName,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
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
      .string(ATTRIBUTE.address, {
        map: COLUMN.address,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.phoneCountryId, {
        map: COLUMN.phoneCountryId,
        optional: true,
      })
      .string(ATTRIBUTE.phoneNumber, {
        map: COLUMN.phoneNumber,
        optional: true,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.state, {
        map: COLUMN.state,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.city, {
        map: COLUMN.city,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.postalCode, {
        map: COLUMN.postalCode,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.appointedShareholderCompanyMemberId, {
        map: COLUMN.appointedShareholderCompanyMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.appointedDirectorCompanyMemberId, {
        map: COLUMN.appointedDirectorCompanyMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.appointedUboCompanyMemberId, {
        map: COLUMN.appointedUboCompanyMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.appointedPresidentCompanyMemberId, {
        map: COLUMN.appointedPresidentCompanyMemberId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isBankingFinished, {
        map: COLUMN.isBankingFinished,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindAgentServiceRequestRoundChop, {
        map: COLUMN.isRemindAgentServiceRequestRoundChop,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindAgentServiceRequestCertification, {
        map: COLUMN.isRemindAgentServiceRequestCertification,
        default: false,
      })
      .boolean(ATTRIBUTE.isRemindAgentServiceRequestCourier, {
        map: COLUMN.isRemindAgentServiceRequestCourier,
        default: false,
      })
      .string(ATTRIBUTE.reasonUseNomineeDirector, {
        map: COLUMN.reasonUseNomineeDirector,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.reasonUseNomineeShareholder, {
        map: COLUMN.reasonUseNomineeShareholder,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .boolean(ATTRIBUTE.isNoteCompliance, {
        map: COLUMN.isNoteCompliance,
        default: false,
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
      // .raw(INDEX.accountantLeaderId)
      // .raw(INDEX.accountantMemberId)
      // .raw(INDEX.appointedDirectorCompanyMemberId)
      // .raw(INDEX.appointedPresidentCompanyMemberId)
      // .raw(INDEX.appointedShareholderCompanyMemberId)
      // .raw(INDEX.appointedUboCompanyMemberId)
      // .raw(INDEX.companyId)
      // .raw(INDEX.countryId)
      // .raw(INDEX.complianceLeaderId)
      // .raw(INDEX.complianceMemberId)
      // .raw(INDEX.csLeaderId)
      // .raw(INDEX.csMemberId)
      // .raw(INDEX.customerId)
      // .raw(INDEX.entityTypeId)
      // .raw(INDEX.incorporationCountryId)
      // .raw(INDEX.internalBookeepingLeaderId)
      // .raw(INDEX.internalBookeepingMemberId)
      // .raw(INDEX.legalLeaderId)
      // .raw(INDEX.legalMemberId)
      // .raw(INDEX.orderId)
      // .raw(INDEX.phoneCountryId)
      // .raw(INDEX.upgradeOrderId)
      // .raw(INDEX.testerLeaderId)

      // table name
      .map(TABLE_NAME.TASK);
  });
});
