import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { contactFromHistory, customer, mailchimpTag } from './';

export class contactFrom {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDefined()
  @IsInt()
  type!: number;

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
  contactFromHistories!: contactFromHistory[];

  @IsDefined()
  customers!: customer[];

  @IsDefined()
  mailchimpTags!: mailchimpTag[];
}
