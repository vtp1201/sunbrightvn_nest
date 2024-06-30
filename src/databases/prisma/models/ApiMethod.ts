import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/ApiMethod';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import Api from './Api';
import Syslog from './Syslog';

export default createModel(MODEL_NAME.API_METHOD, (ApiMethodModel) => {
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
  const apisRelation = oneToMany({
    model: Api,
    relation: RELATION.apis,
  });
  const syslogsRelation = oneToMany({
    model: Syslog,
    relation: RELATION.syslogs,
  });

  // defined Model
  process.nextTick(() => {
    ApiMethodModel.int(ATTRIBUTE.id, {
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

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(apisRelation)
      .mixin(syslogsRelation)

      // table name
      .map(TABLE_NAME.API_METHOD);
  });
});
