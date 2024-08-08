import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { file, fileTemplate, question } from './';

export class questionGroup {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsInt()
  left?: number;

  @IsOptional()
  @IsInt()
  right?: number;

  @IsOptional()
  @IsInt()
  fileTemplateId?: number;

  @IsOptional()
  @IsInt()
  order?: number;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  files!: file[];

  @IsDefined()
  questions!: question[];

  @IsOptional()
  fileTemplate?: fileTemplate;
}
