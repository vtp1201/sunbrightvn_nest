import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  Min,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

class AnswerForTaskDTO {
  @IsInt()
  @Min(1)
  optionId: number;

  @IsOptional()
  @IsString()
  valueText?: string | null;

  @IsInt()
  @Min(1)
  questionId: number;

  @IsInt()
  @Min(0)
  isChosen: number;
}

class FileDTO {
  @IsOptional()
  @IsString()
  mimeType?: string | null;

  @IsOptional()
  @IsString()
  name?: string | null;

  @IsOptional()
  @IsString()
  s3Path?: string | null;
}

export class CreateOrUpdateDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnswerForTaskDTO)
  answersForTask: AnswerForTaskDTO[];

  @IsInt()
  @Min(1)
  companyMemberId: number;

  @IsInt()
  @Min(1)
  taskId: number;

  @IsOptional()
  @ValidateIf((o) => o.companyId !== '' && o.companyId !== null)
  @IsInt()
  @Min(1)
  @Type(() => Number) // Transform the value to a number if it's not null or empty string
  companyId?: number | null;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FileDTO)
  files: FileDTO[];
}
