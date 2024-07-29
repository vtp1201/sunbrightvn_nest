import { Injectable } from '@nestjs/common';

import { AbstractService } from '@abstracts';

import { NoteRepository } from './note.repository';

import { MODEL_NAME } from '@utilities';

@Injectable()
export class NoteService extends AbstractService<MODEL_NAME.NOTE, NoteRepository> {
  constructor(repository: NoteRepository) {
    super(repository);
  }
}
