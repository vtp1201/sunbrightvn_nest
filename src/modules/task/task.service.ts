import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { TaskRepository } from './task.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class TaskService extends AbstractService<MODEL_NAME.TASK, TaskRepository> {
  constructor(repository: TaskRepository) {
    super(repository);
  }
}
