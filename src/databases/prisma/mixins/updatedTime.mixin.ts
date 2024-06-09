import { createMixin } from 'schemix';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from '../utils/enums/default';
import { INIT_DEFAULT_MIXIN } from '../types';

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
