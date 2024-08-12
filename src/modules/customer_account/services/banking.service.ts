import { BadRequestException, Injectable } from '@nestjs/common';

import { BankingProcessService, BankService, FeeService, OrderService, TaskService } from '@types';

import { BANKING_PROCESS_STATUS, COUNTRY, ORDER_FROM, SERVICE_TYPE, WEBSITE } from '@utilities';

@Injectable()
export class BankingCustomerAccountService {
  constructor(
    private taskService: TaskService,
    private bankService: BankService,
    private bankingProcessService: BankingProcessService,
    private feeService: FeeService,
    private orderService: OrderService,
  ) {}

  async getBankingProcessesByOrderAndCustomer(orderId: number, customerId: number) {
    const task = await this.taskService.findFirstOrThrow({
      select: {
        id: true,
        bankingProcesses: {
          select: {
            id: true,
            bankId: true,
            status: true,
            bank: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
      },
      where: {
        orderId,
        customerId,
      },
    });
    return task.bankingProcesses;
  }

  getAllBank() {
    return this.bankService.findMany({
      select: {
        id: true,
        name: true,
        agents: {
          select: {
            bankId: true,
            agency: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }

  async upgradeService(param: { taskId: number; customerId: number; websiteId?: number }) {
    const task = await this.taskService.findUniqueOrThrow({
      select: {
        id: true,
        upgradeOrderId: true,
        bankingProcesses: {
          select: {
            id: true,
            status: true,
          },
        },
        customer: true,
        order: {
          select: {
            id: true,
            websiteId: true,
            company: {
              select: {
                id: true,
                countryId: true,
                numOfCheckingBank: true,
                billingId: true,
              },
            },
            orderItems: {
              select: {
                service: {
                  select: {
                    id: true,
                    upgradeServiceId: true,
                    quantity: true,
                    serviceType: true,
                  },
                },
              },
              where: {
                service: {
                  serviceType: {
                    id: SERVICE_TYPE.BANKING_ASSISTANCE,
                  },
                },
              },
            },
          },
        },
      },
      where: {
        id: param.taskId,
        customer: {
          id: param.customerId,
        },
      },
    });

    const availableBankingProcess = task.bankingProcesses.filter((bankingProcess) =>
      [BANKING_PROCESS_STATUS.PROCESSING, BANKING_PROCESS_STATUS.DONE].includes(
        bankingProcess.status,
      ),
    ); // === pending || success

    if (
      availableBankingProcess.length > 0 ||
      task.bankingProcesses.length < task.order.company.numOfCheckingBank
    )
      throw new BadRequestException('Upgrade Banking Process is not available!');

    const serviceId: number | null = task.order.orderItems.find(
      (orderItem) => orderItem.service.upgradeServiceId,
    )?.service?.upgradeServiceId;

    if (!serviceId) throw new BadRequestException('Upgrade Banking Process is not available!');

    const websiteId =
      task.order.company.countryId === COUNTRY.SINGAPORE
        ? WEBSITE.BBCINCORP_SG
        : WEBSITE.BBCINCORP_HK;

    const unitPrice = await this.feeService.calculateUnitPriceInit(serviceId);
    const newOrder = await this.orderService.create({
      data: {
        companyId: task.order.company.id,
        customerId: task.customer.id,
        orderItems: {
          create: [
            {
              serviceId,
              packageId: null,
              quantity: 1,
              unitPrice,
              amount: unitPrice * 1,
            },
          ],
        },
        billingId: task.order.company.billingId,
        websiteId,
        amount: unitPrice * 1,
        orderFromId: ORDER_FROM.PORTAL,
      },
    });
    await this.taskService.update({
      where: {
        id: task.id,
      },
      data: {
        upgradeOrderId: newOrder.id,
      },
    });
    return newOrder;
  }

  async createBankingProcessForTask(param: { bankId: number; taskId: number }) {
    const task = await this.taskService.findUniqueOrThrow({
      select: {
        id: true,
        bankingProcesses: {
          select: {
            id: true,
          },
          where: {
            status: BANKING_PROCESS_STATUS.PROCESSING,
          },
        },
      },
      where: {
        id: param.taskId,
      },
    });

    if (task.bankingProcesses.length > 0) {
      throw new BadRequestException();
    }

    return this.bankingProcessService.create({
      data: param,
    });
  }
}
