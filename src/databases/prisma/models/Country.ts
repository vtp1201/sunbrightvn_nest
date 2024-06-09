import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/Country';
import { deleted } from '../mixins';

export default createModel(MODEL_NAME.COUNTRY, (CountryModel) => {
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
    CountryModel.int(ATTRIBUTE.id, {
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
      .string(ATTRIBUTE.guid, {
        map: COLUMN.guid,
        raw: RAW_STRING.LENGTH_100,
        unique: true,
      })
      .string(ATTRIBUTE.countryCode, {
        map: COLUMN.countryCode,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.phoneCode, {
        map: COLUMN.phoneCode,
        raw: RAW_STRING.LENGTH_45,
        optional: true,
      })
      .string(ATTRIBUTE.subName, {
        map: COLUMN.subName,
        raw: RAW_STRING.LENGTH_255,
      })
      .boolean(ATTRIBUTE.isRestricted, {
        map: COLUMN.isRestricted,
        default: false,
      })
      .boolean(ATTRIBUTE.isCountry, {
        map: COLUMN.isCountry,
        default: false,
      })
      .int(ATTRIBUTE.continentId, {
        map: COLUMN.continentId,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // table name
      .map(TABLE_NAME.COUNTRY);
  });
});
