import { billing, order, orderItem } from '@prisma/client';

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
};

export type UpdateAfterPaymentOutput = Order & {
  orderItems: OrderItem[];
  billing: billing;
};
