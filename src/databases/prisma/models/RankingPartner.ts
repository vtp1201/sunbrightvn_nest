import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/RankingPartner';
import { createdTime, deleted, updatedTime } from '../mixins';

export default createModel(
  MODEL_NAME.RANKING_PARTNER,
  (RankingPartnerModel) => {
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
      RankingPartnerModel.int(ATTRIBUTE.id, {
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
        .int(ATTRIBUTE.taskId, {
          map: COLUMN.taskId,
        })
        .int(ATTRIBUTE.ranking, {
          map: COLUMN.ranking,
          optional: true,
        })
        .int(ATTRIBUTE.rankingPartnerTypeId, {
          map: COLUMN.rankingPartnerTypeId,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // indexes
        .raw(INDEX.rankingPartnerTypeId)
        .raw(INDEX.taskId)

        // table name
        .map(TABLE_NAME.RANKING_PARTNER);
    });
  },
);
