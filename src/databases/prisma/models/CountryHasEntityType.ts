import { createModel } from 'schemix';

import { country, entityType, fileTemplate } from '.';
import { oneToMany, oneToOne } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/CountryHasEntityType';

export default createModel(MODEL_NAME.COUNTRY_HAS_ENTITY_TYPE, (CountryHasEntityTypeModel) => {
  // defined relations
  const countryRelation = oneToOne({
    attribute: ATTRIBUTE.countryId,
    model: country,
    relation: RELATION.country,
  });
  const entityTypeRelation = oneToOne({
    attribute: ATTRIBUTE.entityTypeId,
    model: entityType,
    relation: RELATION.entityType,
  });
  const fileTemplatesRelation = oneToMany({
    model: fileTemplate,
    relation: RELATION.fileTemplates,
  });

  // defined Model
  process.nextTick(() => {
    CountryHasEntityTypeModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .int(ATTRIBUTE.countryId, {
        map: COLUMN.countryId,
      })
      .int(ATTRIBUTE.entityTypeId, {
        map: COLUMN.entityTypeId,
      })
      .boolean(ATTRIBUTE.isActive, {
        map: COLUMN.isActive,
        default: false,
      })
      .unique({
        fields: [ATTRIBUTE.countryId, ATTRIBUTE.entityTypeId],
      })

      // relations
      .mixin(countryRelation)
      .mixin(entityTypeRelation)
      .mixin(fileTemplatesRelation)

      // table name
      .map(TABLE_NAME.COUNTRY_HAS_ENTITY_TYPE);
  });
});
