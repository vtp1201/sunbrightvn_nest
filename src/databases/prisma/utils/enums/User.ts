import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  username = 'username',
  password = 'password',
  passwordSalt = 'passwordSalt',
  status = 'status',
  resetPasswordToken = 'resetPasswordToken',
  resetPasswordTokenExp = 'resetPasswordTokenExp',
  twoFactorToken = 'twoFactorToken',
  twoFactorTokenExp = 'twoFactorTokenExp',
  isTwoFactorAuthentication = 'isTwoFactorAuthentication',
  personId = 'personId',
  customerId = 'customerId',
  subscriptionId = 'subscriptionId',
  facebookId = 'facebookId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  username = 'username',
  password = 'password',
  passwordSalt = 'password_salt',
  status = 'status',
  resetPasswordToken = 'reset_password_token',
  resetPasswordTokenExp = 'reset_password_token_exp',
  twoFactorToken = 'two_factor_token',
  twoFactorTokenExp = 'two_factor_token_exp',
  isTwoFactorAuthentication = 'is_two_factor_authentication',
  personId = 'person_id',
  customerId = 'customer_id',
  subscriptionId = 'subscription_id',
  facebookId = 'facebook_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  actionLogs = RELATION_DEFAULT.actionLogs,
  billings = RELATION_DEFAULT.billings,
  accountantLeaderForCustomers = RELATION_DEFAULT.accountantLeaderForCustomers,
  accountantMemberForCustomers = RELATION_DEFAULT.accountantMemberForCustomers,
  complianceLeaderForCustomers = RELATION_DEFAULT.complianceLeaderForCustomers,
  complianceMemberForCustomers = RELATION_DEFAULT.complianceMemberForCustomers,
  csLeaderForCustomers = RELATION_DEFAULT.csLeaderForCustomers,
  csMemberForCustomers = RELATION_DEFAULT.csMemberForCustomers,
  internalBookeepingLeaderForCustomers = RELATION_DEFAULT.internalBookeepingLeaderForCustomers,
  internalBookeepingMemberForCustomers = RELATION_DEFAULT.internalBookeepingMemberForCustomers,
  legalLeaderForCustomers = RELATION_DEFAULT.legalLeaderForCustomers,
  legalMemberForCustomers = RELATION_DEFAULT.legalMemberForCustomers,
  testerLeaderForCustomers = RELATION_DEFAULT.testerLeaderForCustomers,
  emailTemplateHasReceivers = RELATION_DEFAULT.emailTemplateHasReceivers,
  files = RELATION_DEFAULT.files,
  teamGroups = RELATION_DEFAULT.teamGroups,
  leaderForTeamGroups = RELATION_DEFAULT.leaderForTeamGroups,
  historyLogCDCs = RELATION_DEFAULT.historyLogCDCs,
  messages = RELATION_DEFAULT.messages,
  notes = RELATION_DEFAULT.notes,
  processes = RELATION_DEFAULT.processes,
  supportCases = RELATION_DEFAULT.supportCases,
  syslogs = RELATION_DEFAULT.syslogs,
  accountantLeaderForTasks = RELATION_DEFAULT.accountantLeaderForTasks,
  accountantMemberForTasks = RELATION_DEFAULT.accountantMemberForTasks,
  complianceLeaderForTasks = RELATION_DEFAULT.complianceLeaderForTasks,
  complianceMemberForTasks = RELATION_DEFAULT.complianceMemberForTasks,
  csLeaderForTasks = RELATION_DEFAULT.csLeaderForTasks,
  csMemberForTasks = RELATION_DEFAULT.csMemberForTasks,
  internalBookeepingLeaderForTasks = RELATION_DEFAULT.internalBookeepingLeaderForTasks,
  internalBookeepingMemberForTasks = RELATION_DEFAULT.internalBookeepingMemberForTasks,
  legalLeaderForTasks = RELATION_DEFAULT.legalLeaderForTasks,
  legalMemberForTasks = RELATION_DEFAULT.legalMemberForTasks,
  testerLeaderForTasks = RELATION_DEFAULT.testerLeaderForTasks,
  tokens = RELATION_DEFAULT.tokens,
  customer = RELATION_DEFAULT.customer,
  person = RELATION_DEFAULT.person,
  subscription = RELATION_DEFAULT.subscription,
  userHasNotifications = RELATION_DEFAULT.userHasNotifications,
  roles = RELATION_DEFAULT.roles,
}

const tableName = TABLE_NAME.USER;
export enum INDEX_NAME {
  customerId = `"${tableName}_${COLUMN.customerId}_fkey"`,
  personId = `"${tableName}_${COLUMN.personId}_fkey"`,
  subscriptionId = `"${tableName}_${COLUMN.subscriptionId}_fkey"`,
}

export enum INDEX {
  customerId = `@@index([${ATTRIBUTE.customerId}], map: ${INDEX_NAME.customerId})`,
  personId = `@@index([${ATTRIBUTE.personId}], map: ${INDEX_NAME.personId})`,
  subscriptionId = `@@index([${ATTRIBUTE.subscriptionId}], map: ${INDEX_NAME.subscriptionId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
