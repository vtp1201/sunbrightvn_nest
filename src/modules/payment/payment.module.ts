import { Module } from '@nestjs/common';

import { CountryModule, OrderModule, StripeModule } from '@modules';

import { PaymentService } from './payment.service';

@Module({
  imports: [StripeModule, CountryModule, OrderModule],
  providers: [PaymentService],
})
export class PaymentModule {}
