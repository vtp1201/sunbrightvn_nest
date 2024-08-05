import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { OrderRepository } from './order.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class OrderService extends AbstractService<MODEL_NAME.ORDER, OrderRepository> {
  constructor(repository: OrderRepository) {
    super(repository);
  }
}
