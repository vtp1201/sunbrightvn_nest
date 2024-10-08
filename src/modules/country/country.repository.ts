import { Injectable } from '@nestjs/common';

import { AbstractRepository } from '@abstracts';

import { PrismaService } from '@databases/prisma.service';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class CountryRepository extends AbstractRepository<MODEL_NAME.COUNTRY> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }

  getCountryByCode(countryCode: string) {
    return this.findFirst({
      select: {
        id: true,
        name: true,
      },
      where: { countryCode: countryCode },
    });
  }
}
