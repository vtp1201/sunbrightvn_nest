import { AbstractRepository } from 'src/abstracts';
import { PrismaService } from '@databases/prisma.service';
import { Injectable } from '@nestjs/common';
import { MODEL_NAME } from '@utilities';

@Injectable()
export class UserRepository extends AbstractRepository<MODEL_NAME.USER> {
  constructor(prismaService: PrismaService) {
    super(prismaService);
  }

  async test() {
    const data = await this.findUnique({
      select: {
        id: true,
      },
      where: {
        id: 2,
      },
    });
    return data;
  }
}
