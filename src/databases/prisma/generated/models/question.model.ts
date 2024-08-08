import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { answer, country, option, questionGroup, questionPriority, questionType } from './';

export class question {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  content!: string;

  @IsDefined()
  @IsBoolean()
  isBelongToFatca!: boolean;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  questionParentId?: number;

  @IsDefined()
  @IsInt()
  questionTypeId!: number;

  @IsOptional()
  @IsInt()
  questionPriorityId?: number;

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
  answers!: answer[];

  @IsDefined()
  countries!: country[];

  @IsDefined()
  options!: option[];

  @IsOptional()
  questionPriority?: questionPriority;

  @IsDefined()
  questionType!: questionType;

  @IsOptional()
  questionParent?: question;

  @IsDefined()
  children!: question[];

  @IsDefined()
  questionGroups!: questionGroup[];
}
