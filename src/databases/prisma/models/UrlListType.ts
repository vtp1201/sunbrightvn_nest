import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/UrlListType';
import { deleted, oneToMany } from '../mixins';
import { urlList } from '.';

export default createModel(MODEL_NAME.URL_LIST_TYPE, (UrlListTypeModel) => {
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
  const urlListsRelation = oneToMany({
    model: urlList,
    relation: RELATION.urlLists,
  });

  // defined Model
  process.nextTick(() => {
    UrlListTypeModel.int(ATTRIBUTE.id, {
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

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(urlListsRelation)

      // table name
      .map(TABLE_NAME.URL_LIST_TYPE);
  });
});
