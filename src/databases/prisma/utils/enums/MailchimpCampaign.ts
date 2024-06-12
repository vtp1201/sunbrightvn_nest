import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  workflowId = 'workflowId',
  mailchimpTypeId = 'mailchimpTypeId',
  parentId = 'parentId',
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  workflowId = 'workflow_id',
  mailchimpTypeId = 'mailchimp_type_id',
  parentId = 'parent_id',
}

export enum RELATION {
  mailchimpCampaignMember = RELATION_DEFAULT.mailchimpCampaignMember,
  mailchimpSummaries = RELATION_DEFAULT.mailchimpSummaries,
}

export enum INDEX {}

export default {
  ATTRIBUTE,
  RELATION,
};
