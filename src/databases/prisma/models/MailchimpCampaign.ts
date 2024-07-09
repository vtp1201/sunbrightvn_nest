import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/MailchimpCampaign';
import { oneToMany } from '../mixins';
import { mailchimpCampaignMember, mailchimpSummary } from '.';

export default createModel(
  MODEL_NAME.MAILCHIMP_CAMPAIGN,
  (MailchimpCampaignModel) => {
    // defined Relations
    const mailchimpCampaignMembersRelation = oneToMany({
      model: mailchimpCampaignMember,
      relation: RELATION.mailchimpCampaignMembers,
    });
    const mailchimpSummariesRelation = oneToMany({
      model: mailchimpSummary,
      relation: RELATION.mailchimpSummaries,
    });

    // defined Model
    process.nextTick(() => {
      MailchimpCampaignModel.int(ATTRIBUTE.id, {
        id: true,
        map: COLUMN.id,
        default: {
          autoincrement: true,
        },
      })
        .string(ATTRIBUTE.name, {
          map: COLUMN.name,
          raw: RAW_STRING.LENGTH_225,
        })
        .string(ATTRIBUTE.workflowId, {
          map: COLUMN.workflowId,
          raw: RAW_STRING.LENGTH_45,
          optional: true,
        })
        .int(ATTRIBUTE.mailchimpTypeId, {
          map: COLUMN.mailchimpTypeId,
          optional: true,
        })
        .int(ATTRIBUTE.parentId, {
          map: COLUMN.parentId,
          optional: true,
        })

        // relations
        .mixin(mailchimpCampaignMembersRelation)
        .mixin(mailchimpSummariesRelation)

        // table name
        .map(TABLE_NAME.MAILCHIMP_CAMPAIGN);
    });
  },
);
