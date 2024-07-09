import { createModel } from 'schemix';

import { MODEL_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
} from '../utils/enums/FileTemplateHasRankingPartnerType';
import { manyToMany } from '../mixins';

export default createModel(
  MODEL_NAME.FILE_TEMPLATE_HAS_RANKING_PARTNER_TYPE,
  (FileTemplateHasRankingPartnerTypeModel) => {
    // relations
    const fileTemplateHasRankingPartnerType = manyToMany({
      attributeA: ATTRIBUTE.fileTemplateId,
      attributeB: ATTRIBUTE.rankingPartnerTypeId,
      modelNameA: MODEL_NAME.FILE_TEMPLATE,
      modelNameB: MODEL_NAME.RANKING_PARTNER_TYPE,
    });

    // defined Model
    process.nextTick(() => {
      FileTemplateHasRankingPartnerTypeModel.int(ATTRIBUTE.fileTemplateId, {
        map: COLUMN.fileTemplateId,
      })
        .int(ATTRIBUTE.rankingPartnerTypeId, {
          map: COLUMN.rankingPartnerTypeId,
        })
        .mixin(fileTemplateHasRankingPartnerType);
    });
  },
);
