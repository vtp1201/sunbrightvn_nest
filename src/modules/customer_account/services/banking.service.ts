import { BadRequestException, Injectable } from '@nestjs/common';

import { BankService } from '@modules/bank/bank.service';
import { BankingProcessService } from '@modules/banking_process/banking-process.service';
import { TaskService } from '@modules/task/task.service';

import { BANKING_PROCESS_STATUS } from '@utilities';

@Injectable()
export class BankingCustomerAccountService {
  constructor(
    private taskService: TaskService,
    private bankService: BankService,
    private bankingProcessService: BankingProcessService,
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
