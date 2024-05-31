import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME, RAW_STRING } from '../utils';
import { ATTRIBUTE, COLUMN } from '../utils/enums/CampaignType';
import { deleted } from '../mixins';

export default createModel(MODEL_NAME.CAMPAIGN_TYPE, (CampaignTypeModel) => {
  CampaignTypeModel.int(ATTRIBUTE.id, {
    id: true,
    map: COLUMN.id,
    default: {
      autoincrement: true,
    },
  })
    .string(ATTRIBUTE.name, {
      map: COLUMN.name,
      raw: RAW_STRING.LENGTH_225,
      optional: true,
    })

    // dateTime marks
    .mixin(deleted)

    // table name
    .map(TABLE_NAME.CAMPAIGN_TYPE);
});
