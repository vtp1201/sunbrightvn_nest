import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, RELATION } from '../utils/enums/User';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import Role from './Role';
import {
  actionLog,
  billing,
  customer,
  emailTemplateHasReceiver,
  file,
  historyLogCDC,
  message,
  note,
  teamGroup,
} from '.';

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
  });
  const accountantMemberForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.accountantMemberForCustomers,
  });
  const complianceLeaderForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.complianceLeaderForCustomers,
  });
  const complianceMemberForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.complianceMemberForCustomers,
  });
  const csLeaderForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.csLeaderForCustomers,
  });
  const csMemberForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.csMemberForCustomers,
  });
  const internalBookeepingLeaderForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.internalBookeepingLeaderForCustomers,
  });
  const internalBookeepingMemberForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.internalBookeepingMemberForCustomers,
  });
  const legalMemberForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.legalMemberForCustomers,
  });
  const testerLeaderForCustomersRelation = oneToMany({
    model: customer,
    relation: RELATION.testerLeaderForCustomers,
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

  const rolesRelation = oneToMany({
    model: Role,
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
      .mixin(rolesRelation)

      // indexes
      // .raw(INDEX.customerId)
      // .raw(INDEX.personId)
      // .raw(INDEX.subscriptionId)

      // table name
      .map(TABLE_NAME.USER);
  });
});
