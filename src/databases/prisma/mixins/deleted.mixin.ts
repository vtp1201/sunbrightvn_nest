import { createMixin } from 'schemix';

import { INIT_DEFAULT_MIXIN } from '../types';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from '../utils/enums/default';

export default (deletedTime: INIT_DEFAULT_MIXIN, isDeleted: INIT_DEFAULT_MIXIN) => {
  return createMixin((deletedMixin) => {
    deletedMixin
      .dateTime(deletedTime.attribute ?? ATTRIBUTE_DEFAULT.deletedTime, {
        default: { now: true },
        map: deletedTime.column ?? COLUMN_DEFAULT.deletedTime,
      })
      .boolean(isDeleted.attribute ?? ATTRIBUTE_DEFAULT.isDeleted, {
        default: false,
        map: isDeleted.column ?? COLUMN_DEFAULT.isDeleted,
      });
  });
};
