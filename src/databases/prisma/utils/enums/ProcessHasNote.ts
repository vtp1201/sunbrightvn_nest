import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT, RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  processId = 'processId',
  noteId = 'noteId',
  deletedTime = ATTRIBUTE_DEFAULT.deletedTime,
  isDeleted = ATTRIBUTE_DEFAULT.isDeleted,
}

export enum COLUMN {
  processId = 'process_id',
  noteId = 'note_id',
  deletedTime = COLUMN_DEFAULT.deletedTime,
  isDeleted = COLUMN_DEFAULT.isDeleted,
}

export enum RELATION {
  note = RELATION_DEFAULT.note,
  process = RELATION_DEFAULT.process,
}

export default {
  ATTRIBUTE,
  RELATION,
};
