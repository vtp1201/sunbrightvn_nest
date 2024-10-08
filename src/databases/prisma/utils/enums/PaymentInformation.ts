import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  companyMemberId = 'companyMemberId',
  orderId = 'orderId',
  taskId = 'taskId',
  dateOfPayment = 'dateOfPayment',
  paymentAmount = 'paymentAmount',
  nameOnCard = 'nameOnCard',
  lastFourDigitsOnCard = 'lastFourDigitsOnCard',
  expiredDateOfCard = 'expiredDateOfCard',
  issuingBank = 'issuingBank',
  emailAddressOfCardholder = 'emailAddressOfCardholder',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  companyMemberId = 'company_member_id',
  orderId = 'order_id',
  taskId = 'task_id',
  dateOfPayment = 'date_of_payment',
  paymentAmount = 'payment_amount',
  nameOnCard = 'name_on_card',
  lastFourDigitsOnCard = 'last_four_digits_on_card',
  expiredDateOfCard = 'expired_date_of_card',
  issuingBank = 'issuing_bank',
  emailAddressOfCardholder = 'email_address_of_cardholder',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  companyMember = RELATION_DEFAULT.companyMember,
  order = RELATION_DEFAULT.order,
  task = RELATION_DEFAULT.task,
}

const tableName = TABLE_NAME.PAYMENT_INFORMATION;
export enum INDEX_NAME {
  companyMemberId = `"${tableName}_${COLUMN.companyMemberId}_fkey"`,
  orderId = `"${tableName}_${COLUMN.orderId}_fkey"`,
  taskId = `"${tableName}_${COLUMN.taskId}_fkey"`,
}

export enum INDEX {
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: ${INDEX_NAME.companyMemberId})`,
  orderId = `@@index([${ATTRIBUTE.orderId}], map: ${INDEX_NAME.orderId})`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: ${INDEX_NAME.taskId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
