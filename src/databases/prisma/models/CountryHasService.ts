import { createModel } from 'schemix';

import { country, entityType, service } from '.';
import { deleted, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/CountryHasService';

export default createModel(MODEL_NAME.COUNTRY_HAS_SERVICE, (CountryHasServiceModel) => {
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

  // defined relations
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: country,
    relation: RELATION.country,
    map: INDEX_NAME.countryId,
  });
  const serviceRelation = oneToOne({
    attribute: ATTRIBUTE.serviceId,
    model: service,
    relation: RELATION.service,
    map: INDEX_NAME.serviceId,
  });
  const entityTypeRelation = oneToOne({
    attribute: ATTRIBUTE.entityTypeId,
    model: entityType,
    relation: RELATION.entityType,
    map: INDEX_NAME.entityTypeId,
    option: { optional: true },
  });

  process.nextTick(() => {
    CountryHasServiceModel.int(ATTRIBUTE.countryId, {
      map: COLUMN.countryId,
    })
      .int(ATTRIBUTE.serviceId, {
        map: COLUMN.serviceId,
      })
      .int(ATTRIBUTE.entityTypeId, {
        map: COLUMN.entityTypeId,
        optional: true,
      })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_255,
        optional: true,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .json(ATTRIBUTE.dataConfig, {
        map: COLUMN.dataConfig,
        optional: true,
      })
      .boolean(ATTRIBUTE.isCalendar, {
        map: COLUMN.isCalendar,
        default: false,
      })
      .int(ATTRIBUTE.yearCurrent, {
        map: COLUMN.yearCurrent,
        default: 0,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(countryRelation)
      .mixin(serviceRelation)
      .mixin(entityTypeRelation)

      // indexes
      .raw(INDEX.countryId)
      .raw(INDEX.entityTypeId)
      .raw(INDEX.serviceId)

      // ids
      .id({
        fields: [ATTRIBUTE.countryId, ATTRIBUTE.serviceId],
      })

      // table name
      .map(TABLE_NAME.COUNTRY_HAS_SERVICE);
  });
});
