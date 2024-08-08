import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import {
  apiExample,
  changeRequest,
  company,
  companyEvent,
  companyMember,
  companyShare,
  fileTemplate,
  fileType,
  historyFile,
  message,
  note,
  order,
  questionGroup,
  rankingPartner,
  task,
  user,
} from './';

export class file {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  path?: string;

  @IsOptional()
  @IsString()
  mimeType?: string;

  @IsOptional()
  @IsString()
  s3Path?: string;

  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @IsInt()
  companyId?: number;

  @IsOptional()
  @IsInt()
  messageId?: number;

  @IsOptional()
  @IsInt()
  orderId?: number;

  @IsOptional()
  @IsInt()
  fileTypeId?: number;

  @IsOptional()
  @IsInt()
  taskId?: number;

  @IsOptional()
  @IsInt()
  fileTemplateId?: number;

  @IsOptional()
  @IsInt()
  filledByCompanyMemberId?: number;

  @IsDefined()
  @IsBoolean()
  isFilled!: boolean;

  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsString()
  ipAddress?: string;

  @IsOptional()
  @IsInt()
  noteId?: number;

  @IsOptional()
  @IsInt()
  bankId?: number;

  @IsOptional()
  @IsInt()
  rankingPartnerId?: number;

  @IsOptional()
  @IsInt()
  changeRequestId?: number;

  @IsOptional()
  @IsInt()
  companyMemberId?: number;

  @IsOptional()
  @IsInt()
  apiExampleId?: number;

  @IsOptional()
  @IsInt()
  questionGroupId?: number;

  @IsOptional()
  @IsInt()
  toCompanyMemberId?: number;

  @IsOptional()
  @IsInt()
  typeId?: number;

  @IsOptional()
  @IsInt()
  filledByUserId?: number;

  @IsDefined()
  @IsInt()
  status!: number;

  @IsOptional()
  @IsInt()
  companyEventId?: number;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsDefined()
  @IsDate()
  updatedTime!: Date;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  companyShares!: companyShare[];

  @IsOptional()
  changeRequest?: changeRequest;

  @IsOptional()
  company?: company;

  @IsOptional()
  companyMember?: companyMember;

  @IsOptional()
  fileTemplate?: fileTemplate;

  @IsOptional()
  fileType?: fileType;

  @IsOptional()
  filledByCompanyMember?: companyMember;

  @IsOptional()
  message?: message;

  @IsOptional()
  note?: note;

  @IsOptional()
  order?: order;

  @IsOptional()
  questionGroup?: questionGroup;

  @IsOptional()
  rankingPartner?: rankingPartner;

  @IsOptional()
  task?: task;

  @IsOptional()
  user?: user;

  @IsOptional()
  apiExample?: apiExample;

  @IsOptional()
  companyEvent?: companyEvent;

  @IsDefined()
  historyFiles!: historyFile[];
}
