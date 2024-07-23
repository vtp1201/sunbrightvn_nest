import { createModel } from 'schemix';

import { mailchimpCampaign } from '.';
import { createdTime, oneToOne } from '../mixins';
import { MODEL_NAME, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, INDEX, INDEX_NAME, RELATION } from '../utils/enums/MailchimpSummary';

export default createModel(MODEL_NAME.MAILCHIMP_SUMMARY, (MailchimpSummaryModel) => {
  const initCreatedTime = createdTime({
    attribute: ATTRIBUTE.createdTime,
    column: COLUMN.createdTime,
  });

  // defined Relations
  const mailchimpCampaignRelation = oneToOne({
    attribute: ATTRIBUTE.mailchimpCampaignId,
    map: INDEX_NAME.mailchimpCampaignId,
    model: mailchimpCampaign,
    relation: RELATION.mailchimpCampaign,
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
      })

      // dateTime marks
      .mixin(initCreatedTime)

      // relations
      .mixin(mailchimpCampaignRelation)

      // indexes
      .raw(INDEX.mailchimpCampaignId)

      // table name
      .map(TABLE_NAME.MAILCHIMP_SUMMARY);
  });
});
