import { Module } from '@nestjs/common';

import { TaskRepository } from './task.repository';
import { TaskService } from './task.service';

@Module({
  imports: [],
  controllers: [],
  providers: [TaskService, TaskRepository],
  exports: [TaskService],
})
export class TaskModule {}
