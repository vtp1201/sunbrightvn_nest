import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  taskId = 'taskId',
  bankId = 'bankId',
  status = 'status',
  clientTime = 'clientTime',
  content = 'content',
  bankBranchId = 'bankBranchId',
  contactPerson = 'contactPerson',
  titleJob = 'titleJob',
  phone = 'phone',
  applicationSetTrackingCode = 'applicationSetTrackingCode',
  applicationFormTrackingCode = 'applicationFormTrackingCode',
  urlVideo = 'urlVideo',
  phoneCountryId = 'phoneCountryId',
  phoneNumber = 'phoneNumber',
  bankAddress = 'bankAddress',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
}

export enum COLUMN {
  id = 'id',
  taskId = 'task_id',
  bankId = 'bank_id',
  status = 'status',
  clientTime = 'client_time',
  content = 'content',
  bankBranchId = 'bank_branch_id',
  contactPerson = 'contact_person',
  titleJob = 'title_job',
  phone = 'phone',
  applicationSetTrackingCode = 'application_set_tracking_code',
  applicationFormTrackingCode = 'application_form_tracking_code',
  urlVideo = 'url_video',
  phoneCountryId = 'phone_country_id',
  phoneNumber = 'phone_number',
  bankAddress = 'bank_address',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
  deletedTime = COLUMN_DEFAULT.deletedTime,
}

export enum RELATION {
  bankBranch = RELATION_DEFAULT.bankBranch,
  bank = RELATION_DEFAULT.bank,
  country = RELATION_DEFAULT.country,
  task = RELATION_DEFAULT.task,
  process = RELATION_DEFAULT.process,
  proposedTime = RELATION_DEFAULT.proposedTime,
}
export default {
  ATTRIBUTE,
  RELATION,
};
