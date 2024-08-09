import { billing, company, customer, order, orderItem } from '@prisma/client';

export * from '../order.service';

export type Order = order;

export type OrderItem = orderItem;

export type UpdateAfterPaymentInput = {
  id: number;
  paidAmount: number;
  amountConverted: number;
  paymentGatewayId?: number | null;
  amountCode: string;
  amountExchangeRate?: number | null;
  countryCardId?: number | null;
  xeroInvoiceId?: string;
  xeroInvoiceNo?: string;
};

export type UpdateAfterPaymentOutput = Order & {
  orderItems: OrderItem[];
  billing: billing;
  customer: customer;
  company: company;
};
