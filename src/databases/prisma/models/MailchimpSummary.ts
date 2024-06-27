import { createModel } from 'schemix';

import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX } from '../utils/enums/MailchimpSummary';
import { createdTime } from '../mixins';

export default createModel(
  MODEL_NAME.MAILCHIMP_SUMMARY,
  (MailchimpSummaryModel) => {
    const initCreatedTime = createdTime({
      attribute: ATTRIBUTE.createdTime,
      column: COLUMN.createdTime,
    });

    // defined Model
    process.nextTick(() => {
      MailchimpSummaryModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .int(ATTRIBUTE.open, {
          map: COLUMN.open,
          optional: true,
        })
        .int(ATTRIBUTE.uniqueOpen, {
          map: COLUMN.uniqueOpen,
          optional: true,
        })
        .int(ATTRIBUTE.click, {
          map: COLUMN.click,
          optional: true,
        })
        .int(ATTRIBUTE.subscriberClick, {
          map: COLUMN.subscriberClick,
          optional: true,
        })
        .int(ATTRIBUTE.emailSent, {
          map: COLUMN.emailSent,
          optional: true,
        })
        .int(ATTRIBUTE.unsubscribed, {
          map: COLUMN.unsubscribed,
          optional: true,
        })
        .int(ATTRIBUTE.bounced, {
          map: COLUMN.bounced,
          optional: true,
        })
        .int(ATTRIBUTE.abusedReport, {
          map: COLUMN.abusedReport,
          optional: true,
        })
        .int(ATTRIBUTE.mailchimpCampaignId, {
          map: COLUMN.mailchimpCampaignId,
          optional: true,
        })

        // dateTime marks
        .mixin(initCreatedTime)

        // indexes
        // .raw(INDEX.mailchimpCampaignId)

        // table name
        .map(TABLE_NAME.MAILCHIMP_SUMMARY);
    });
  },
);
