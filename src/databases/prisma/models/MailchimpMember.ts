import { createModel } from 'schemix';

import { MODEL_NAME, RAW_STRING, TABLE_NAME } from '../utils';
import { ATTRIBUTE, COLUMN, RELATION } from '../utils/enums/MailchimpMember';
import { deleted, oneToMany } from '../mixins';
import { mailchimpCampaignMember } from '.';

export default createModel(
  MODEL_NAME.MAILCHIMP_MEMBER,
  (MailchimpMemberModel) => {
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
    const mailchimpCampaignMembersRelation = oneToMany({
      model: mailchimpCampaignMember,
      relation: RELATION.mailchimpCampaignMembers,
    });

    // defined Model
    process.nextTick(() => {
      MailchimpMemberModel.string(ATTRIBUTE.emailId, {
        id: true,
        map: COLUMN.emailId,
        raw: RAW_STRING.LENGTH_255,
      })
        .string(ATTRIBUTE.emailAddress, {
          map: COLUMN.emailAddress,
          raw: RAW_STRING.LENGTH_255,
        })
        .dateTime(ATTRIBUTE.optInTime, {
          map: COLUMN.optInTime,
          optional: true,
        })

        // dateTime marks
        .mixin(initDeleted)

        // relations
        .mixin(mailchimpCampaignMembersRelation)

        // table name
        .map(TABLE_NAME.MAILCHIMP_MEMBER);
    });
  },
);
