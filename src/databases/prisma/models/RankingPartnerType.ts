import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/RankingPartnerType';
import { createdTime, deleted, oneToMany, updatedTime } from '../mixins';
import { fileTemplate, rankingPartner } from '.';

export default createModel(
  MODEL_NAME.RANKING_PARTNER_TYPE,
  (RankingPartnerTypeModel) => {
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
    const rankingPartnersRelation = oneToMany({
      model: rankingPartner,
      relation: RELATION.rankingPartners,
    });
    const fileTemplatesRelation = oneToMany({
      model: fileTemplate,
      relation: RELATION.fileTemplates,
    });

    // defined Model
    process.nextTick(() => {
      RankingPartnerTypeModel.int(ATTRIBUTE.id, {
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

        // dateTime marks
        .mixin(initCreatedTime)
        .mixin(initUpdatedTime)
        .mixin(initDeleted)

        // relations
        .mixin(rankingPartnersRelation)
        .mixin(fileTemplatesRelation)

        // table name
        .map(TABLE_NAME.RANKING_PARTNER_TYPE);
    });
  },
);
