import { createModel } from 'schemix';

import { apiMethod, country, syslogType, user } from '.';
import { createdTime, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/Syslog';

export default createModel(MODEL_NAME.SYSLOG, (SyslogModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });

  // defined Relations
  const apiMethodRelation = oneToOne({
    attribute: ATTRIBUTE.apiMethodId,
    map: INDEX_NAME.apiMethodId,
    model: apiMethod,
    relation: RELATION.apiMethod,
    option: { optional: true },
  });
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    map: INDEX_NAME.countryId,
    model: country,
    relation: RELATION.country,
    option: { optional: true },
  });
  const syslogTypeRelation = oneToOne({
    attribute: ATTRIBUTE.syslogTypeId,
    map: INDEX_NAME.syslogTypeId,
    model: syslogType,
    relation: RELATION.syslogType,
    option: { optional: true },
  });
  const userRelation = oneToOne({
    attribute: ATTRIBUTE.userId,
    map: INDEX_NAME.userId,
    model: user,
    relation: RELATION.user,
    option: { optional: true },
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
      .json(ATTRIBUTE.bodyReq, {
        map: COLUMN.bodyReq,
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

      // relations
      .mixin(apiMethodRelation)
      .mixin(countryRelation)
      .mixin(syslogTypeRelation)
      .mixin(userRelation)

      // indexes
      .raw(INDEX.apiMethodId)
      .raw(INDEX.countryId)
      .raw(INDEX.syslogTypeId)
      .raw(INDEX.userId)

      // table name
      .map(TABLE_NAME.SYSLOG);
  });
});
