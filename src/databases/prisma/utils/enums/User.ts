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
  roles = RELATION_DEFAULT.roles,
  actionLog = 'actionLog',
  billing = 'billing',
  emailTemplateHasReceiver = 'email_template_has_receiver',
  file = 'file',
  groupHasUser = 'group_has_user',
  historyLogCdc = 'history_log_cdc',
  message = 'message',
  note = 'note',
  process = 'process',
  supportCase = 'support_case',
  syslog = 'syslog',
  teamGroup = 'team_group',
  token = 'token',
  person = 'person',
  subscription = 'subscription',
  userHasNotification = 'user_has_notification',
  userHasRole = 'user_has_role',
}

export enum INDEX {
  customerId = `@@index([${ATTRIBUTE.customerId}], map: "fk_user_customer1_idx")`,
  personId = `@@index([${ATTRIBUTE.personId}], map: "fk_user_person1_idx")`,
  subscriptionId = `@@index([${ATTRIBUTE.subscriptionId}], map: "fk_user_subscription1_idx")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
