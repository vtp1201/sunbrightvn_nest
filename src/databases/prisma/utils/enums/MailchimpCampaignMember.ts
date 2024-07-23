import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  mailchimpMemberEmailId = 'mailchimpMemberEmailId',
  mailchimpCampaignId = 'mailchimpCampaignId',
  convDate = 'convDate',
  type = 'type',
  reason = 'reason',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
}

export enum COLUMN {
  id = 'id',
  mailchimpMemberEmailId = 'mailchimp_member_email_id',
  mailchimpCampaignId = 'mailchimp_campaign_id',
  convDate = 'conv_date',
  type = 'type',
  reason = 'reason',
  createdTime = COLUMN_DEFAULT.createdTime,
}

export enum RELATION {
  mailchimpCampaign = RELATION_DEFAULT.mailchimpCampaign,
  mailchimpMember = RELATION_DEFAULT.mailchimpMember,
}

const tableName = TABLE_NAME.MAILCHIMP_CAMPAIGN_MEMBER;
export enum INDEX_NAME {
  mailchimpCampaignId = `"${tableName}_${COLUMN.mailchimpCampaignId}_fkey"`,
  mailchimpMemberEmailId = `"${tableName}_${COLUMN.mailchimpMemberEmailId}_fkey"`,
}

export enum INDEX {
  mailchimpCampaignId = `@@index([${ATTRIBUTE.mailchimpCampaignId}], map: ${INDEX_NAME.mailchimpCampaignId})`,
  mailchimpMemberEmailId = `@@index([${ATTRIBUTE.mailchimpMemberEmailId}], map: ${INDEX_NAME.mailchimpMemberEmailId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
