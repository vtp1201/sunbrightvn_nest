import { createMixin } from 'schemix';
import { MANY_MANY_MIXIN } from '../types';

export default ({ A, B, uniqueIndex }: MANY_MANY_MIXIN) => {
  return createMixin((manyToManyMixin) => {
    manyToManyMixin;
  });
};
