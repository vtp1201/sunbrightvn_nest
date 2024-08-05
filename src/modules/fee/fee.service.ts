import { Injectable } from '@nestjs/common';

import { ServiceService } from '@modules/service/service.service';

import { AbstractService } from '@abstracts';

import { FeeRepository } from './fee.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class FeeService extends AbstractService<MODEL_NAME.FEE, FeeRepository> {
  constructor(
    repository: FeeRepository,
    private serviceService: ServiceService,
  ) {
    super(repository);
  }

  async calculateUnitPriceInit(serviceId: number) {
    const service = await this.serviceService.findUnique({
      where: {
        id: serviceId,
      },
      include: {
        fees: true,
      },
    });
    if (!service) return 0;
    return service.fees[0]?.value ?? 0;
  }
}
