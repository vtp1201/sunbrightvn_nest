import { createModel } from 'schemix';

import { company, companyEventType, file, order, service } from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_DATE_TIME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/CompanyEvent';

export default createModel(MODEL_NAME.COMPANY_EVENT, (CompanyEventModel) => {
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
  const companyEventTypeRelation = oneToOne({
    attribute: ATTRIBUTE.companyEventTypeId,
    model: companyEventType,
    relation: RELATION.companyEventType,
    map: INDEX_NAME.companyEventTypeId,
    option: { optional: true },
  });
  const companyRelation = oneToOne({
    attribute: ATTRIBUTE.companyId,
    model: company,
    relation: RELATION.company,
    map: INDEX_NAME.companyId,
  });
  const orderRelation = oneToOne({
    attribute: ATTRIBUTE.orderId,
    model: order,
    relation: RELATION.order,
    map: INDEX_NAME.orderId,
    option: { optional: true },
  });
  const serviceRelation = oneToOne({
    attribute: ATTRIBUTE.serviceId,
    model: service,
    relation: RELATION.service,
    map: INDEX_NAME.serviceId,
  });
  const filesRelation = oneToMany({
    model: file,
    relation: RELATION.files,
  });
  // defined Model
  process.nextTick(() => {
    CompanyEventModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.companyId, {
        map: COLUMN.companyId,
      })
      .int(ATTRIBUTE.serviceId, {
        map: COLUMN.serviceId,
      })
      .int(ATTRIBUTE.orderId, {
        map: COLUMN.orderId,
        optional: true,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_255,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .dateTime(ATTRIBUTE.dateCompleted, {
        map: COLUMN.dateCompleted,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .dateTime(ATTRIBUTE.dueDate, {
        map: COLUMN.dueDate,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .dateTime(ATTRIBUTE.dateRemind, {
        map: COLUMN.dateRemind,
        raw: RAW_DATE_TIME.DATE_ONLY,
        optional: true,
      })
      .boolean(ATTRIBUTE.isNotShow, {
        map: COLUMN.isNotShow,
        default: false,
      })
      .int(ATTRIBUTE.companyEventTypeId, {
        map: COLUMN.companyEventTypeId,
        optional: true,
      })
      .boolean(ATTRIBUTE.isNotifyDueRenewal, {
        map: COLUMN.isNotifyDueRenewal,
        default: false,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(companyEventTypeRelation)
      .mixin(companyRelation)
      .mixin(orderRelation)
      .mixin(serviceRelation)
      .mixin(filesRelation)

      // indexes
      .raw(INDEX.companyEventTypeId)
      .raw(INDEX.companyId)
      .raw(INDEX.orderId)
      .raw(INDEX.serviceId)

      // table name
      .map(TABLE_NAME.COMPANY_EVENT);
  });
});
