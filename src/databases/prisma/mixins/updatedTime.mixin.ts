import { createMixin } from 'schemix';

import { INIT_DEFAULT_MIXIN } from '../types';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from '../utils/enums/default';

export default ({
  attribute = ATTRIBUTE_DEFAULT.updatedTime,
  column = COLUMN_DEFAULT.updatedTime,
}: INIT_DEFAULT_MIXIN) => {
  return createMixin((updatedTimeMixin) => {
    updatedTimeMixin.dateTime(attribute, {
      updatedAt: true,
      map: column,
    });
  });
};
