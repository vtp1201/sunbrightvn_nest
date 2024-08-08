import { IsBoolean, IsDate, IsDefined, IsInt, IsString } from 'class-validator';

import { customer, service, visaOrder } from './';

export class visaPurpose {
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
  customers!: customer[];

  @IsDefined()
  services!: service[];

  @IsDefined()
  visaOrders!: visaOrder[];
}
