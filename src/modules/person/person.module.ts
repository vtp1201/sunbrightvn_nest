import { Module } from '@nestjs/common';

import { PersonRepository } from './person.repository';
import { PersonService } from './person.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PersonRepository, PersonService],
  exports: [PersonService],
})
export class PersonModule {}
