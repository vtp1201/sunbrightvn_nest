import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/ApiExample';
import {
  createdTime,
  deleted,
  oneToMany,
  oneToOne,
  updatedTime,
} from '../mixins';
import ApiStatus from './ApiStatus';
import Api from './Api';
import ApiGroup from './ApiGroup';
import File from './File';

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
    model: ApiStatus,
    relation: RELATION.apiStatus,
  });
  const apiRelation = oneToOne({
    attribute: ATTRIBUTE.apiId,
    model: Api,
    relation: RELATION.api,
  });
  const apiGroupRelation = oneToOne({
    attribute: ATTRIBUTE.apiGroupId,
    model: ApiGroup,
    relation: RELATION.apiGroup,
    option: { optional: true },
  });
  const filesRelation = oneToMany({
    model: File,
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

      // table name
      .map(TABLE_NAME.API_EXAMPLE);
  });
});
