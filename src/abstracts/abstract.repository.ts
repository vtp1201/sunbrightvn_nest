import { PrismaService } from '@databases/prisma.service';
import {
  IAbstractRepository,
  ModelArgs,
  ModelName,
  ModelResult,
} from './abstract.repository.interface';
import { Prisma } from '@prisma/client';
// import { ExtendedPrismaClient } from '@core/database';

export class AbstractRepository<T extends ModelName>
  implements IAbstractRepository<T>
{
  constructor(
    private readonly _model: Uncapitalize<T>,
    private readonly _prismaService: PrismaService,
  ) {}

  findUnique<A extends ModelArgs<T, 'findUnique'>>(
    args: Prisma.SelectSubset<A, ModelArgs<T, 'findUnique'>>,
  ): ModelResult<T, A, 'findUnique'> {
    return this._prismaService[this._model as Prisma.ModelName].findUnique(
      args,
    );
  }

  findUniqueOrThrow<A extends ModelArgs<T, 'findUniqueOrThrow'>>(
    args?: Prisma.SelectSubset<A, ModelArgs<T, 'findUniqueOrThrow'>>,
  ): ModelResult<T, A, 'findUniqueOrThrow'> {
    return this._prismaService[
      this._model as Prisma.ModelName
    ].findUniqueOrThrow(args);
  }

  findFirst<A extends ModelArgs<T, 'findFirst'>>(
    args?: Prisma.SelectSubset<A, ModelArgs<T, 'findFirst'>>,
  ): ModelResult<T, A, 'findFirst'> {
    return this._prismaService[this._model as Prisma.ModelName].findFirst(args);
  }

  findFirstOrThrow<A extends ModelArgs<T, 'findFirstOrThrow'>>(
    args?: Prisma.SelectSubset<A, ModelArgs<T, 'findFirstOrThrow'>>,
  ): ModelResult<T, A, 'findFirstOrThrow'> {
    return this._prismaService[
      this._model as Prisma.ModelName
    ].findFirstOrThrow(args);
  }

  findMany<A extends ModelArgs<T, 'findMany'>>(
    args?: Prisma.SelectSubset<A, ModelArgs<T, 'findMany'>>,
  ): ModelResult<T, A, 'findMany'> {
    return this._prismaService[this._model as Prisma.ModelName].findMany(args);
  }

  create<A extends ModelArgs<T, 'create'>>(
    args: Prisma.SelectSubset<A, ModelArgs<T, 'create'>>,
  ): ModelResult<T, A, 'create'> {
    return this._prismaService[this._model as Prisma.ModelName].create(args);
  }

  createMany<A extends ModelArgs<T, 'createMany'>>(
    args?: Prisma.SelectSubset<A, ModelArgs<T, 'createMany'>>,
  ): ModelResult<T, A, 'createMany'> {
    return this._prismaService[this._model as Prisma.ModelName].createMany(
      args,
    );
  }

  update<A extends ModelArgs<T, 'update'>>(
    args: Prisma.SelectSubset<A, ModelArgs<T, 'update'>>,
  ): ModelResult<T, A, 'update'> {
    return this._prismaService[this._model as Prisma.ModelName].update(args);
  }

  updateMany<A extends ModelArgs<T, 'updateMany'>>(
    args: Prisma.SelectSubset<A, ModelArgs<T, 'updateMany'>>,
  ): ModelResult<T, A, 'updateMany'> {
    return this._prismaService[this._model as Prisma.ModelName].updateMany(
      args,
    );
  }

  delete<A extends ModelArgs<T, 'delete'>>(
    args: Prisma.SelectSubset<A, ModelArgs<T, 'delete'>>,
  ): ModelResult<T, A, 'delete'> {
    return this._prismaService[this._model as Prisma.ModelName].delete(args);
  }

  deleteMany<A extends ModelArgs<T, 'deleteMany'>>(
    args?: Prisma.SelectSubset<A, ModelArgs<T, 'deleteMany'>>,
  ): ModelResult<T, A, 'deleteMany'> {
    return this._prismaService[this._model as Prisma.ModelName].deleteMany(
      args,
    );
  }

  upsert<A extends ModelArgs<T, 'upsert'>>(
    args: Prisma.SelectSubset<A, ModelArgs<T, 'upsert'>>,
  ): ModelResult<T, A, 'upsert'> {
    return this._prismaService[this._model as Prisma.ModelName].upsert(args);
  }
}
