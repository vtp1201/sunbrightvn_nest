import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/Task';
import {
  createdTime,
  deleted,
  oneToMany,
  oneToOne,
  updatedTime,
} from '../mixins';
import {
  Process,
  additionProcess,
  answer,
  bankingProcess,
  changeRequest,
  company,
  companyInterest,
  companyMember,
  companyOwnership,
  companyShare,
  country,
  customer,
  entityType,
  fatca,
  file,
  historyLogCDC,
  note,
  order,
  paymentInformation,
  proposedName,
  rankingPartner,
  taskHasAgent,
  token,
  user,
} from '.';

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

  // defined Relations
  const additionProcessesRelation = oneToMany({
    model: additionProcess,
    relation: RELATION.additionProcesses,
  });
  const answersRelation = oneToMany({
    model: answer,
    relation: RELATION.answers,
  });
  const bankingProcessesRelation = oneToMany({
    model: bankingProcess,
    relation: RELATION.bankingProcesses,
  });
  const changeRequestsRelation = oneToMany({
    model: changeRequest,
    relation: RELATION.changeRequests,
  });
  const companyInterestsRelation = oneToMany({
    model: companyInterest,
    relation: RELATION.companyInterests,
  });
  const companyOwnershipsRelation = oneToMany({
    model: companyOwnership,
    relation: RELATION.companyOwnerships,
  });
  const companySharesRelation = oneToMany({
    model: companyShare,
    relation: RELATION.companyShares,
  });
  const fatcasRelation = oneToMany({
    model: fatca,
    relation: RELATION.fatcas,
  });
  const filesRelation = oneToMany({
    model: file,
    relation: RELATION.files,
  });
  const historyLogCDCsRelation = oneToMany({
    model: historyLogCDC,
    relation: RELATION.historyLogCDCs,
  });
  const notesRelation = oneToMany({
    model: note,
    relation: RELATION.notes,
  });
  const paymentsInformationRelation = oneToMany({
    model: paymentInformation,
    relation: RELATION.paymentsInformation,
  });
  const processesRelation = oneToMany({
    model: Process,
    relation: RELATION.processes,
  });
  const proposedNamesRelation = oneToMany({
    model: proposedName,
    relation: RELATION.proposedNames,
  });
  const rankingPartnersRelation = oneToMany({
    model: rankingPartner,
    relation: RELATION.rankingPartners,
  });
  const accountantLeaderRelation = oneToOne({
    attribute: ATTRIBUTE.accountantLeaderId,
    model: user,
    relation: RELATION.accountantLeader,
    isNeedName: true,
    option: { optional: true },
  });
  const accountantMemberRelation = oneToOne({
    attribute: ATTRIBUTE.accountantMemberId,
    model: user,
    relation: RELATION.accountantMember,
    isNeedName: true,
    option: { optional: true },
  });
  const appointedDirectorRelation = oneToOne({
    attribute: ATTRIBUTE.appointedDirectorCompanyMemberId,
    model: companyMember,
    relation: RELATION.appointedDirector,
    isNeedName: true,
    option: { optional: true },
  });
  const appointedPresidentRelation = oneToOne({
    attribute: ATTRIBUTE.appointedPresidentCompanyMemberId,
    model: companyMember,
    relation: RELATION.appointedPresident,
    isNeedName: true,
    option: { optional: true },
  });
  const appointedShareholderRelation = oneToOne({
    attribute: ATTRIBUTE.appointedShareholderCompanyMemberId,
    model: companyMember,
    relation: RELATION.appointedShareholder,
    isNeedName: true,
    option: { optional: true },
  });
  const appointedUboRelation = oneToOne({
    attribute: ATTRIBUTE.appointedUboCompanyMemberId,
    model: companyMember,
    relation: RELATION.appointedUbo,
    isNeedName: true,
    option: { optional: true },
  });
  const companyRelation = oneToOne({
    attribute: ATTRIBUTE.companyId,
    model: company,
    relation: RELATION.company,
    option: { optional: true },
  });
  const complianceLeaderRelation = oneToOne({
    attribute: ATTRIBUTE.complianceLeaderId,
    model: user,
    relation: RELATION.complianceLeader,
    isNeedName: true,
    option: { optional: true },
  });
  const complianceMemberRelation = oneToOne({
    attribute: ATTRIBUTE.complianceMemberId,
    model: user,
    relation: RELATION.complianceMember,
    isNeedName: true,
    option: { optional: true },
  });
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: country,
    relation: RELATION.country,
    isNeedName: true,
    option: { optional: true },
  });
  const csLeaderRelation = oneToOne({
    attribute: ATTRIBUTE.csLeaderId,
    model: user,
    relation: RELATION.csLeader,
    isNeedName: true,
    option: { optional: true },
  });
  const csMemberRelation = oneToOne({
    attribute: ATTRIBUTE.csMemberId,
    model: user,
    relation: RELATION.csMember,
    isNeedName: true,
    option: { optional: true },
  });
  const customerRelation = oneToOne({
    attribute: ATTRIBUTE.customerId,
    model: customer,
    relation: RELATION.customer,
    option: { optional: true },
  });
  const entityTypeRelation = oneToOne({
    attribute: ATTRIBUTE.entityTypeId,
    model: entityType,
    relation: RELATION.entityType,
    option: { optional: true },
  });
  const incorporationCountryRelation = oneToOne({
    attribute: ATTRIBUTE.incorporationCountryId,
    model: country,
    relation: RELATION.incorporationCountry,
    isNeedName: true,
    option: { optional: true },
  });
  const internalBookeepingLeaderRelation = oneToOne({
    attribute: ATTRIBUTE.internalBookeepingLeaderId,
    model: user,
    relation: RELATION.internalBookeepingLeader,
    isNeedName: true,
    option: { optional: true },
  });
  const internalBookeepingMemberRelation = oneToOne({
    attribute: ATTRIBUTE.internalBookeepingMemberId,
    model: user,
    relation: RELATION.internalBookeepingMember,
    isNeedName: true,
    option: { optional: true },
  });
  const legalLeaderRelation = oneToOne({
    attribute: ATTRIBUTE.legalLeaderId,
    model: user,
    relation: RELATION.legalLeader,
    isNeedName: true,
    option: { optional: true },
  });
  const legalMemberRelation = oneToOne({
    attribute: ATTRIBUTE.legalMemberId,
    model: user,
    relation: RELATION.legalMember,
    isNeedName: true,
    option: { optional: true },
  });
  const orderRelation = oneToOne({
    attribute: ATTRIBUTE.orderId,
    model: order,
    relation: RELATION.order,
    isNeedName: true,
    option: { optional: true },
  });
  const phoneCountryRelation = oneToOne({
    attribute: ATTRIBUTE.phoneCountryId,
    relation: RELATION.phoneCountry,
    model: country,
    isNeedName: true,
    option: { optional: true },
  });
  const upgradeOrderRelation = oneToOne({
    attribute: ATTRIBUTE.upgradeOrderId,
    model: order,
    relation: RELATION.upgradeOrder,
    isNeedName: true,
    option: { optional: true },
  });
  const testerLeaderRelation = oneToOne({
    attribute: ATTRIBUTE.testerLeaderId,
    model: user,
    relation: RELATION.testerLeader,
    isNeedName: true,
    option: { optional: true },
  });
  const taskHasAgentsRelation = oneToMany({
    model: taskHasAgent,
    relation: RELATION.taskHasAgents,
  });
  const tokensRelation = oneToMany({
    model: token,
    relation: RELATION.tokens,
  });

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

      // relations
      .mixin(additionProcessesRelation)
      .mixin(answersRelation)
      .mixin(bankingProcessesRelation)
      .mixin(changeRequestsRelation)
      .mixin(companyInterestsRelation)
      .mixin(companyOwnershipsRelation)
      .mixin(companySharesRelation)
      .mixin(fatcasRelation)
      .mixin(filesRelation)
      .mixin(historyLogCDCsRelation)
      .mixin(notesRelation)
      .mixin(paymentsInformationRelation)
      .mixin(processesRelation)
      .mixin(proposedNamesRelation)
      .mixin(rankingPartnersRelation)
      .mixin(accountantLeaderRelation)
      .mixin(accountantMemberRelation)
      .mixin(appointedDirectorRelation)
      .mixin(appointedPresidentRelation)
      .mixin(appointedShareholderRelation)
      .mixin(appointedUboRelation)
      .mixin(companyRelation)
      .mixin(complianceLeaderRelation)
      .mixin(complianceMemberRelation)
      .mixin(countryRelation)
      .mixin(csLeaderRelation)
      .mixin(csMemberRelation)
      .mixin(customerRelation)
      .mixin(entityTypeRelation)
      .mixin(incorporationCountryRelation)
      .mixin(internalBookeepingLeaderRelation)
      .mixin(internalBookeepingMemberRelation)
      .mixin(legalLeaderRelation)
      .mixin(legalMemberRelation)
      .mixin(orderRelation)
      .mixin(phoneCountryRelation)
      .mixin(upgradeOrderRelation)
      .mixin(testerLeaderRelation)
      .mixin(taskHasAgentsRelation)
      .mixin(tokensRelation)

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
