import { createModel } from 'schemix';

import { supportCase } from '.';
import { deleted, oneToMany } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/SupportCaseStatus';

export default createModel(MODEL_NAME.SUPPORT_CASE_STATUS, (SupportCaseStatusModel) => {
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
  const supportCasesRelation = oneToMany({
    model: supportCase,
    relation: RELATION.supportCases,
  });

  // defined Model
  process.nextTick(() => {
    SupportCaseStatusModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_100,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.LENGTH_200,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(supportCasesRelation)

      // table name
      .map(TABLE_NAME.SUPPORT_CASE_STATUS);
  });
});
