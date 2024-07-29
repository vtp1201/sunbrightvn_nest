import { Module } from '@nestjs/common';

import { NoteRepository } from './note.repository';
import { NoteService } from './note.service';

@Module({
  imports: [],
  controllers: [],
  providers: [NoteService, NoteRepository],
  exports: [NoteService],
})
export class NoteModule {}
