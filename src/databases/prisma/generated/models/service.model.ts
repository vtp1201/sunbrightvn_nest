import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import {
  airport,
  carSeat,
  carType,
  companyEvent,
  companyMemberType,
  companySuffix,
  countryHasService,
  fee,
  orderItem,
  packageHasService,
  serviceHasFileTemplate,
  serviceType,
  serviceUnit,
  subscription,
  visaPurpose,
  visaType,
  website,
  xeroAccount,
} from './';

export class service {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsDefined()
  @IsInt()
  serviceTypeId!: number;

  @IsDefined()
  @IsInt()
  websiteId!: number;

  @IsOptional()
  @IsInt()
  visaTypeId?: number;

  @IsOptional()
  @IsInt()
  visaPurposeId?: number;

  @IsOptional()
  @IsInt()
  carTypeId?: number;

  @IsOptional()
  @IsInt()
  carSeatId?: number;

  @IsOptional()
  @IsInt()
  airportId?: number;

  @IsOptional()
  @IsInt()
  serviceUnitId?: number;

  @IsDefined()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  xeroItemId?: string;

  @IsOptional()
  @IsString()
  xeroItemCode?: string;

  @IsOptional()
  @IsString()
  uuid?: string;

  @IsOptional()
  @IsInt()
  xeroAccountId?: number;

  @IsDefined()
  @IsBoolean()
  isActive!: boolean;

  @IsDefined()
  @IsBoolean()
  isServiceOutsideCompany!: boolean;

  @IsDefined()
  @IsBoolean()
  isDisplayed!: boolean;

  @IsDefined()
  @IsBoolean()
  isAttachIncorp!: boolean;

  @IsOptional()
  @IsInt()
  quantity?: number;

  @IsOptional()
  @IsInt()
  upgradeServiceId?: number;

  @IsOptional()
  @IsInt()
  discountServiceId?: number;

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
  companyEvents!: companyEvent[];

  @IsDefined()
  countryHasServices!: countryHasService[];

  @IsDefined()
  fees!: fee[];

  @IsDefined()
  orderItems!: orderItem[];

  @IsDefined()
  packageHasServices!: packageHasService[];

  @IsOptional()
  discountService?: service;

  @IsDefined()
  discountForServices!: service[];

  @IsOptional()
  airport?: airport;

  @IsOptional()
  carSeat?: carSeat;

  @IsOptional()
  carType?: carType;

  @IsDefined()
  serviceType!: serviceType;

  @IsOptional()
  serviceUnit?: serviceUnit;

  @IsOptional()
  visaPurpose?: visaPurpose;

  @IsOptional()
  visaType?: visaType;

  @IsOptional()
  website?: website;

  @IsOptional()
  upgradeService?: service;

  @IsDefined()
  upgradeForServices!: service[];

  @IsOptional()
  xeroAccount?: xeroAccount;

  @IsDefined()
  companyMemberTypes!: companyMemberType[];

  @IsDefined()
  companySuffixes!: companySuffix[];

  @IsDefined()
  serviceHasFileTemplates!: serviceHasFileTemplate[];

  @IsDefined()
  subscriptions!: subscription[];
}
