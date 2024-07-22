import { Module } from '@nestjs/common';

import { EndpointWebhookController } from './controller';

@Module({
  imports: [],
  controllers: [EndpointWebhookController],
})
export class StripeModule {}
