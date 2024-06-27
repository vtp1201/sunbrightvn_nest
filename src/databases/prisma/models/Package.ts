import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/Package';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(MODEL_NAME.PACKAGE, (PackageModel) => {
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
    PackageModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.serviceTypeId, {
        map: COLUMN.serviceTypeId,
      })
      .int(ATTRIBUTE.packageTypeId, {
        map: COLUMN.packageTypeId,
      })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
      })
      .int(ATTRIBUTE.websiteId, {
        map: COLUMN.websiteId,
      })
      .int(ATTRIBUTE.entityTypeId, {
        map: COLUMN.entityTypeId,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.TEXT,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .string(ATTRIBUTE.xeroItemId, {
        map: COLUMN.xeroItemId,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.xeroItemCode, {
        map: COLUMN.xeroItemCode,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .int(ATTRIBUTE.packageGroupId, {
        map: COLUMN.packageGroupId,
      })
      .int(ATTRIBUTE.packageAnnualId, {
        map: COLUMN.packageAnnualId,
        optional: true,
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // indexes
      // .raw(INDEX.countryId)
      // .raw(INDEX.entityTypeId)
      // .raw(INDEX.packageAnnualId)
      // .raw(INDEX.packageGroupId)
      // .raw(INDEX.packageTypeId)
      // .raw(INDEX.serviceTypeId)
      // .raw(INDEX.websiteId)

      // table name
      .map(TABLE_NAME.PACKAGE);
  });
});
