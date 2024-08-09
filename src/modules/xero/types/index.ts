import { Package, xeroAccount } from '@prisma/client';

import { Billing, Company, Customer, Order, OrderItem, Service } from '@types';

export * from '../xero.service';

export type CreateNewContactXeroInPortalInput = Order & {
  billing?: Billing;
  customer?: Customer;
  company?: Company;
};

export type createInvoiceInput = {
  orderId: number;
  xeroContactId: string;
  orderItems: (OrderItem & {
    service?: Service & {
      xeroAccount?: xeroAccount;
    };
    package?: Package & {
      xeroAccount?: xeroAccount;
    };
  })[];
};
