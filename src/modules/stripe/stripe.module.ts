import { Module } from '@nestjs/common';

import { EndpointWebhookController } from './controllers';
import { StripeService } from './stripe.service';

@Module({
  imports: [],
  controllers: [EndpointWebhookController],
  exports: [StripeService],
})
export class StripeModule {}
