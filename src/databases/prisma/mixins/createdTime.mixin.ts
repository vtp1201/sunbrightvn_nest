import { createMixin } from 'schemix';

import { INIT_DEFAULT_MIXIN } from '../types';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from '../utils/enums/default';

export default ({
  attribute = ATTRIBUTE_DEFAULT.createdTime,
  column = COLUMN_DEFAULT.createdTime,
}: INIT_DEFAULT_MIXIN) => {
  return createMixin((createdTimeMixin) => {
    createdTimeMixin.dateTime(attribute, {
      default: { now: true },
      map: column,
    });
  });
};
