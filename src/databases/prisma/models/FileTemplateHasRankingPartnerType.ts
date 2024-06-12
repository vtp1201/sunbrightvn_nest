import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
} from '../utils/enums/FileTemplateHasRankingPartnerType';

export default createModel(
  MODEL_NAME.FILE_TEMPLATE_HAS_RANKING_PARTNER_TYPE,
  (FileTemplateHasRankingPartnerTypeModel) => {
    // defined Model
    process.nextTick(() => {
      FileTemplateHasRankingPartnerTypeModel.int(ATTRIBUTE.fileTemplateId, {
        map: COLUMN.fileTemplateId,
      })
        .int(ATTRIBUTE.rankingPartnerTypeId, {
          map: COLUMN.rankingPartnerTypeId,
        })

        // ids
        .id({
          fields: [ATTRIBUTE.fileTemplateId, ATTRIBUTE.rankingPartnerTypeId],
        })

        // table name
        .map(TABLE_NAME.FILE_TEMPLATE_HAS_RANKING_PARTNER_TYPE);
    });
  },
);
