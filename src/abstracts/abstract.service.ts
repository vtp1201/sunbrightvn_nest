import { AbstractRepository } from './abstract.repository';
import { ModelArgs, ModelName } from './abstract.repository.interface';
import { Prisma } from '@prisma/client';

export abstract class AbstractService<M extends ModelName> {
  constructor(private readonly _repository: AbstractRepository<M>) {}
  findUnique<A extends ModelArgs<M, 'findUnique'>>(
    args: Prisma.SelectSubset<A, ModelArgs<M, 'findUnique'>>,
  ) {
    return this._repository.findUnique(args);
  }

  findUniqueOrThrow<A extends ModelArgs<M, 'findUniqueOrThrow'>>(
    args?: Prisma.SelectSubset<A, ModelArgs<M, 'findUniqueOrThrow'>>,
  ) {
    return this._repository.findUniqueOrThrow(args);
  }

  findFirst<A extends ModelArgs<M, 'findFirst'>>(
    args?: Prisma.SelectSubset<A, ModelArgs<M, 'findFirst'>>,
  ) {
    return this._repository.findFirst(args);
  }

  findFirstOrThrow<A extends ModelArgs<M, 'findFirstOrThrow'>>(
    args?: Prisma.SelectSubset<A, ModelArgs<M, 'findFirstOrThrow'>>,
  ) {
    return this._repository.findFirstOrThrow(args);
  }

  findMany<A extends ModelArgs<M, 'findMany'>>(
    args?: Prisma.SelectSubset<A, ModelArgs<M, 'findMany'>>,
  ) {
    return this._repository.findMany(args);
  }

  create<A extends ModelArgs<M, 'create'>>(
    args: Prisma.SelectSubset<A, ModelArgs<M, 'create'>>,
  ) {
    return this._repository.create(args);
  }

  createMany<A extends ModelArgs<M, 'createMany'>>(
    args?: Prisma.SelectSubset<A, ModelArgs<M, 'createMany'>>,
  ) {
    return this._repository.createMany(args);
  }

  update<A extends ModelArgs<M, 'update'>>(
    args: Prisma.SelectSubset<A, ModelArgs<M, 'update'>>,
  ) {
    return this._repository.update(args);
  }

  updateMany<A extends ModelArgs<M, 'updateMany'>>(
    args: Prisma.SelectSubset<A, ModelArgs<M, 'updateMany'>>,
  ) {
    return this._repository.updateMany(args);
  }

  delete<A extends ModelArgs<M, 'delete'>>(
    args: Prisma.SelectSubset<A, ModelArgs<M, 'delete'>>,
  ) {
    return this._repository.delete(args);
  }

  deleteMany<A extends ModelArgs<M, 'deleteMany'>>(
    args?: Prisma.SelectSubset<A, ModelArgs<M, 'deleteMany'>>,
  ) {
    return this._repository.deleteMany(args);
  }

  upsert<A extends ModelArgs<M, 'upsert'>>(
    args: Prisma.SelectSubset<A, ModelArgs<M, 'upsert'>>,
  ) {
    return this._repository.upsert(args);
  }
}
