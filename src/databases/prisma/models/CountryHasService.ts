import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CountryHasService';

export default createModel(
  MODEL_NAME.COUNTRY_HAS_SERVICE,
  (CountryHasServiceModel) => {
    CountryHasServiceModel.int(ATTRIBUTE.countryId, {
      map: COLUMN.countryId,
    })
      .int(ATTRIBUTE.serviceId, {
        map: COLUMN.serviceId,
      })
      .id({
        fields: [ATTRIBUTE.countryId, ATTRIBUTE.serviceId],
      })

      // table name
      .map(TABLE_NAME.COUNTRY_HAS_SERVICE);
  },
);
