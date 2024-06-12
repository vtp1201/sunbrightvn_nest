import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  emailId = 'emailId',
  emailAddress = 'emailAddress',
  optInTime = 'optInTime',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  emailId = 'email_id',
  emailAddress = 'email_address',
  optInTime = 'opt_in_time',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  mailchimpCampaignMembers = RELATION_DEFAULT.mailchimpCampaignMembers,
}

export default {
  ATTRIBUTE,
  RELATION,
};
