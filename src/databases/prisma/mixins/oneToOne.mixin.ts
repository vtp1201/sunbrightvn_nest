import { createMixin } from 'schemix';
import { ATTRIBUTE_DEFAULT } from '../utils/enums/default';
import { ONE_ONE_MIXIN } from '../types';

export default ({
  attribute,
  relation,
  model,
  option = {},
  isNeedName = false,
}: ONE_ONE_MIXIN) => {
  return createMixin((oneToOneMixin) => {
    oneToOneMixin.relation(
      relation,
      model,
      isNeedName
        ? {
            ...option,
            name: relation,
            fields: [attribute],
            references: option?.references ?? [ATTRIBUTE_DEFAULT.id],
          }
        : {
            ...option,
            fields: [attribute],
            references: option?.references ?? [ATTRIBUTE_DEFAULT.id],
          },
    );
  });
};
