import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { customer, service, visaOrder } from './';

export class airport {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsString()
  name?: string;

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
