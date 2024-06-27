import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Syslog';
import { createdTime } from '../mixins';

export default createModel(MODEL_NAME.SYSLOG, (SyslogModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });

  // defined Model
  process.nextTick(() => {
    SyslogModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.apiUrl, {
        map: COLUMN.apiUrl,
        raw: RAW_STRING.LENGTH_255,
      })
      .int(ATTRIBUTE.userId, {
        map: COLUMN.userId,
        optional: true,
      })
      .int(ATTRIBUTE.syslogTypeId, {
        map: COLUMN.syslogTypeId,
        optional: true,
      })
      .string(ATTRIBUTE.username, {
        map: COLUMN.username,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.bodyReq, {
        map: COLUMN.bodyReq,
        raw: RAW_STRING.LONG_TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.apiMethodId, {
        map: COLUMN.apiMethodId,
      })
      .string(ATTRIBUTE.relevantLink, {
        map: COLUMN.relevantLink,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.ipAddress, {
        map: COLUMN.ipAddress,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
        optional: true,
      })
      .int(ATTRIBUTE.customerId, {
        optional: true,
        map: COLUMN.customerId,
      })
      .int(ATTRIBUTE.orderId, {
        optional: true,
        map: COLUMN.orderId,
      })
      .int(ATTRIBUTE.taskId, {
        optional: true,
        map: COLUMN.taskId,
      })
      .int(ATTRIBUTE.status, {
        optional: true,
        map: COLUMN.status,
      })
      .string(ATTRIBUTE.host, {
        map: COLUMN.host,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.referer, {
        map: COLUMN.referer,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.userAgent, {
        map: COLUMN.userAgent,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.method, {
        map: COLUMN.method,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .int(ATTRIBUTE.tokenId, {
        optional: true,
        map: COLUMN.tokenId,
      })
      .boolean(ATTRIBUTE.isError, {
        default: false,
        map: COLUMN.isError,
      })
      .boolean(ATTRIBUTE.isUnExpectedError, {
        default: false,
        map: COLUMN.isUnExpectedError,
      })
      .string(ATTRIBUTE.errMessage, {
        map: COLUMN.errMessage,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.errStackTrace, {
        map: COLUMN.errStackTrace,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)

      // indexes
      // .raw(INDEX.apiMethodId)
      // .raw(INDEX.countryId)
      // .raw(INDEX.syslogTypeId)
      // .raw(INDEX.userId)

      // table name
      .map(TABLE_NAME.SYSLOG);
  });
});
