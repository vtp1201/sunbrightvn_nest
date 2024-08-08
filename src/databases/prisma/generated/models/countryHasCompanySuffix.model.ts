import { IsDefined, IsInt } from 'class-validator';

import './';

export class countryHasCompanySuffix {
  @IsDefined()
  @IsInt()
  countryId!: number;

  @IsDefined()
  @IsInt()
  companySuffixId!: number;
}
