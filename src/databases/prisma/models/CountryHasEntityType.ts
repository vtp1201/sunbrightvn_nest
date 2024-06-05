import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CountryHasEntityType';

export default createModel(
  MODEL_NAME.COUNTRY_HAS_ENTITY_TYPE,
  (CountryHasEntityTypeModel) => {
    CountryHasEntityTypeModel.int(ATTRIBUTE.countryId, {
      map: COLUMN.countryId,
    })
      .int(ATTRIBUTE.entityTypeId, {
        map: COLUMN.entityTypeId,
      })
      .id({
        fields: [ATTRIBUTE.countryId, ATTRIBUTE.entityTypeId],
      })

      // table name
      .map(TABLE_NAME.COUNTRY_HAS_ENTITY_TYPE);
  },
);
