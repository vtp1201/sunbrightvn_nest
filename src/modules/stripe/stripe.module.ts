import { Module } from '@nestjs/common';

import { EndpointWebhookController } from './controllers';

@Module({
  imports: [],
  controllers: [EndpointWebhookController],
})
export class StripeModule {}
