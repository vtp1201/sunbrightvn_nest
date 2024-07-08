import { AbstractService } from './abstract.service';

export abstract class AbstractController<S extends AbstractService<any, any>> {
  constructor(protected readonly service: S) {}
}
