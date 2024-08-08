import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { order } from './';

export class paymentGateway {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  orders!: order[];
}
