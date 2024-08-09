import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { UpdateAfterPaymentInput } from '@types';

import { MODEL_NAME, ORDER_STATUS } from '@utilities';

@Injectable()
export class OrderRepository extends AbstractRepository<MODEL_NAME.ORDER> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }

  updateAfterPayment(param: UpdateAfterPaymentInput) {
    const data = {
      orderStatusId: ORDER_STATUS.PAID,
      paidAmount: param.paidAmount,
      amountConverted: param.amountConverted,
      paymentGatewayId: param.paymentGatewayId ?? undefined,
      amountCode: param.amountCode,
      amountExchangeRate: param.amountExchangeRate,
      countryCardId: param.countryCardId ?? null,
      xeroInvoiceId: param.xeroInvoiceId,
      xeroInvoiceNo: param.xeroInvoiceNo,
      paidTime: new Date(),
    };
    return this.update({
      where: {
        id: param.id,
      },
      data,
      include: {
        customer: true,
        billing: true,
        company: true,
        orderItems: {
          include: {
            service: true,
            package: true,
          },
        },
      },
    });
  }
}
