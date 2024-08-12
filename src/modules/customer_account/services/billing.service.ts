import { Injectable } from '@nestjs/common';

import { BankService } from '@modules/bank/bank.service';
import { BankingProcessService } from '@modules/banking_process/banking-process.service';
import { FeeService } from '@modules/fee/fee.service';
import { OrderService } from '@modules/order/order.service';
import { TaskService } from '@modules/task/task.service';

@Injectable()
export class BillingCustomerAccountService {
  constructor(
    private taskService: TaskService,
    private bankService: BankService,
    private bankingProcessService: BankingProcessService,
    private feeService: FeeService,
    private orderService: OrderService,
  ) {}
}
