import { IsDefined, IsInt } from 'class-validator';

import './';

export class supportCaseHasOrder {
  @IsDefined()
  @IsInt()
  supportCaseId!: number;

  @IsDefined()
  @IsInt()
  orderId!: number;
}
