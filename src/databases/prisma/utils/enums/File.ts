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

export enum INDEX {
  changeRequestId = `@@index([${ATTRIBUTE.changeRequestId}], map: "fk_change_request_file_id_idx")`,
  companyId = `@@index([${ATTRIBUTE.companyId}], map: "fk_fil_company_id_com_id_e3qa")`,
  companyMemberId = `@@index([${ATTRIBUTE.companyMemberId}], map: "fk_fil_company_member_id_com_id_jiat")`,
  fileTemplateId = `@@index([${ATTRIBUTE.fileTemplateId}], map: "fk_fil_file_template_id_fil_id_ev0d")`,
  fileTypeId = `@@index([${ATTRIBUTE.fileTypeId}], map: "fk_fil_file_type_id_fil_id_5psy")`,
  filledByCompanyMemberId = `@@index([${ATTRIBUTE.filledByCompanyMemberId}], map: "fk_fil_filled_by_company_member_id_com_id_1lvj")`,
  messageId = `@@index([${ATTRIBUTE.messageId}], map: "fk_fil_message_id_mes_id_2yvf")`,
  noteId = `@@index([${ATTRIBUTE.noteId}], map: "fk_fil_note_id_not_id_1rdz")`,
  orderId = `@@index([${ATTRIBUTE.orderId}], map: "fk_fil_order_id_ord_id_4pg2")`,
  questionGroupId = `@@index([${ATTRIBUTE.questionGroupId}], map: "fk_fil_question_group_id_que_id_1rji")`,
  rankingPartnerId = `@@index([${ATTRIBUTE.rankingPartnerId}], map: "fk_fil_ranking_partner_id_ran_id_fly1")`,
  taskId = `@@index([${ATTRIBUTE.taskId}], map: "fk_fil_task_id_tas_id_hjct")`,
  userId = `@@index([${ATTRIBUTE.userId}], map: "fk_fil_user_id_use_id_6ag1")`,
  apiExampleId = `@@index([${ATTRIBUTE.apiExampleId}], map: "fk_file_api_example")`,
  companyEventId = `@@index([${ATTRIBUTE.companyEventId}], map: "fk_file_company_event_id_idx")`,
}

export default {
  ATTRIBUTE,
  RELATION,
};
