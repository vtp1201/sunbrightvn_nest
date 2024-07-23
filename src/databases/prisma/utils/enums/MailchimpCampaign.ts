import { RELATION_DEFAULT } from './default';

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
  mailchimpCampaignMembers = RELATION_DEFAULT.mailchimpCampaignMembers,
  mailchimpSummaries = RELATION_DEFAULT.mailchimpSummaries,
}

export default {
  ATTRIBUTE,
  RELATION,
};
