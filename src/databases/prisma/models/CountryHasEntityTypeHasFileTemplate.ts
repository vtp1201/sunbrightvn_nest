import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CountryHasEntityTypeHasFileTemplate';

export default createModel(
  MODEL_NAME.COUNTRY_HAS_ENTITY_TYPE_HAS_FILE_TEMPLATE,
  (CountryHasEntityTypeHasFileTemplateModel) => {
    CountryHasEntityTypeHasFileTemplateModel.int(ATTRIBUTE.countryHasEntityTypeId, {
      map: COLUMN.countryHasEntityTypeId,
    })
      .int(ATTRIBUTE.fileTemplateId, {
        map: COLUMN.fileTemplateId,
      })
      .id({
        fields: [ATTRIBUTE.countryHasEntityTypeId, ATTRIBUTE.fileTemplateId],
      })

      // table name
      .map(TABLE_NAME.COUNTRY_HAS_ENTITY_TYPE_HAS_FILE_TEMPLATE);
  },
);
