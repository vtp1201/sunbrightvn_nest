import { TABLE_NAME } from '../constants';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
  path = 'path',
  mimeType = 'mimeType',
  s3Path = 's3Path',
  userId = 'userId',
  companyId = 'companyId',
  messageId = 'messageId',
  orderId = 'orderId',
  fileTypeId = 'fileTypeId',
  taskId = 'taskId',
  fileTemplateId = 'fileTemplateId',
  filledByCompanyMemberId = 'filledByCompanyMemberId',
  isFilled = 'isFilled',
  fullName = 'fullName',
  ipAddress = 'ipAddress',
  noteId = 'noteId',
  bankId = 'bankId',
  rankingPartnerId = 'rankingPartnerId',
  changeRequestId = 'changeRequestId',
  companyMemberId = 'companyMemberId',
  apiExampleId = 'apiExampleId',
  questionGroupId = 'questionGroupId',
  toCompanyMemberId = 'toCompanyMemberId',
  typeId = 'typeId',
  filledByUserId = 'filledByUserId',
  status = 'status',
  companyEventId = 'companyEventId',
  createdTime = ATTRIBUTE_DEFAULT.createdTime,
  updatedTime = ATTRIBUTE_DEFAULT.updatedTime,
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  id = 'id',
  name = 'name',
  path = 'path',
  mimeType = 'mime_type',
  s3Path = 's3_path',
  userId = 'user_id',
  companyId = 'company_id',
  messageId = 'message_id',
  orderId = 'order_id',
  fileTypeId = 'file_type_id',
  taskId = 'task_id',
  fileTemplateId = 'file_template_id',
  filledByCompanyMemberId = 'filled_by_company_member_id',
  isFilled = 'is_filled',
  fullName = 'full_name',
  ipAddress = 'ip_address',
  noteId = 'note_id',
  bankId = 'bank_id',
  rankingPartnerId = 'ranking_partner_id',
  changeRequestId = 'change_request_id',
  companyMemberId = 'company_member_id',
  apiExampleId = 'api_example_id',
  questionGroupId = 'question_group_id',
  toCompanyMemberId = 'to_company_member_id',
  typeId = 'type_id',
  filledByUserId = 'filled_by_user_id',
  status = 'status',
  companyEventId = 'company_event_id',
  createdTime = COLUMN_DEFAULT.createdTime,
  updatedTime = COLUMN_DEFAULT.updatedTime,
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  changeRequest = RELATION_DEFAULT.changeRequest,
  company = RELATION_DEFAULT.company,
  companyMember = RELATION_DEFAULT.companyMember,
  fileTemplate = RELATION_DEFAULT.fileTemplate,
  fileType = RELATION_DEFAULT.fileType,
  filledByCompanyMember = RELATION_DEFAULT.filledByCompanyMember,
  message = RELATION_DEFAULT.message,
  note = RELATION_DEFAULT.note,
  order = RELATION_DEFAULT.order,
  questionGroup = RELATION_DEFAULT.questionGroup,
  rankingPartner = RELATION_DEFAULT.rankingPartner,
  task = RELATION_DEFAULT.task,
  user = RELATION_DEFAULT.user,
  apiExample = RELATION_DEFAULT.apiExample,
  companyEvent = RELATION_DEFAULT.companyEvent,
  companyShares = RELATION_DEFAULT.companyShares,
  historyFiles = RELATION_DEFAULT.historyFiles,
}

const tableName = TABLE_NAME.FILE;
export enum INDEX_NAME {
  changeRequestId = `"${tableName}_${COLUMN.changeRequestId}_fkey"`,
  companyId = `"${tableName}_${COLUMN.companyId}_fkey"`,
  companyMemberId = `"${tableName}_${COLUMN.companyMemberId}_fkey"`,
  fileTemplateId = `"${tableName}_${COLUMN.fileTemplateId}_fkey"`,
  fileTypeId = `"${tableName}_${COLUMN.fileTypeId}_fkey"`,
  filledByCompanyMemberId = `"${tableName}_${COLUMN.filledByCompanyMemberId}_fkey"`,
  messageId = `"${tableName}_${COLUMN.messageId}_fkey"`,
  noteId = `"${tableName}_${COLUMN.noteId}_fkey"`,
  orderId = `"${tableName}_${COLUMN.orderId}_fkey"`,
  questionGroupId = `"${tableName}_${COLUMN.questionGroupId}_fkey"`,
  rankingPartnerId = `"${tableName}_${COLUMN.rankingPartnerId}_fkey"`,
  taskId = `"${tableName}_${COLUMN.taskId}_fkey"`,
  userId = `"${tableName}_${COLUMN.userId}_fkey"`,
  apiExampleId = `"${tableName}_${COLUMN.apiExampleId}_fkey"`,
  companyEventId = `"${tableName}_${COLUMN.companyEventId}_fkey"`,
}

export enum INDEX {
  changeRequestId = `@@index([${ATTRIBUTE.changeRequestId}], map: ${INDEX_NAME.changeRequestId})`,
  companyId = `@@index([${ATTRIBUTE.companyId}], map: ${INDEX_NAME.companyId})`,
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: ${INDEX_NAME.companyMemberId})`,
  fileTemplateId = `@@index([${ATTRIBUTE.fileTemplateId}], map: ${INDEX_NAME.fileTemplateId})`,
  fileTypeId = `@@index([${ATTRIBUTE.fileTypeId}], map: ${INDEX_NAME.fileTypeId})`,
  filledByCompanyMemberId = `@@index([${ATTRIBUTE.filledByCompanyMemberId}], map: ${INDEX_NAME.filledByCompanyMemberId})`,
  messageId = `@@index([${ATTRIBUTE.messageId}], map: ${INDEX_NAME.messageId})`,
  noteId = `@@index([${ATTRIBUTE.noteId}], map: ${INDEX_NAME.noteId})`,
  orderId = `@@index([${ATTRIBUTE.orderId}], map: ${INDEX_NAME.orderId})`,
  questionGroupId = `@@index([${ATTRIBUTE.questionGroupId}], map: ${INDEX_NAME.questionGroupId})`,
  rankingPartnerId = `@@index([${ATTRIBUTE.rankingPartnerId}], map: ${INDEX_NAME.rankingPartnerId})`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: ${INDEX_NAME.taskId})`,
  userId = `@@index([${ATTRIBUTE.userId}], map: ${INDEX_NAME.userId})`,
  apiExampleId = `@@index([${ATTRIBUTE.apiExampleId}], map: ${INDEX_NAME.apiExampleId})`,
  companyEventId = `@@index([${ATTRIBUTE.companyEventId}], map: ${INDEX_NAME.companyEventId})`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
