import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { contactFrom, customer } from './';

export class contactFromHistory {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  customerId!: number;

  @IsDefined()
  @IsInt()
  contactFromId!: number;

  @IsOptional()
  @IsString()
  tagName?: string;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsDefined()
  @IsDate()
  updatedTime!: Date;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  contactFrom!: contactFrom;

  @IsDefined()
  customer!: customer;
}
