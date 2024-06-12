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

export enum INDEX {
  mailchimpCampaignId = `@@index([${ATTRIBUTE.mailchimpCampaignId}], map: "fk_mai_mailchimp_campaign_id_mai_id_gjmi")`,
  mailchimpMemberEmailId = `@@index([${ATTRIBUTE.mailchimpMemberEmailId}], map: "fk_mai_mailchimp_member_email_id_mai_email_id_jbpa")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
