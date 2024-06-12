import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/GrantScheme';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.GRANT_SCHEME, (GrantSchemeModel) => {
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

  // defined Model
  process.nextTick(() => {
    GrantSchemeModel.int(ATTRIBUTE.id, {
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
        optional: true,
        raw: RAW_STRING.TEXT,
      })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
        optional: true,
      })
      .string(ATTRIBUTE.keyFacts, {
        map: COLUMN.keyFacts,
        optional: true,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.introduction, {
        map: COLUMN.introduction,
        optional: true,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.benefits, {
        map: COLUMN.benefits,
        optional: true,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.eligibility, {
        map: COLUMN.eligibility,
        optional: true,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.howToApply, {
        map: COLUMN.howToApply,
        optional: true,
        raw: RAW_STRING.TEXT,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      .raw(INDEX.countryId)

      // table name
      .map(TABLE_NAME.GRANT_SCHEME);
  });
});
