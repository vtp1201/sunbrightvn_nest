import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import {
  ATTRIBUTE,
  COLUMN,
  INDEX,
} from '../utils/enums/MailchimpCampaignMember';
import { createdTime } from '../mixins';

export default createModel(
  MODEL_NAME.MAILCHIMP_CAMPAIGN_MEMBER,
  (MailchimpCampaignMemberModel) => {
    const initCreatedTime = createdTime({
      attribute: ATTRIBUTE.createdTime,
      column: COLUMN.createdTime,
    });

    // defined Model
    process.nextTick(() => {
      MailchimpCampaignMemberModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .string(ATTRIBUTE.mailchimpMemberEmailId, {
          map: COLUMN.mailchimpMemberEmailId,
          raw: RAW_STRING.LENGTH_255,
          optional: true,
        })
        .int(ATTRIBUTE.mailchimpCampaignId, {
          map: COLUMN.mailchimpCampaignId,
        })
        .string(ATTRIBUTE.convDate, {
          map: COLUMN.convDate,
          raw: RAW_STRING.LENGTH_255,
          optional: true,
        })
        .string(ATTRIBUTE.type, {
          map: COLUMN.type,
          raw: RAW_STRING.LENGTH_255,
          optional: true,
        })
        .string(ATTRIBUTE.reason, {
          map: COLUMN.reason,
          raw: RAW_STRING.LENGTH_255,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)

        // indexes
        .raw(INDEX.mailchimpCampaignId)
        .raw(INDEX.mailchimpMemberEmailId)

        // table name
        .map(TABLE_NAME.MAILCHIMP_CAMPAIGN_MEMBER);
    });
  },
);
