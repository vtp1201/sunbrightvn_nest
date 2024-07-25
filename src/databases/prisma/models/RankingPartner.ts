import { createModel } from 'schemix';

import { file, rankingPartnerType, task } from '.';
import { createdTime, deleted, oneToMany, oneToOne, updatedTime } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/RankingPartner';

export default createModel(MODEL_NAME.RANKING_PARTNER, (RankingPartnerModel) => {
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

  // defined Relations
  const filesRelation = oneToMany({
    model: file,
    relation: RELATION.files,
  });
  const rankingPartnerTypeRelation = oneToOne({
    attribute: ATTRIBUTE.rankingPartnerTypeId,
    map: INDEX_NAME.rankingPartnerTypeId,
    model: rankingPartnerType,
    relation: RELATION.rankingPartnerType,
  });
  const taskRelation = oneToOne({
    attribute: ATTRIBUTE.taskId,
    map: INDEX_NAME.taskId,
    model: task,
    relation: RELATION.task,
  });

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
      })

      // dateTime marks
      .mixin(initCreatedTime)
      .mixin(initUpdatedTime)
      .mixin(initDeleted)

      // relations
      .mixin(filesRelation)
      .mixin(rankingPartnerTypeRelation)
      .mixin(taskRelation)

      // indexes
      .raw(INDEX.rankingPartnerTypeId)
      .raw(INDEX.taskId)

      // table name
      .map(TABLE_NAME.RANKING_PARTNER);
  });
});
