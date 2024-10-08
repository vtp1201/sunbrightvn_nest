import { createModel } from 'schemix';

import { campaign } from '.';
import { deleted, oneToMany } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/CampaignType';

export default createModel(MODEL_NAME.CAMPAIGN_TYPE, (CampaignTypeModel) => {
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
  const campaignsRelation = oneToMany({
    model: campaign,
    relation: RELATION.campaigns,
  });

  // defined Model
  process.nextTick(() => {
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
      .mixin(initDeleted)

      // relations
      .mixin(campaignsRelation)

      // table name
      .map(TABLE_NAME.CAMPAIGN_TYPE);
  });
});
