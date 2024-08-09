import { Module } from '@nestjs/common';

import { BillingModule, CompanyModule, CustomerModule } from '@modules';

@Module({
  imports: [BillingModule, CompanyModule, CustomerModule],
})
export class XeroModule {}
