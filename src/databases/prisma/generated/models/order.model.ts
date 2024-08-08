import { IsBoolean, IsDate, IsDefined, IsInt, IsOptional, IsString } from 'class-validator';

import {
  bank,
  billing,
  company,
  companyEvent,
  country,
  customer,
  file,
  orderFrom,
  orderItem,
  orderStatus,
  paymentGateway,
  paymentInformation,
  supportCase,
  task,
  visaOrder,
  voucher,
  website,
  xeroInvoiceStatus,
} from './';

export class order {
  @IsDefined()
  @IsInt()
  id!: number;

  @IsOptional()
  @IsInt()
  customerId?: number;

  @IsOptional()
  @IsInt()
  companyId?: number;

  @IsOptional()
  amount?: number;

  @IsOptional()
  amountConverted?: number;

  @IsOptional()
  @IsString()
  amountCode?: string;

  @IsOptional()
  amountExchangeRate?: number;

  @IsOptional()
  paidAmount?: number;

  @IsOptional()
  refundAmount?: number;

  @IsOptional()
  discount?: number;

  @IsOptional()
  creditAmount?: number;

  @IsOptional()
  @IsString()
  creditDescription?: string;

  @IsOptional()
  annualFee?: number;

  @IsDefined()
  @IsBoolean()
  isInvoiced!: boolean;

  @IsOptional()
  @IsString()
  orderCode?: string;

  @IsOptional()
  @IsString()
  xeroInvoiceId?: string;

  @IsOptional()
  @IsInt()
  paymentGatewayId?: number;

  @IsOptional()
  @IsString()
  paypalOrderId?: string;

  @IsOptional()
  @IsString()
  paypalInvoiceId?: string;

  @IsOptional()
  @IsInt()
  xeroInvoiceStatusId?: number;

  @IsOptional()
  @IsString()
  xeroInvoiceUrl?: string;

  @IsOptional()
  @IsString()
  xeroInvoiceNo?: string;

  @IsDefined()
  @IsInt()
  orderStatusId!: number;

  @IsOptional()
  @IsDate()
  paidTime?: Date;

  @IsOptional()
  @IsInt()
  websiteId?: number;

  @IsOptional()
  @IsInt()
  billingId?: number;

  @IsOptional()
  @IsInt()
  orderFromId?: number;

  @IsOptional()
  @IsInt()
  countryCardId?: number;

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
  customers!: customer[];

  @IsDefined()
  files!: file[];

  @IsOptional()
  billing?: billing;

  @IsOptional()
  company?: company;

  @IsOptional()
  customer?: customer;

  @IsDefined()
  orderStatus!: orderStatus;

  @IsOptional()
  paymentGateway?: paymentGateway;

  @IsOptional()
  website?: website;

  @IsOptional()
  xeroInvoiceStatus?: xeroInvoiceStatus;

  @IsOptional()
  countryCard?: country;

  @IsOptional()
  orderFrom?: orderFrom;

  @IsDefined()
  banks!: bank[];

  @IsDefined()
  orderItems!: orderItem[];

  @IsDefined()
  paymentsInformation!: paymentInformation[];

  @IsDefined()
  supportCases!: supportCase[];

  @IsDefined()
  tasks!: task[];

  @IsDefined()
  upgradeOrderTasks!: task[];

  @IsDefined()
  visaOrders!: visaOrder[];

  @IsDefined()
  vouchers!: voucher[];
}
