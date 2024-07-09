import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
  RELATION,
} from '../utils/enums/Subscription';
import {
  createdTime,
  deleted,
  oneToMany,
  oneToOne,
  updatedTime,
} from '../mixins';
import { notificationTemplate, service, user } from '.';

export default createModel(MODEL_NAME.SUBSCRIPTION, (SubscriptionModel) => {
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
  const notificationTemplatesRelation = oneToMany({
    model: notificationTemplate,
    relation: RELATION.notificationTemplates,
  });
  const serviceRelation = oneToOne({
    attribute: ATTRIBUTE.serviceId,
    model: service,
    relation: RELATION.service,
  });
  const usersRelation = oneToMany({
    model: user,
    relation: RELATION.users,
  });

  // defined Model
  process.nextTick(() => {
    SubscriptionModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_45,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.value, {
        map: COLUMN.value,
        optional: true,
        raw: RAW_STRING.TEXT,
      })
      .int(ATTRIBUTE.serviceId, {
        map: COLUMN.serviceId,
      })
      .int(ATTRIBUTE.numOfCompany, {
        map: COLUMN.numOfCompany,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(notificationTemplatesRelation)
      .mixin(serviceRelation)
      .mixin(usersRelation)

      // indexes
      // .raw(INDEX.serviceId)

      // table name
      .map(TABLE_NAME.SUBSCRIPTION);
  });
});
