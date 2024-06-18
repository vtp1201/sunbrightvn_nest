import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/User';
import { createdTime, deleted, updatedTime } from '../mixins';

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

      // indexes
      .raw(INDEX.customerId)
      .raw(INDEX.personId)
      .raw(INDEX.subscriptionId)

      // table name
      .map(TABLE_NAME.USER);
  });
});
