import { AbstractRepository } from './abstract.repository';
import { ModelName } from './abstract.repository.interface';
import { AbstractService } from './abstract.service';

export abstract class AbstractController<
  M extends ModelName,
  T extends AbstractRepository<M>,
  S extends AbstractService<M, T>,
> {
  constructor(protected readonly service: S) {}
  create() {}
}
