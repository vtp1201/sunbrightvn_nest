import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EndpointWebhookController } from './controllers';
import { StripeService } from './stripe.service';

@Module({
  imports: [ConfigModule],
  controllers: [EndpointWebhookController],
  providers: [StripeService],
  exports: [StripeService],
})
export class StripeModule {}
