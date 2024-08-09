import { Module } from '@nestjs/common';

import { RoleRepository } from './role.repository';
import { RoleService } from './role.service';

@Module({
  imports: [],
  controllers: [],
  providers: [RoleService, RoleRepository],
  exports: [RoleService],
})
export class RoleModule {}
