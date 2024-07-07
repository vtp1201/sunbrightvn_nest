import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/User';
import {
  createdTime,
  deleted,
  oneToMany,
  oneToOne,
  updatedTime,
} from '../mixins';
import {
  Process,
  actionLog,
  billing,
  customer,
  emailTemplateHasReceiver,
  file,
  historyLogCDC,
  message,
  note,
  supportCase,
  syslog,
  task,
  teamGroup,
  role,
  token,
  person,
  subscription,
  userHasNotification,
} from '.';
import { RELATION_DEFAULT } from '../utils/enums/default';

export default createModel(MODEL_NAME.USER, (UserModel) => {
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

  // relations defined
  const actionLogsRelation = oneToMany({
    model: actionLog,
    relation: RELATION.actionLogs,
  });
  const billingsRelation = oneToMany({
    model: billing,
    relation: RELATION.billings,
  });
  const accountantLeaderForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.accountantLeaderForCustomers,
    fromRelation: RELATION_DEFAULT.accountantLeader,
  });
  const accountantMemberForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.accountantMemberForCustomers,
    fromRelation: RELATION_DEFAULT.accountantMember,
  });
  const complianceLeaderForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.complianceLeaderForCustomers,
    fromRelation: RELATION_DEFAULT.complianceLeader,
  });
  const complianceMemberForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.complianceMemberForCustomers,
    fromRelation: RELATION_DEFAULT.complianceMember,
  });
  const csLeaderForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.csLeaderForCustomers,
    fromRelation: RELATION_DEFAULT.csLeader,
  });
  const csMemberForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.csMemberForCustomers,
    fromRelation: RELATION_DEFAULT.csMember,
  });
  const internalBookeepingLeaderForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.internalBookeepingLeaderForCustomers,
    fromRelation: RELATION_DEFAULT.internalBookeepingLeader,
  });
  const internalBookeepingMemberForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.internalBookeepingMemberForCustomers,
    fromRelation: RELATION_DEFAULT.internalBookeepingMember,
  });
  const legalLeaderForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.legalLeaderForCustomers,
    fromRelation: RELATION_DEFAULT.legalLeader,
  });
  const legalMemberForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.legalMemberForCustomers,
    fromRelation: RELATION_DEFAULT.legalMember,
  });
  const testerLeaderForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.testerLeaderForCustomers,
    fromRelation: RELATION_DEFAULT.testerLeader,
  });
  const emailTemplateHasReceiversRelation = oneToMany({
    model: emailTemplateHasReceiver,
    relation: RELATION.emailTemplateHasReceivers,
  });
  const filesRelation = oneToMany({
    model: file,
    relation: RELATION.files,
  });
  const teamGroupsRelation = oneToMany({
    model: teamGroup,
    relation: RELATION.teamGroups,
  });
  const historyLogCDCsRelation = oneToMany({
    model: historyLogCDC,
    relation: RELATION.historyLogCDCs,
  });
  const messagesRelation = oneToMany({
    model: message,
    relation: RELATION.messages,
  });
  const notesRelation = oneToMany({
    model: note,
    relation: RELATION.notes,
  });
  const processesRelation = oneToMany({
    model: Process,
    relation: RELATION.processes,
  });
  const supportCasesRelation = oneToMany({
    model: supportCase,
    relation: RELATION.supportCases,
  });
  const syslogsRelation = oneToMany({
    model: syslog,
    relation: RELATION.syslogs,
  });
  const accountantLeaderForTasksRelation = oneToMany({
    model: task,
    relation: RELATION.accountantLeaderForTasks,
    fromRelation: RELATION_DEFAULT.accountantLeader,
  });
  const accountantMemberForTasksRelation = oneToMany({
    model: task,
    relation: RELATION.accountantMemberForTasks,
    fromRelation: RELATION_DEFAULT.accountantMember,
  });
  const complianceLeaderForTasksRelation = oneToMany({
    model: task,
    relation: RELATION.complianceLeaderForTasks,
    fromRelation: RELATION_DEFAULT.complianceLeader,
  });
  const complianceMemberForTasksRelation = oneToMany({
    model: task,
    relation: RELATION.complianceMemberForTasks,
    fromRelation: RELATION_DEFAULT.complianceMember,
  });
  const csLeaderForTasksRelation = oneToMany({
    model: task,
    relation: RELATION.csLeaderForTasks,
    fromRelation: RELATION_DEFAULT.csLeader,
  });
  const csMemberForTasksRelation = oneToMany({
    model: task,
    relation: RELATION.csMemberForTasks,
    fromRelation: RELATION_DEFAULT.csMember,
  });
  const internalBookeepingLeaderForTasksRelation = oneToMany({
    model: task,
    relation: RELATION.internalBookeepingLeaderForTasks,
    fromRelation: RELATION_DEFAULT.internalBookeepingLeader,
  });
  const internalBookeepingMemberForTasksRelation = oneToMany({
    model: task,
    relation: RELATION.internalBookeepingMemberForTasks,
    fromRelation: RELATION_DEFAULT.internalBookeepingMember,
  });
  const legalLeaderForTasksRelation = oneToMany({
    model: task,
    relation: RELATION.legalLeaderForTasks,
    fromRelation: RELATION_DEFAULT.legalLeader,
  });
  const legalMemberForTasksRelation = oneToMany({
    model: task,
    relation: RELATION.legalMemberForTasks,
    fromRelation: RELATION_DEFAULT.legalMember,
  });
  const testerLeaderForTasksRelation = oneToMany({
    model: task,
    relation: RELATION.testerLeaderForTasks,
    fromRelation: RELATION_DEFAULT.testerLeader,
  });
  const tokensRelation = oneToMany({
    model: token,
    relation: RELATION.tokens,
  });
  const customerRelation = oneToOne({
    attribute: ATTRIBUTE.customerId,
    model: customer,
    relation: RELATION.customer,
    option: { optional: true },
  });
  const personRelation = oneToOne({
    attribute: ATTRIBUTE.personId,
    model: person,
    relation: RELATION.person,
    option: { optional: true },
  });
  const subscriptionRelation = oneToOne({
    attribute: ATTRIBUTE.subscriptionId,
    model: subscription,
    relation: RELATION.subscription,
    option: { optional: true },
  });
  const userHasNotificationsRelation = oneToMany({
    model: userHasNotification,
    relation: RELATION.userHasNotifications,
  });
  const rolesRelation = oneToMany({
    model: role,
    relation: RELATION.roles,
  });

  // defined Model
  process.nextTick(() => {
    UserModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.username, {
        map: COLUMN.username,
        raw: RAW_STRING.LENGTH_320,
        optional: true,
      })
      .string(ATTRIBUTE.password, {
        map: COLUMN.password,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .string(ATTRIBUTE.passwordSalt, {
        map: COLUMN.passwordSalt,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .int(ATTRIBUTE.status, {
        map: COLUMN.status,
        optional: true,
      })
      .string(ATTRIBUTE.resetPasswordToken, {
        map: COLUMN.resetPasswordToken,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.resetPasswordTokenExp, {
        map: COLUMN.resetPasswordTokenExp,
        optional: true,
      })
      .string(ATTRIBUTE.twoFactorToken, {
        map: COLUMN.twoFactorToken,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.twoFactorTokenExp, {
        map: COLUMN.twoFactorTokenExp,
        optional: true,
      })
      .boolean(ATTRIBUTE.isTwoFactorAuthentication, {
        map: COLUMN.isTwoFactorAuthentication,
        default: false,
      })
      .int(ATTRIBUTE.personId, {
        map: COLUMN.personId,
        optional: true,
      })
      .int(ATTRIBUTE.customerId, {
        map: COLUMN.customerId,
        optional: true,
      })
      .int(ATTRIBUTE.subscriptionId, {
        map: COLUMN.subscriptionId,
        optional: true,
      })
      .int(ATTRIBUTE.facebookId, {
        map: COLUMN.facebookId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(actionLogsRelation)
      .mixin(billingsRelation)
      .mixin(accountantLeaderForCustomersRelation)
      .mixin(accountantMemberForCustomersRelation)
      .mixin(complianceLeaderForCustomersRelation)
      .mixin(complianceMemberForCustomersRelation)
      .mixin(csLeaderForCustomersRelation)
      .mixin(csMemberForCustomersRelation)
      .mixin(internalBookeepingLeaderForCustomersRelation)
      .mixin(internalBookeepingMemberForCustomersRelation)
      .mixin(legalLeaderForCustomersRelation)
      .mixin(legalMemberForCustomersRelation)
      .mixin(testerLeaderForCustomersRelation)
      .mixin(emailTemplateHasReceiversRelation)
      .mixin(filesRelation)
      .mixin(teamGroupsRelation)
      .mixin(historyLogCDCsRelation)
      .mixin(messagesRelation)
      .mixin(notesRelation)
      .mixin(processesRelation)
      .mixin(supportCasesRelation)
      .mixin(syslogsRelation)
      .mixin(accountantLeaderForTasksRelation)
      .mixin(accountantMemberForTasksRelation)
      .mixin(complianceLeaderForTasksRelation)
      .mixin(complianceMemberForTasksRelation)
      .mixin(csLeaderForTasksRelation)
      .mixin(csMemberForTasksRelation)
      .mixin(internalBookeepingLeaderForTasksRelation)
      .mixin(internalBookeepingMemberForTasksRelation)
      .mixin(legalLeaderForTasksRelation)
      .mixin(legalMemberForTasksRelation)
      .mixin(testerLeaderForTasksRelation)
      .mixin(tokensRelation)
      .mixin(customerRelation)
      .mixin(personRelation)
      .mixin(subscriptionRelation)
      .mixin(userHasNotificationsRelation)
      .mixin(rolesRelation)

      // indexes
      // .raw(INDEX.customerId)
      // .raw(INDEX.personId)
      // .raw(INDEX.subscriptionId)

      // table name
      .map(TABLE_NAME.USER);
  });
});
