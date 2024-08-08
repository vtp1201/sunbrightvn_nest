import { IsDefined, IsInt } from 'class-validator';

import './';

export class companyHasOperationCountry {
  @IsDefined()
  @IsInt()
  companyId!: number;

  @IsDefined()
  @IsInt()
  countryId!: number;
}
