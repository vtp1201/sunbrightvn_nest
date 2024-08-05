import { Module } from '@nestjs/common';

import { OrderRepository } from './order.repository';
import { OrderService } from './order.service';

@Module({
  imports: [],
  providers: [OrderService, OrderRepository],
  exports: [OrderService],
})
export class OrderModule {}
