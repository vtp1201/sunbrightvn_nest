import { AbstractRepository } from 'src/abstracts';
import { PrismaService } from '@databases/prisma.service';
import { Injectable } from '@nestjs/common';
import { ss } from '@utilities';

const user = 'user';

@Injectable()
export class UserRepository extends AbstractRepository<ss.USER> {
  constructor(prismaService: PrismaService) {
    super(user, prismaService);
  }

  async check() {
    const data = await this.findMany({
      select: { id: true },
      where: {},
    });
    return data;
  }
}
