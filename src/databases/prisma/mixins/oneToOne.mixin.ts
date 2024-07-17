import { createMixin } from 'schemix';

import { ONE_ONE_MIXIN } from '../types';
import { ATTRIBUTE_DEFAULT } from '../utils/enums/default';

export default ({
  attribute,
  relation,
  model,
  map,
  option = {},
  isNeedName = false,
}: ONE_ONE_MIXIN) => {
  return createMixin((oneToOneMixin) => {
    if (map) option.map = map;
    if (isNeedName) option.name = relation;
    oneToOneMixin.relation(relation, model, {
      ...option,
      fields: [attribute],
      references: option?.references ?? [ATTRIBUTE_DEFAULT.id],
    });
  });
};
