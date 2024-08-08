import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { companyMember, country, customer, declarationTax, task } from './';

export class fatca {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsInt()
  companyMemberId?: number;

  @IsOptional()
  @IsInt()
  customerId?: number;

  @IsDefined()
  @IsInt()
  taskId!: number;

  @IsDefined()
  @IsString()
  holderName!: string;

  @IsDefined()
  @IsDate()
  holderBirthday!: Date;

  @IsOptional()
  @IsInt()
  holderCountryId?: number;

  @IsOptional()
  @IsString()
  residentAddress?: string;

  @IsOptional()
  @IsInt()
  residentCountryId?: number;

  @IsOptional()
  @IsString()
  residentCity?: string;

  @IsOptional()
  @IsString()
  residentState?: string;

  @IsOptional()
  @IsString()
  residentPostalCode?: string;

  @IsOptional()
  @IsString()
  mailingAddress?: string;

  @IsOptional()
  @IsInt()
  mailingCountryId?: number;

  @IsOptional()
  @IsString()
  mailingCity?: string;

  @IsOptional()
  @IsString()
  mailingState?: string;

  @IsOptional()
  @IsString()
  mailingPostalCode?: string;

  @IsOptional()
  @IsInt()
  optionDeclarationUSPerson?: number;

  @IsOptional()
  @IsString()
  taxpayerIdNumber?: string;

  @IsDefined()
  @IsDate()
  deletedTime!: Date;

  @IsDefined()
  @IsBoolean()
  isDeleted!: boolean;

  @IsDefined()
  declarationTaxes!: declarationTax[];

  @IsOptional()
  companyMember?: companyMember;

  @IsOptional()
  customer?: customer;

  @IsOptional()
  countryHolderCountry?: country;

  @IsOptional()
  mailingCountry?: country;

  @IsOptional()
  residentCountry?: country;

  @IsDefined()
  task!: task;
}
