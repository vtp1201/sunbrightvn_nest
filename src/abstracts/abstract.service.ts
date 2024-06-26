import { BadRequestException } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';

export abstract class AbstractService<R extends AbstractRepository<any>> {
  constructor(private readonly repository: R) {}

  async createOne(args: any) {
    try {
      const data = await this.repository.create(args);
      return data;
    } catch (error) {
      throw new BadRequestException('');
    }
  }
}
