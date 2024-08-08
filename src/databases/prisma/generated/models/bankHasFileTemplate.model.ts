import { IsDefined, IsInt } from 'class-validator';

import './';

export class bankHasFileTemplate {
  @IsDefined()
  @IsInt()
  bankId!: number;

  @IsDefined()
  @IsInt()
  fileTemplateId!: number;
}
