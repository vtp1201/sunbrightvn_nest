import { createMixin } from 'schemix';
import { ONE_MANY_MIXIN } from '../types';

export default ({
  relation,
  model,
  fromRelation = undefined,
}: ONE_MANY_MIXIN) => {
  return createMixin((oneToManyMixin) => {
    oneToManyMixin.relation(
      relation,
      model,
      fromRelation
        ? {
            name: fromRelation,
            list: true,
          }
        : {
            list: true,
          },
    );
  });
};
