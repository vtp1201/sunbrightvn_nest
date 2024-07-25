import { RELATION_DEFAULT } from './default';

export enum ATTRIBUTE {
  id = 'id',
  name = 'name',
}

export enum COLUMN {
  id = 'id',
  name = 'name',
}

export enum RELATION {
  questions = RELATION_DEFAULT.questions,
}

export default {
  ATTRIBUTE,
  RELATION,
};
