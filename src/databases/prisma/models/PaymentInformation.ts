import { createModel } from 'schemix';

import { companyMember, order, task } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_DATE_TIME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/PaymentInformation';

export default createModel(MODEL_NAME.PAYMENT_INFORMATION, (PaymentInformationModel) => {
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
  const companyMemberRelation = oneToOne({
    attribute: ATTRIBUTE.companyMemberId,
    map: INDEX_NAME.companyMemberId,
    model: companyMember,
    relation: RELATION.companyMember,
    option: { optional: true },
  });
  const orderRelation = oneToOne({
    attribute: ATTRIBUTE.orderId,
    map: INDEX_NAME.orderId,
    model: order,
    relation: RELATION.order,
    option: { optional: true },
  });
  const taskRelation = oneToOne({
    attribute: ATTRIBUTE.taskId,
    map: INDEX_NAME.taskId,
    model: task,
    relation: RELATION.task,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
    PaymentInformationModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.companyMemberId, {
        map: COLUMN.companyMemberId,
        optional: true,
      })
      .int(ATTRIBUTE.orderId, {
        map: COLUMN.orderId,
        optional: true,
      })
      .int(ATTRIBUTE.taskId, {
        map: COLUMN.taskId,
        optional: true,
      })
      .dateTime(ATTRIBUTE.dateOfPayment, {
        map: COLUMN.dateOfPayment,
        optional: true,
      })
      .int(ATTRIBUTE.paymentAmount, {
        map: COLUMN.paymentAmount,
        optional: true,
      })
      .string(ATTRIBUTE.nameOnCard, {
        map: COLUMN.nameOnCard,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.lastFourDigitsOnCard, {
        map: COLUMN.lastFourDigitsOnCard,
        optional: true,
      })
      .dateTime(ATTRIBUTE.expiredDateOfCard, {
        map: COLUMN.expiredDateOfCard,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .string(ATTRIBUTE.issuingBank, {
        map: COLUMN.issuingBank,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.emailAddressOfCardholder, {
        map: COLUMN.emailAddressOfCardholder,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(companyMemberRelation)
      .mixin(orderRelation)
      .mixin(taskRelation)

      // indexes
      .raw(INDEX.companyMemberId)
      .raw(INDEX.orderId)
      .raw(INDEX.taskId)

      // table name
      .map(TABLE_NAME.PAYMENT_INFORMATION);
  });
});
