import { createModel } from 'schemix';

import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/ApiExample';
import { api, apiGroup, apiStatus, file } from './';

export default createModel(MODEL_NAME.API_EXAMPLE, (ApiExampleModel) => {
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
  const apiStatusRelation = oneToOne({
    attribute: ATTRIBUTE.apiStatusId,
    model: apiStatus,
    relation: RELATION.apiStatus,
    map: INDEX_NAME.apiStatusId,
  });
  const apiRelation = oneToOne({
    attribute: ATTRIBUTE.apiId,
    model: api,
    relation: RELATION.api,
    map: INDEX_NAME.apiId,
  });
  const apiGroupRelation = oneToOne({
    attribute: ATTRIBUTE.apiGroupId,
    model: apiGroup,
    relation: RELATION.apiGroup,
    map: INDEX_NAME.apiGroupId,
    option: {
      optional: true,
    },
  });
  const filesRelation = oneToMany({
    model: file,
    relation: RELATION.files,
  });

  // defined Model
  process.nextTick(() => {
    ApiExampleModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.apiId, {
        map: COLUMN.apiId,
      })
      .int(ATTRIBUTE.apiStatusId, {
        map: COLUMN.apiStatusId,
      })
      .int(ATTRIBUTE.apiGroupId, {
        map: COLUMN.apiGroupId,
        optional: true,
      })
      .json(ATTRIBUTE.body, {
        map: COLUMN.body,
        optional: true,
      })
      .json(ATTRIBUTE.param, {
        map: COLUMN.param,
        optional: true,
      })
      .json(ATTRIBUTE.query, {
        map: COLUMN.query,
        optional: true,
      })
      .json(ATTRIBUTE.response, {
        map: COLUMN.response,
        optional: true,
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
      .mixin(apiStatusRelation)
      .mixin(apiRelation)
      .mixin(apiGroupRelation)
      .mixin(filesRelation)

      // indexes
      .raw(INDEX.apiGroupId)
      .raw(INDEX.apiId)
      .raw(INDEX.apiStatusId)

      // table name
      .map(TABLE_NAME.API_EXAMPLE);
  });
});
