import { IsDefined, IsInt } from 'class-validator';

import './';

export class orderHasBank {
  @IsDefined()
  @IsInt()
  bankId!: number;

  @IsDefined()
  @IsInt()
  orderId!: number;
}
