import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { company, companyMember, country, option, question, task } from './';

export class answer {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsInt()
  valueInt?: number;

  @IsOptional()
  @IsString()
  valueText?: string;

  @IsDefined()
  @IsInt()
  optionId!: number;

  @IsOptional()
  @IsInt()
  taskId?: number;

  @IsOptional()
  @IsInt()
  fatcaId?: number;

  @IsOptional()
  @IsInt()
  selectCountryId?: number;

  @IsOptional()
  @IsInt()
  companyMemberId?: number;

  @IsOptional()
  @IsInt()
  questionId?: number;

  @IsOptional()
  @IsInt()
  companyId?: number;

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
  option!: option;

  @IsOptional()
  companyMember?: companyMember;

  @IsOptional()
  task?: task;

  @IsOptional()
  question?: question;

  @IsOptional()
  country?: country;

  @IsOptional()
  company?: company;
}
