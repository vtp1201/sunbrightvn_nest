import { IsDefined, IsInt } from 'class-validator';

import './';

export class customerHasBank {
  @IsDefined()
  @IsInt()
  customerId!: number;

  @IsDefined()
  @IsInt()
  bankId!: number;
}
