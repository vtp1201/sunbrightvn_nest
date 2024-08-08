import { IsDate, IsDefined, IsInt, IsOptional } from 'class-validator';

import { additionProcess, agent, task } from './';

export class taskHasAgent {
  @IsDefined()
  @IsInt()
  taskId!: number;

  @IsDefined()
  @IsInt()
  agentId!: number;

  @IsOptional()
  @IsInt()
  additionProcessId?: number;

  @IsDefined()
  @IsDate()
  createdTime!: Date;

  @IsOptional()
  additionProcess?: additionProcess;

  @IsDefined()
  agent!: agent;

  @IsDefined()
  task!: task;
}
