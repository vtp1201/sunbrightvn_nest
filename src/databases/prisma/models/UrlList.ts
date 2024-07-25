import { createModel } from 'schemix';

import { urlListType } from '.';
import { createdTime, deleted, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/UrlList';

export default createModel(MODEL_NAME.URL_LIST, (UrlListModel) => {
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
  const urlListTypeRelation = oneToOne({
    attribute: ATTRIBUTE.urlListTypeId,
    map: INDEX_NAME.urlListTypeId,
    model: urlListType,
    relation: RELATION.urlListType,
    option: { optional: true },
  });

  // defined Model
  process.nextTick(() => {
    UrlListModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_200,
      })
      .string(ATTRIBUTE.value, {
        map: COLUMN.value,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.urlListTypeId, {
        optional: true,
        map: COLUMN.urlListTypeId,
      })
      .boolean(ATTRIBUTE.isUrl, {
        default: false,
        map: COLUMN.isUrl,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(urlListTypeRelation)

      // indexes
      .raw(INDEX.urlListTypeId)

      // table name
      .map(TABLE_NAME.URL_LIST);
  });
});
