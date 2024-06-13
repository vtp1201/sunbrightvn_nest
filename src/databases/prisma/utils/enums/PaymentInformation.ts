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

export enum INDEX {
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: "fk_pay_company_member_id_com_id_1axx")`,
  orderId = `@@index([${ATTRIBUTE.orderId}], map: "fk_pay_order_id_ord_id_atc9")`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: "fk_pay_task_id_tas_id_3ro9")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
