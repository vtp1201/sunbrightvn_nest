import { IsDefined, IsInt } from 'class-validator';

import './';

export class companyHasCurrency {
  @IsDefined()
  @IsInt()
  companyId!: number;

  @IsDefined()
  @IsInt()
  currencyId!: number;
}
