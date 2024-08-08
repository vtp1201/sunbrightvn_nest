import { IsDefined, IsInt } from 'class-validator';

import './';

export class countryHasEntityTypeHasFileTemplate {
  @IsDefined()
  @IsInt()
  countryHasEntityTypeId!: number;

  @IsDefined()
  @IsInt()
  fileTemplateId!: number;
}
