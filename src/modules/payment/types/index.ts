import { Customer, Order, OrderItem, User } from '@types';

export * from '../payment.service';

export type PaymentWithCardViaStripeInput = {
  cardholderName: string;
  user: User & { customer: Customer };
  order: Order & { orderItems: OrderItem[] };
};
