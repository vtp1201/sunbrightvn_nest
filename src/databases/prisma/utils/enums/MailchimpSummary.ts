import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  open = 'open',
  uniqueOpen = 'uniqueOpen',
  click = 'click',
  subscriberClick = 'subscriberClick',
  emailSent = 'emailSent',
  unsubscribed = 'unsubscribed',
  bounced = 'bounced',
  abusedReport = 'abusedReport',
  mailchimpCampaignId = 'mailchimpCampaignId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
}

export enum COLUMN {
  id = 'id',
  open = 'open',
  uniqueOpen = 'unique_open',
  click = 'click',
  subscriberClick = 'subscriber_click',
  emailSent = 'email_sent',
  unsubscribed = 'unsubscribed',
  bounced = 'bounced',
  abusedReport = 'abused_report',
  mailchimpCampaignId = 'mailchimp_campaign_id',
  createdTime = COLUMN_DEFAULT.createdTime,
}

export enum RELATION {
  mailchimpCampaign = RELATION_DEFAULT.mailchimpCampaign,
}

export enum INDEX {
  mailchimpCampaignId = `@@index([${ATTRIBUTE.mailchimpCampaignId}])`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
