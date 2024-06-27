import { BadRequestException } from '@nestjs/common';
import { AbstractRepository } from './abstract.repository';
import { ModelName } from './abstract.repository.interface';

export abstract class AbstractService<M extends ModelName> {
  constructor(private readonly _repository: AbstractRepository<M>) {}
  async createOne(args: any) {
    try {
      const data = await this._repository.create(args);
      return data;
    } catch (error) {
      throw new BadRequestException('');
    }
  }
}
