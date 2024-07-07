import { createMixin } from 'schemix';
import { ATTRIBUTE_DEFAULT } from '../utils/enums/default';
import { ONE_ONE_MIXIN } from '../types';

export default ({ attribute, relation, model, option = {} }: ONE_ONE_MIXIN) => {
  return createMixin((oneToOneMixin) => {
    oneToOneMixin.relation(relation, model, {
      ...option,
      name: relation,
      fields: [attribute],
      references: option?.references ?? [ATTRIBUTE_DEFAULT.id],
    });
  });
};
