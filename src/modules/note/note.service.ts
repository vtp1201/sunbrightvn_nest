import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';
import { MODEL_NAME } from '@utilities';

import { NoteRepository } from './note.repository';

@Injectable()
export class NoteService extends AbstractService<MODEL_NAME.NOTE, NoteRepository> {
  constructor(repository: NoteRepository) {
    super(repository);
  }
}
