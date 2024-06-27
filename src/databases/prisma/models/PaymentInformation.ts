import { createModel } from 'schemix';

import { MODEL_NAME, RAW_DATE_TIME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/PaymentInformation';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.PAYMENT_INFORMATION,
  (PaymentInformationModel) => {
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

        // indexes
        // .raw(INDEX.companyMemberId)
        // .raw(INDEX.orderId)
        // .raw(INDEX.taskId)

        // table name
        .map(TABLE_NAME.PAYMENT_INFORMATION);
    });
  },
);
