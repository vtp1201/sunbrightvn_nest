import { IsDefined, IsInt } from 'class-validator';

import './';

export class serviceChangeOfficerHasFileTemplate {
  @IsDefined()
  @IsInt()
  serviceChangeOfficerId!: number;

  @IsDefined()
  @IsInt()
  fileTemplateId!: number;
}
