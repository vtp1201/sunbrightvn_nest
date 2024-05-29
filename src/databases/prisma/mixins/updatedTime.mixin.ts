import { createMixin } from 'schemix';
import { ATTRIBUTE_DEFAULT, COLUMN_DEFAULT } from '../utils/enums/default';

export default createMixin((updatedTimeMixin) => {
  updatedTimeMixin.dateTime(ATTRIBUTE_DEFAULT.updatedTime, {
    updatedAt: true,
    map: COLUMN_DEFAULT.updatedTime,
  });
});
