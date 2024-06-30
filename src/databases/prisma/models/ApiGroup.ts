import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/ApiGroup';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import ApiExample from './ApiExample';
import ApiHasGroup from './ApiHasGroup';

export default createModel(MODEL_NAME.API_GROUP, (ApiGroupModel) => {
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
  const apiExamplesRelation = oneToMany({
    model: ApiExample,
    relation: RELATION.apiExamples,
  });
  const apiHasGroupsRelation = oneToMany({
    model: ApiHasGroup,
    relation: RELATION.apiHasGroups,
  });

  // defined Model
  process.nextTick(() => {
    ApiGroupModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
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

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(apiExamplesRelation)
      .mixin(apiHasGroupsRelation)

      // table name
      .map(TABLE_NAME.API_GROUP);
  });
});
