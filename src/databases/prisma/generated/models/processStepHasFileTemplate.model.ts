import { IsBoolean, IsDefined, IsInt, IsOptional } from 'class-validator';

import { fileTemplate, processStep } from './';

export class processStepHasFileTemplate {
  @IsDefined()
  @IsInt()
  processStepId!: number;

  @IsDefined()
  @IsInt()
  fileTemplateId!: number;

  @IsOptional()
  @IsInt()
  order?: number;

  @IsDefined()
  @IsBoolean()
  isBegin!: boolean;

  @IsDefined()
  processStep!: processStep;

  @IsDefined()
  fileTemplate!: fileTemplate;
}
