import { createModel } from 'schemix';

import { campaignHasVoucherType, campaignType, customer } from '.';
import { deleted, oneToMany, oneToOne } from '../mixins';
import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/Campaign';

export default createModel(MODEL_NAME.CAMPAIGN, (CampaignModel) => {
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
  const campaignTypeRelation = oneToOne({
    attribute: ATTRIBUTE.campaignTypeId,
    model: campaignType,
    relation: RELATION.campaignType,
    option: { optional: true },
  });
  const campaignHasVoucherTypesRelation = oneToMany({
    model: campaignHasVoucherType,
    relation: RELATION.campaignHasVoucherTypes,
  });
  const customersRelation = oneToMany({
    model: customer,
    relation: RELATION.customers,
  });

  // defined Model
  process.nextTick(() => {
    CampaignModel.int(ATTRIBUTE.id, {
      id: true,
      map: COLUMN.id,
      default: {
        autoincrement: true,
      },
    })
      .string(ATTRIBUTE.name, {
        map: COLUMN.name,
        raw: RAW_STRING.LENGTH_100,
        optional: true,
      })
      .string(ATTRIBUTE.description, {
        map: COLUMN.description,
        raw: RAW_STRING.TEXT,
        optional: true,
      })
      .int(ATTRIBUTE.campaignTypeId, {
        map: COLUMN.campaignTypeId,
        optional: true,
      })

      // dateTime marks
      .mixin(initDeleted)

      // relations
      .mixin(campaignTypeRelation)
      .mixin(campaignHasVoucherTypesRelation)
      .mixin(customersRelation)

      // table name
      .map(TABLE_NAME.CAMPAIGN);
  });
});
