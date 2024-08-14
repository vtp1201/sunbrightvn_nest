import { Module } from '@nestjs/common';

import { FileModule } from '@modules/file/file.module';

import { NoteRepository } from './note.repository';
import { NoteService } from './note.service';

@Module({
  imports: [FileModule],
  controllers: [],
  providers: [NoteRepository, NoteService],
  exports: [NoteService],
})
export class NoteModule {}
