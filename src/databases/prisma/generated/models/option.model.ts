import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { answer, question, toolBusinessEntity } from './';

export class option {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  content!: string;

  @IsDefined()
  @IsInt()
  questionId!: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  answers!: answer[];

  @IsDefined()
  question!: question;

  @IsDefined()
  toolBusinessEntities!: toolBusinessEntity[];
}
