import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  processId = 'processId',
  noteId = 'noteId',
}

export enum COLUMN {
  processId = 'process_id',
  noteId = 'note_id',
}

export enum RELATION {
  note = RELATION_DEFAULT.note,
  process = RELATION_DEFAULT.process,
}

export default {
  ATTRIBUTE,
  RELATION,
};
