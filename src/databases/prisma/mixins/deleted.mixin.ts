import { createMixin } from 'schemix';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from '../utils/enums/default';

export default createMixin((deletedMixin) => {
  deletedMixin
    .boolean(ATTRIBUTE_DEFAULT.isDeleted, {
      default: false,
      map: COLUMN_DEFAULT.isDeleted,
    })
    .dateTime(ATTRIBUTE_DEFAULT.deletedTime, {
      map: COLUMN_DEFAULT.deletedTime,
      optional: true,
    });
});
