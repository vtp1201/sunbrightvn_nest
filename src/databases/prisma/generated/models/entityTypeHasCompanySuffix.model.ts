import { IsDefined, IsInt } from 'class-validator';

import './';

export class entityTypeHasCompanySuffix {
  @IsDefined()
  @IsInt()
  entityTypeId!: number;

  @IsDefined()
  @IsInt()
  companySuffixId!: number;
}
