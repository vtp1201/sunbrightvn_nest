import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { companyMember, order, task } from './';

export class paymentInformation {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsInt()
  companyMemberId?: number;

  @IsOptional()
  @IsInt()
  orderId?: number;

  @IsOptional()
  @IsInt()
  taskId?: number;

  @IsOptional()
  @IsDate()
  dateOfPayment?: Date;

  @IsOptional()
  @IsInt()
  paymentAmount?: number;

  @IsOptional()
  @IsString()
  nameOnCard?: string;

  @IsOptional()
  @IsInt()
  lastFourDigitsOnCard?: number;

  @IsOptional()
  @IsDate()
  expiredDateOfCard?: Date;

  @IsOptional()
  @IsString()
  issuingBank?: string;

  @IsOptional()
  @IsString()
  emailAddressOfCardholder?: string;

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

  @IsOptional()
  companyMember?: companyMember;

  @IsOptional()
  order?: order;

  @IsOptional()
  task?: task;
}
