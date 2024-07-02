import { createMixin } from 'schemix';
import { ONE_MANY_MIXIN } from '../types';

export default ({ relation, model, name = undefined }: ONE_MANY_MIXIN) => {
  return createMixin((oneToManyMixin) => {
    oneToManyMixin.relation(relation, model, {
      name,
      list: true,
    });
  });
};
