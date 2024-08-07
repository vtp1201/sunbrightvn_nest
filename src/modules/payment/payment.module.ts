import { Module } from '@nestjs/common';

import { StripeModule } from '@modules';

@Module({
  imports: [StripeModule],
})
export class PaymentModule {}
