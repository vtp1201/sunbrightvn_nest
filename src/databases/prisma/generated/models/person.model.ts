import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import { country, customer, gender, process, titleName, user } from './';

export class person {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsInt()
  countryId?: number;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsInt()
  genderId?: number;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsInt()
  phoneCountryId?: number;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsDate()
  birthday?: Date;

  @IsOptional()
  @IsInt()
  titleNameId?: number;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  ssn?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsInt()
  status?: number;

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
  customers!: customer[];

  @IsOptional()
  country?: country;

  @IsOptional()
  gender?: gender;

  @IsOptional()
  phoneCountry?: country;

  @IsOptional()
  titleName?: titleName;

  @IsDefined()
  processes!: process[];

  @IsDefined()
  users!: user[];
}
