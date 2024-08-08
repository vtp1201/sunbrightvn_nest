import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { emailTemplate } from './';

export class emailType {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsString()
  name?: string;

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
  emailTemplates!: emailTemplate[];
}
